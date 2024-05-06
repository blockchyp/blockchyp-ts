import BlockChyp from '@blockchyp/blockchyp-ts';

const client = BlockChyp.newClient({
  apiKey: 'ZDSMMZLGRPBPRTJUBTAFBYZ33Q',
  bearerToken: 'ZLBW5NR4U5PKD5PNP3ZP3OZS5U',
  signingKey: '9c6a5e8e763df1c9256e3d72bd7f53dfbd07312938131c75b3bfd254da787947'
});

try {
  const request = new BlockChyp.TermsAndConditionsRequest();
  request.test = true;
  request.terminalName = 'Test Terminal';
  request.tcAlias = 'hippa';
  request.tcName = 'HIPPA Disclosure';
  request.tcContent = 'Full contract text';
  request.sigFormat = SignatureFormat.PNG;
  request.sigWidth = 200;
  request.sigRequired = true;

  const httpResponse = await client.termsAndConditions(request)
  const response: BlockChyp.TermsAndConditionsResponse = httpResponse.data;
  console.log('Response: ' + JSON.stringify(response));

} catch (error) {
  console.log(error);
}
