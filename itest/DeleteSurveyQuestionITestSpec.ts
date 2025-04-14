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

describe('DeleteSurveyQuestion', function () {
  let originalTimeout: number;
  let client: typeof BlockChyp.BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('delete a survey question.', function (done) {
    client = BlockChyp.newClient(Config.getCreds(""));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    console.log('Running deleteSurveyQuestion...');

    setTimeout(async function () {
      try {
        // setup request object
        const setupRequest = new BlockChyp.SurveyQuestion();
          setupRequest.ordinal = 1;
        setupRequest.questionText = 'Would you shop here again?';
        setupRequest.questionType = 'yes_no';
        let setupResponse: BlockChyp.SurveyQuestion = new BlockChyp.SurveyQuestion();
        const setupHttpResponse = await client.updateSurveyQuestion(setupRequest);
        if (setupHttpResponse.status !== 200) {
          console.log('Error:', setupHttpResponse.statusText);
          fail(setupHttpResponse.statusText);
          done();
        }
        setupResponse = setupHttpResponse.data

        // setup request object
        const request = new BlockChyp.SurveyQuestionRequest();
        request.questionId = setupResponse.id;

        const httpResponse = await client.deleteSurveyQuestion(request)
        const response: BlockChyp.Acknowledgement = httpResponse.data;
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
