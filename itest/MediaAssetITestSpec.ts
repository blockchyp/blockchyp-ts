/**
 * Copyright 2019-2024 BlockChyp, Inc. All rights reserved. Use of this code is governed
 * by a license that can be found in the LICENSE file.
 *
 * This file was generated automatically by the BlockChyp SDK Generator. Changes to this
 * file will be lost every time the code is regenerated.
 */
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { Config } from './support/config';
import { BlockChypCredentials, BlockChypClient } from '../index';
import { MediaRequest } from '../index';
import { MediaMetadata } from '../index';
import { UploadMetadata } from '../index';

describe('MediaAsset', function () {
  let originalTimeout: number;
  let client: typeof BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('returns a single media asset.', function (done) {
    client = BlockChypClient.newClient(Config.getCreds(""));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    console.log('Running mediaAsset...');

    setTimeout(async function () {
      try {
        // setup request object
        const setupRequest = new UploadMetadata();
          setupRequest.fileName = 'aviato.png';
        setupRequest.fileSize = 18843;
        setupRequest.uploadId = uuidv4();
        let setupResponse: MediaMetadata = new MediaMetadata();
        const content = fs.readFileSync('support/aviato.png');
        const setupHttpResponse = await client.uploadMedia(setupRequest, content);
                if (setupHttpResponse.status !== 200) {
          console.log('Error:', setupHttpResponse.statusText);
          fail(setupHttpResponse.statusText);
          done();
        }
        setupResponse = setupHttpResponse.data

        // setup request object
        const request = new MediaRequest();
        request.mediaId = setupResponse.id;

        const httpResponse = await client.mediaAsset(request)
        const response: MediaMetadata = httpResponse.data;
        // response assertions
        expect(response.success).toBe(true);
        expect(response.id?.trim().length).toBeGreaterThan(0);
        expect(response.originalFile)?.toEqual('aviato.png');
        expect(response.fileUrl?.trim().length).toBeGreaterThan(0);
        expect(response.thumbnailUrl?.trim().length).toBeGreaterThan(0);

      } catch (error) {
        console.log('Error:', error);
        fail(error);
      } finally {
        done();
      }
    }, testDelayInt * 1000);
  });
});
