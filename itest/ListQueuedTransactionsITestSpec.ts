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
import { ListQueuedTransactionsRequest } from '../index';
import { ListQueuedTransactionsResponse } from '../index';
import { AuthorizationRequest } from '../index';
import { AuthorizationResponse } from '../index';

describe('ListQueuedTransactions', function () {
  let originalTimeout: number;
  let client: typeof BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('lists queued transactions on terminal.', function (done) {
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
      messageRequest.message = 'Running ListQueuedTransactions in ' + testDelay + ' seconds...';
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
    console.log('Running listQueuedTransactions...');

    setTimeout(async function () {
      try {
        // setup request object
        const setupRequest = new AuthorizationRequest();
          setupRequest.terminalName = Config.getTerminalName();
        setupRequest.transactionRef = uuidv4();
        setupRequest.description = '1060 West Addison';
        setupRequest.amount = '25.15';
        setupRequest.test = true;
        setupRequest.queue = true;
        let setupResponse: AuthorizationResponse = new AuthorizationResponse();
        const setupHttpResponse = await client.charge(setupRequest);
        if (setupHttpResponse.status !== 200) {
          console.log('Error:', setupHttpResponse.statusText);
          fail(setupHttpResponse.statusText);
          done();
        }
        setupResponse = setupHttpResponse.data

        // setup request object
        const request = new ListQueuedTransactionsRequest();
        request.terminalName = Config.getTerminalName();

        const httpResponse = await client.listQueuedTransactions(request)
        const response: ListQueuedTransactionsResponse = httpResponse.data;
        // response assertions
        expect(response.success).toBe(true);

      } catch (error) {
        console.log('Error:', error);
        fail(error);
      } finally {
        done();
      }
    }, testDelayInt * 1000);
  });
});
