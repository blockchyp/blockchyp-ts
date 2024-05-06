/**
 * Copyright 2019-2024 BlockChyp, Inc. All rights reserved. Use of this code is governed
 * by a license that can be found in the LICENSE file.
 *
 * This file was generated automatically by the BlockChyp SDK Generator. Changes to this
 * file will be lost every time the code is regenerated.
 */

import { v4 as uuidv4 } from 'uuid';
import { Config } from './support/config';
import { BlockChypCredentials, BlockChypClient, MessageRequest, Acknowledgement } from '../index';
import { AuthorizationRequest } from '../index';
import { AuthorizationResponse } from '../index';

describe('TerminalTimeout', function () {
  let originalTimeout: number;
  let client: typeof BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('Can specify terminal request timeouts.', function (done) {
    client = BlockChypClient.newClient(Config.getCreds(""));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    if (testDelayInt > 0) {
      const messageRequest = new MessageRequest();
      messageRequest.test = true;
      messageRequest.terminalName = Config.getTerminalName();
      messageRequest.message = 'Running TerminalTimeout in ' + testDelay + ' seconds...';
      client.message(messageRequest)
        .then(function (httpResponse) {
          const response = httpResponse.data;
          expect(response.success).toBe(true);
        })
        .catch(function (error: any) {
          console.log('Error:', error);
          done();
        });
    }
    console.log('Running terminalTimeout...');

    setTimeout(async function () {
      try {
        // setup request object
        const request = new AuthorizationRequest();
        request.timeout = 1;
        request.terminalName = Config.getTerminalName();
        request.amount = '25.15';
        request.test = true;

        const httpResponse = await client.charge(request)
        const response: AuthorizationResponse = httpResponse.data;
        fail('Request should time out');
        } catch (error) {
      } finally {
        done();
      }
    }, testDelayInt * 1000);
  });
});
