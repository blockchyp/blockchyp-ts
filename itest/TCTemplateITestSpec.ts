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
import { TermsAndConditionsTemplateRequest } from '../index';
import { TermsAndConditionsTemplate } from '../index';

describe('TCTemplate', function () {
  let originalTimeout: number;
  let client: typeof BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('returns a single terms and conditions template.', function (done) {
    client = BlockChypClient.newClient(Config.getCreds(""));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    console.log('Running tcTemplate...');

    setTimeout(async function () {
      try {
        // setup request object
        const setupRequest = new TermsAndConditionsTemplate();
          setupRequest.alias = uuidv4();
        setupRequest.name = 'HIPPA Disclosure';
        setupRequest.content = 'Lorem ipsum dolor sit amet.';
        let setupResponse: TermsAndConditionsTemplate = new TermsAndConditionsTemplate();
        const setupHttpResponse = await client.tcUpdateTemplate(setupRequest);
        if (setupHttpResponse.status !== 200) {
          console.log('Error:', setupHttpResponse.statusText);
          fail(setupHttpResponse.statusText);
          done();
        }
        setupResponse = setupHttpResponse.data

        // setup request object
        const request = new TermsAndConditionsTemplateRequest();
        request.templateId = setupResponse.id;

        const httpResponse = await client.tcTemplate(request)
        const response: TermsAndConditionsTemplate = httpResponse.data;
        // response assertions
        expect(response.success).toBe(true);
        expect(response.name)?.toEqual('HIPPA Disclosure');
        expect(response.content)?.toEqual('Lorem ipsum dolor sit amet.');

      } catch (error) {
        console.log('Error:', error);
        fail(error);
      } finally {
        done();
      }
    }, testDelayInt * 1000);
  });
});
