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
import { TransactionDisplayRequest } from '../index';
import { TransactionDisplayTransaction } from '../index';
import { TransactionDisplayItem } from '../index';
import { TransactionDisplayDiscount } from '../index';

describe('UpdateTransactionDisplay', function () {
  let originalTimeout: number;
  let client: typeof BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('Can update transaction line item display', function (done) {
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
      messageRequest.message = 'Running UpdateTransactionDisplay in ' + testDelay + ' seconds...';
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
    console.log('Running updateTransactionDisplay...');

    setTimeout(async function () {
      try {
        // setup request object
        const request = new TransactionDisplayRequest();
        request.test = true;
        request.terminalName = Config.getTerminalName();

        const transaction = new TransactionDisplayTransaction();
        transaction.subtotal = '35.00';
        transaction.tax = '5.00';
        transaction.total = '70.00';

        const items = new TransactionDisplayItem();
        items.description = 'Leki Trekking Poles';
        items.price = '35.00';
        items.quantity = 2;
        items.extended = '70.00';

        const discounts = new TransactionDisplayDiscount();
        discounts.description = 'memberDiscount';
        discounts.amount = '10.00';

        items.discounts = [discounts];

        transaction.items = [items];
        request.transaction = transaction;

        const httpResponse = await client.updateTransactionDisplay(request)
        const response: Acknowledgement = httpResponse.data;
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
