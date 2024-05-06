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

describe('PANPreauth', function () {
  let originalTimeout: number;
  let client: typeof BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('Can process a preauthorization by PAN', function (done) {
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
      messageRequest.message = 'Running PANPreauth in ' + testDelay + ' seconds...';
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
    console.log('Running panPreauth...');

    setTimeout(async function () {
      try {
        // setup request object
        const request = new AuthorizationRequest();
        request.pan = '4111111111111111';
        request.expMonth = '12';
        request.expYear = '2025';
        request.amount = '25.55';
        request.test = true;

        const httpResponse = await client.preauth(request)
        const response: AuthorizationResponse = httpResponse.data;
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
        expect(response.authorizedAmount)?.toEqual('25.55');
        expect(response.entryMethod)?.toEqual('KEYED');

      } catch (error) {
        console.log('Error:', error);
        fail(error);
      } finally {
        done();
      }
    }, testDelayInt * 1000);
  });
});
