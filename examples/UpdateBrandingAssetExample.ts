import BlockChyp from '@blockchyp/blockchyp-ts';

const client = BlockChyp.newClient({
  apiKey: 'ZDSMMZLGRPBPRTJUBTAFBYZ33Q',
  bearerToken: 'ZLBW5NR4U5PKD5PNP3ZP3OZS5U',
  signingKey: '9c6a5e8e763df1c9256e3d72bd7f53dfbd07312938131c75b3bfd254da787947'
});

try {
  const request = new BlockChyp.BrandingAsset();
  request.mediaId = '<MEDIA ID>';
  request.padded = true;
  request.ordinal = 10;
  request.startDate = '01/06/2021';
  request.startTime = '14:00';
  request.endDate = '11/05/2024';
  request.endTime = '16:00';
  request.notes = 'Test Branding Asset';
  request.preview = false;
  request.enabled = true;

  const httpResponse = await client.updateBrandingAsset(request)
  const response: BlockChyp.BrandingAsset = httpResponse.data;
  console.log('Response: ' + JSON.stringify(response));

} catch (error) {
  console.log(error);
}
