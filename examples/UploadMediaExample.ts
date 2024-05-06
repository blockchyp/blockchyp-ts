import BlockChyp from '@blockchyp/blockchyp-ts';
import fs from 'fs';

const client = BlockChyp.newClient({
  apiKey: 'ZDSMMZLGRPBPRTJUBTAFBYZ33Q',
  bearerToken: 'ZLBW5NR4U5PKD5PNP3ZP3OZS5U',
  signingKey: '9c6a5e8e763df1c9256e3d72bd7f53dfbd07312938131c75b3bfd254da787947'
});

const content = fs.readFileSync('aviato.png');
client.uploadMedia({
  fileName: 'aviato.png',
  fileSize: 18843,
  uploadId: '<RANDOM ID>',
}, content)
.then(function (response: any) {
    console.log('Response: ' + JSON.stringify(response.data));
  })
  .catch(function (error: any) {
    console.log(error);
  });
