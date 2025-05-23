/**
 * Copyright 2019-2025 BlockChyp, Inc. All rights reserved. Use of this code is governed
 * by a license that can be found in the LICENSE file.
 *
 * This file was generated automatically by the BlockChyp SDK Generator. Changes to this
 * file will be lost every time the code is regenerated.
 */

import { v4 as uuidv4 } from 'uuid';
import { Config } from './support/config';
import * as BlockChyp from '../index';

describe('SimpleVoid', function () {
  let originalTimeout: number;
  let client: typeof BlockChyp.BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('Can void a tranaction in the current batch', function (done) {
    client = BlockChyp.newClient(Config.getCreds(""));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    console.log('Running simpleVoid...');

    setTimeout(async function () {
      try {
        // setup request object
        const setupRequest = new BlockChyp.AuthorizationRequest();
          setupRequest.pan = '4111111111111111';
        setupRequest.expMonth = '12';
        setupRequest.expYear = '2025';
        setupRequest.amount = '25.55';
        setupRequest.test = true;
        setupRequest.transactionRef = uuidv4();
        let setupResponse: BlockChyp.AuthorizationResponse = new BlockChyp.AuthorizationResponse();
        const setupHttpResponse = await client.charge(setupRequest);
        if (setupHttpResponse.status !== 200) {
          console.log('Error:', setupHttpResponse.statusText);
          fail(setupHttpResponse.statusText);
          done();
        }
        setupResponse = setupHttpResponse.data

        // setup request object
        const request = new BlockChyp.VoidRequest();
        request.transactionId = setupResponse.transactionId;
        request.test = true;

        const httpResponse = await client.void(request)
        const response: BlockChyp.VoidResponse = httpResponse.data;
        // response assertions
        expect(response.success).toBe(true);
        expect(response.approved).toBe(true);

      } catch (error) {
        console.log('Error:', error);
        fail(error);
      } finally {
        done();
      }
    }, testDelayInt * 1000);
  });
});
