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

describe('LinkToken', function () {
  let originalTimeout: number;
  let client: typeof BlockChyp.BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('can link a token with a customer record', function (done) {
    client = BlockChyp.newClient(Config.getCreds(""));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    console.log('Running linkToken...');

    setTimeout(async function () {
      try {
        // setup request object
        const setupRequest = new BlockChyp.EnrollRequest();
          setupRequest.pan = '4111111111111111';
        setupRequest.test = true;

        const customer = new BlockChyp.Customer();
        customer.customerRef = 'TESTCUSTOMER';
        customer.firstName = 'Test';
        customer.lastName = 'Customer';
        setupRequest.customer = customer;
        let setupResponse: BlockChyp.EnrollResponse = new BlockChyp.EnrollResponse();
        const setupHttpResponse = await client.enroll(setupRequest);
        if (setupHttpResponse.status !== 200) {
          console.log('Error:', setupHttpResponse.statusText);
          fail(setupHttpResponse.statusText);
          done();
        }
        setupResponse = setupHttpResponse.data

        // setup request object
        const request = new BlockChyp.LinkTokenRequest();
        request.token = setupResponse.token ?? null;
        request.customerId = setupResponse.customer?.id ?? null;

        const httpResponse = await client.linkToken(request)
        const response: BlockChyp.Acknowledgement = httpResponse.data;
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
