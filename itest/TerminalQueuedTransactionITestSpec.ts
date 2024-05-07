/**
 * Copyright 2019-2024 BlockChyp, Inc. All rights reserved. Use of this code is governed
 * by a license that can be found in the LICENSE file.
 *
 * This file was generated automatically by the BlockChyp SDK Generator. Changes to this
 * file will be lost every time the code is regenerated.
 */

import { v4 as uuidv4 } from 'uuid';
import { Config } from './support/config';
import * as BlockChyp from '../index';

describe('TerminalQueuedTransaction', function () {
  let originalTimeout: number;
  let client: typeof BlockChyp.BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('Queues a terminal for later processing on a terminal', function (done) {
    client = BlockChyp.newClient(Config.getCreds(""));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    if (testDelayInt > 0) {
      const messageRequest = new BlockChyp.MessageRequest();
      messageRequest.test = true;
      messageRequest.terminalName = Config.getTerminalName();
      messageRequest.message = 'Running TerminalQueuedTransaction in ' + testDelay + ' seconds...';
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
    console.log('Running terminalQueuedTransaction...');

    setTimeout(async function () {
      try {
        // setup request object
        const request = new BlockChyp.AuthorizationRequest();
        request.terminalName = Config.getTerminalName();
        request.transactionRef = uuidv4();
        request.description = '1060 West Addison';
        request.amount = '25.15';
        request.test = true;
        request.queue = true;

        const httpResponse = await client.charge(request)
        const response: BlockChyp.AuthorizationResponse = httpResponse.data;
        // response assertions
        expect(response.success).toBe(true);
        expect(response.approved).toBe(false);
        expect(response.responseDescription)?.toEqual('Queued');

      } catch (error) {
        console.log('Error:', error);
        fail(error);
      } finally {
        done();
      }
    }, testDelayInt * 1000);
  });
});
