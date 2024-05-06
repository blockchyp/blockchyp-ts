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
import { InviteMerchantUserRequest } from '../index';
import { Acknowledgement } from '../index';

describe('InviteMerchantUser', function () {
  let originalTimeout: number;
  let client: typeof BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('invites a user to join a merchant account.', function (done) {
    client = BlockChypClient.newClient(Config.getCreds(""));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    console.log('Running inviteMerchantUser...');

    setTimeout(async function () {
      try {
        // setup request object
        const request = new InviteMerchantUserRequest();
        request.email = 'doublea@blockchypteam.m8r.co';
        request.firstName = 'Aaron';
        request.lastName = 'Anderson';

        const httpResponse = await client.inviteMerchantUser(request)
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
