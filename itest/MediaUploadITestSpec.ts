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
import * as BlockChyp from '../index';

describe('MediaUpload', function () {
  let originalTimeout: number;
  let client: typeof BlockChyp.BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('mediaUpload.', function (done) {
    client = BlockChyp.newClient(Config.getCreds(""));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    console.log('Running mediaUpload...');

    setTimeout(async function () {
      try {
        // setup request object
        const request = new BlockChyp.UploadMetadata();
        request.fileName = 'aviato.png';
        request.fileSize = 18843;
        request.uploadId = uuidv4();

        const content = fs.readFileSync('support/aviato.png');
        const httpResponse = await client.uploadMedia(request, content)
        const response: BlockChyp.MediaMetadata = httpResponse.data;
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
