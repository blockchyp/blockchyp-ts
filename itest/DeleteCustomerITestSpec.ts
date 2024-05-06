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
import { DeleteCustomerRequest } from '../index';
import { DeleteCustomerResponse } from '../index';
import { UpdateCustomerRequest } from '../index';
import { CustomerResponse } from '../index';
import { Customer } from '../index';

describe('DeleteCustomer', function () {
  let originalTimeout: number;
  let client: typeof BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('can delete a customer', function (done) {
    client = BlockChypClient.newClient(Config.getCreds(""));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    console.log('Running deleteCustomer...');

    setTimeout(async function () {
      try {
        // setup request object
        const setupRequest = new UpdateCustomerRequest();

        const customer = new Customer();
        customer.firstName = 'Test';
        customer.lastName = 'Customer';
        customer.companyName = 'Test Company';
        customer.emailAddress = 'support@blockchyp.com';
        customer.smsNumber = '(123) 123-1234';
        setupRequest.customer = customer;
        let setupResponse: CustomerResponse = new CustomerResponse();
        const setupHttpResponse = await client.updateCustomer(setupRequest);
        if (setupHttpResponse.status !== 200) {
          console.log('Error:', setupHttpResponse.statusText);
          fail(setupHttpResponse.statusText);
          done();
        }
        setupResponse = setupHttpResponse.data

        // setup request object
        const request = new DeleteCustomerRequest();
        request.customerId = setupResponse.customer?.id ?? null;

        const httpResponse = await client.deleteCustomer(request)
        const response: DeleteCustomerResponse = httpResponse.data;
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
