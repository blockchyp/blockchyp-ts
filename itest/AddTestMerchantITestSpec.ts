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

describe('AddTestMerchant', function () {
  let originalTimeout: number;
  let client: typeof BlockChyp.BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('can add a test merchant', function (done) {
    client = BlockChyp.newClient(Config.getCreds("partner"));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    console.log('Running addTestMerchant...');

    setTimeout(async function () {
      try {
        // setup request object
        const request = new BlockChyp.AddTestMerchantRequest();
        request.dbaName = 'Test Merchant';
        request.companyName = 'Test Merchant';

        const httpResponse = await client.addTestMerchant(request)
        const response: BlockChyp.MerchantProfileResponse = httpResponse.data;
        // response assertions
        expect(response.success).toBe(true);
        expect(response.dbaName)?.toEqual('Test Merchant');
        expect(response.companyName)?.toEqual('Test Merchant');
        expect(response.visa).toBe(true);

      } catch (error) {
        console.log('Error:', error);
        fail(error);
      } finally {
        done();
      }
    }, testDelayInt * 1000);
  });
});
