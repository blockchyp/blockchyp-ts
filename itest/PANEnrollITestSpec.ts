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

describe('PANEnroll', function () {
  let originalTimeout: number;
  let client: typeof BlockChyp.BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('Can enroll the consumer in the payment token vault by PAN', function (done) {
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
      messageRequest.message = 'Running PANEnroll in ' + testDelay + ' seconds...';
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
    console.log('Running panEnroll...');

    setTimeout(async function () {
      try {
        // setup request object
        const request = new BlockChyp.EnrollRequest();
        request.pan = '4111111111111111';
        request.test = true;

        const customer = new BlockChyp.Customer();
        customer.customerRef = 'TESTCUSTOMER';
        customer.firstName = 'Test';
        customer.lastName = 'Customer';
        request.customer = customer;

        const httpResponse = await client.enroll(request)
        const response: BlockChyp.EnrollResponse = httpResponse.data;
        // response assertions
        expect(response.success).toBe(true);
        expect(response.approved).toBe(true);
        expect(response.test).toBe(true);
        expect(response.authCode?.length).toBe(6);
        expect(response.transactionId?.trim().length).toBeGreaterThan(0);
        expect(response.timestamp?.trim().length).toBeGreaterThan(0);
        expect(response.tickBlock?.trim().length).toBeGreaterThan(0);
        expect(response.responseDescription)?.toEqual('approved');
        expect(response.paymentType?.trim().length).toBeGreaterThan(0);
        expect(response.maskedPan?.trim().length).toBeGreaterThan(0);
        expect(response.entryMethod?.trim().length).toBeGreaterThan(0);
        expect(response.entryMethod)?.toEqual('KEYED');
        expect(response.token?.trim().length).toBeGreaterThan(0);

      } catch (error) {
        console.log('Error:', error);
        fail(error);
      } finally {
        done();
      }
    }, testDelayInt * 1000);
  });
});
