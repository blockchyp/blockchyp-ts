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
import { TermsAndConditionsLogRequest } from '../index';
import { TermsAndConditionsLogEntry } from '../index';
import { TermsAndConditionsLogResponse } from '../index';

describe('TCEntry', function () {
  let originalTimeout: number;
  let client: typeof BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('returns a detailed terms and conditions entry.', function (done) {
    client = BlockChypClient.newClient(Config.getCreds(""));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    console.log('Running tcEntry...');

    setTimeout(async function () {
      try {
        // setup request object
        const setupRequest = new TermsAndConditionsLogRequest();

        let setupResponse: TermsAndConditionsLogResponse = new TermsAndConditionsLogResponse();
        const setupHttpResponse = await client.tcLog(setupRequest);
        if (setupHttpResponse.status !== 200) {
          console.log('Error:', setupHttpResponse.statusText);
          fail(setupHttpResponse.statusText);
          done();
        }
        setupResponse = setupHttpResponse.data

        // setup request object
        const request = new TermsAndConditionsLogRequest();
        request.logEntryId = setupResponse?.results && setupResponse.results[0]?.id;

        const httpResponse = await client.tcEntry(request)
        const response: TermsAndConditionsLogEntry = httpResponse.data;
        // response assertions
        expect(response.success).toBe(true);
        expect(response.id?.trim().length).toBeGreaterThan(0);
        expect(response.terminalId?.trim().length).toBeGreaterThan(0);
        expect(response.terminalName?.trim().length).toBeGreaterThan(0);
        expect(response.timestamp?.trim().length).toBeGreaterThan(0);
        expect(response.name?.trim().length).toBeGreaterThan(0);
        expect(response.content?.trim().length).toBeGreaterThan(0);
        expect(response.hasSignature).toBe(true);
        expect(response.signature?.trim().length).toBeGreaterThan(0);

      } catch (error) {
        console.log('Error:', error);
        fail(error);
      } finally {
        done();
      }
    }, testDelayInt * 1000);
  });
});
