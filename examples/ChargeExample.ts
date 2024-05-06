import BlockChyp from '@blockchyp/blockchyp-ts';

const client = BlockChyp.newClient({
  apiKey: 'ZDSMMZLGRPBPRTJUBTAFBYZ33Q',
  bearerToken: 'ZLBW5NR4U5PKD5PNP3ZP3OZS5U',
  signingKey: '9c6a5e8e763df1c9256e3d72bd7f53dfbd07312938131c75b3bfd254da787947'
});

try {
  const request = new BlockChyp.AuthorizationRequest();
  request.test = true;
  request.terminalName = 'Test Terminal';
  request.amount = '55.00';

  const httpResponse = await client.charge(request)
  const response: BlockChyp.AuthorizationResponse = httpResponse.data;
  console.log('Response: ' + JSON.stringify(response));

} catch (error) {
  console.log(error);
}
