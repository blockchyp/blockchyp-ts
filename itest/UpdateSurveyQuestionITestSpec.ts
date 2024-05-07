/**
 * Copyright 2019-2024 BlockChyp, Inc. All rights reserved. Use of this code is governed
 * by a license that can be found in the LICENSE file.
 *
 * This file was generated automatically by the BlockChyp SDK Generator. Changes to this
 * file will be lost every time the code is regenerated.
 */

import { v4 as uuidv4 } from 'uuid';
import { Config } from './support/config';
import * as BlockChyp from '../index';

describe('UpdateSurveyQuestion', function () {
  let originalTimeout: number;
  let client: typeof BlockChyp.BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('update or create a survey question.', function (done) {
    client = BlockChyp.newClient(Config.getCreds(""));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    console.log('Running updateSurveyQuestion...');

    setTimeout(async function () {
      try {
        // setup request object
        const request = new BlockChyp.SurveyQuestion();
        request.ordinal = 1;
        request.questionText = 'Would you shop here again?';
        request.questionType = 'yes_no';

        const httpResponse = await client.updateSurveyQuestion(request)
        const response: BlockChyp.SurveyQuestion = httpResponse.data;
        // response assertions
        expect(response.success).toBe(true);
        expect(response.questionText)?.toEqual('Would you shop here again?');
        expect(response.questionType)?.toEqual('yes_no');

      } catch (error) {
        console.log('Error:', error);
        fail(error);
      } finally {
        done();
      }
    }, testDelayInt * 1000);
  });
});
