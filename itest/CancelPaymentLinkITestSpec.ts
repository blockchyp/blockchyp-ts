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
import { CancelPaymentLinkRequest } from '../index';
import { CancelPaymentLinkResponse } from '../index';
import { PaymentLinkRequest } from '../index';
import { PaymentLinkResponse } from '../index';
import { TransactionDisplayTransaction } from '../index';
import { TransactionDisplayItem } from '../index';
import { Customer } from '../index';

describe('CancelPaymentLink', function () {
  let originalTimeout: number;
  let client: typeof BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('can cancel a payment link.', function (done) {
    client = BlockChypClient.newClient(Config.getCreds(""));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    console.log('Running cancelPaymentLink...');

    setTimeout(async function () {
      try {
        // setup request object
        const setupRequest = new PaymentLinkRequest();
          setupRequest.amount = '199.99';
        setupRequest.description = 'Widget';
        setupRequest.subject = 'Widget invoice';

        const transaction = new TransactionDisplayTransaction();
        transaction.subtotal = '195.00';
        transaction.tax = '4.99';
        transaction.total = '199.99';

        const items = new TransactionDisplayItem();
        items.description = 'Widget';
        items.price = '195.00';
        items.quantity = 1;

        transaction.items = [items];
        setupRequest.transaction = transaction;
        setupRequest.autoSend = true;

        const customer = new Customer();
        customer.customerRef = 'Customer reference string';
        customer.firstName = 'FirstName';
        customer.lastName = 'LastName';
        customer.companyName = 'Company Name';
        customer.emailAddress = 'notifications@blockchypteam.m8r.co';
        customer.smsNumber = '(123) 123-1231';
        setupRequest.customer = customer;
        let setupResponse: PaymentLinkResponse = new PaymentLinkResponse();
        const setupHttpResponse = await client.sendPaymentLink(setupRequest);
        if (setupHttpResponse.status !== 200) {
          console.log('Error:', setupHttpResponse.statusText);
          fail(setupHttpResponse.statusText);
          done();
        }
        setupResponse = setupHttpResponse.data

        // setup request object
        const request = new CancelPaymentLinkRequest();
        request.linkCode = setupResponse.linkCode;

        const httpResponse = await client.cancelPaymentLink(request)
        const response: CancelPaymentLinkResponse = httpResponse.data;
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
