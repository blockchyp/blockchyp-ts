import * as BlockChyp from '@blockchyp/blockchyp-ts';
import fs from 'fs';
const client = BlockChyp.newClient({
  apiKey: 'ZDSMMZLGRPBPRTJUBTAFBYZ33Q',
  bearerToken: 'ZLBW5NR4U5PKD5PNP3ZP3OZS5U',
  signingKey: '9c6a5e8e763df1c9256e3d72bd7f53dfbd07312938131c75b3bfd254da787947'
});

try {
  const request = new BlockChyp.UploadMetadata();
  request.fileName = 'aviato.png';
  request.fileSize = 18843;
  request.uploadId = '<RANDOM ID>';

  const content = fs.readFileSync('aviato.png');

  const httpResponse = await client.uploadMedia(request, content)
  const response: BlockChyp.MediaMetadata = httpResponse.data;
  console.log('Response: ' + JSON.stringify(response));

} catch (error) {
  console.log(error);
}
