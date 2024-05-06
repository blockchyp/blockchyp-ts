/**
 * Copyright 2019-2024 BlockChyp, Inc. All rights reserved. Use of this code is governed
 * by a license that can be found in the LICENSE file.
 *
 * This file was generated automatically by the BlockChyp SDK Generator. Changes to this
 * file will be lost every time the code is regenerated.
 */

import { v4 as uuidv4 } from 'uuid';
import { Config } from './support/config';
import { BlockChypCredentials, BlockChypClient } from '../index';
import { PaymentLinkRequest } from '../index';
import { PaymentLinkResponse } from '../index';
import { TransactionDisplayTransaction } from '../index';
import { TransactionDisplayItem } from '../index';
import { Customer } from '../index';

describe('SendPaymentLink', function () {
  let originalTimeout: number;
  let client: typeof BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('can generate a payment link', function (done) {
    client = BlockChypClient.newClient(Config.getCreds(""));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    console.log('Running sendPaymentLink...');

    setTimeout(async function () {
      try {
        // setup request object
        const request = new PaymentLinkRequest();
        request.amount = '199.99';
        request.description = 'Widget';
        request.subject = 'Widget invoice';

        const transaction = new TransactionDisplayTransaction();
        transaction.subtotal = '195.00';
        transaction.tax = '4.99';
        transaction.total = '199.99';

        const items = new TransactionDisplayItem();
        items.description = 'Widget';
        items.price = '195.00';
        items.quantity = 1;

        transaction.items = [items];
        request.transaction = transaction;
        request.autoSend = true;

        const customer = new Customer();
        customer.customerRef = 'Customer reference string';
        customer.firstName = 'FirstName';
        customer.lastName = 'LastName';
        customer.companyName = 'Company Name';
        customer.emailAddress = 'notifications@blockchypteam.m8r.co';
        customer.smsNumber = '(123) 123-1231';
        request.customer = customer;

        const httpResponse = await client.sendPaymentLink(request)
        const response: PaymentLinkResponse = httpResponse.data;
        // response assertions
        expect(response.success).toBe(true);
        expect(response.url?.trim().length).toBeGreaterThan(0);

      } catch (error) {
        console.log('Error:', error);
        fail(error);
      } finally {
        done();
      }
    }, testDelayInt * 1000);
  });
});
