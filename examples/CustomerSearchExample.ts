import BlockChyp from '@blockchyp/blockchyp-ts';

const client = BlockChyp.newClient({
  apiKey: 'ZDSMMZLGRPBPRTJUBTAFBYZ33Q',
  bearerToken: 'ZLBW5NR4U5PKD5PNP3ZP3OZS5U',
  signingKey: '9c6a5e8e763df1c9256e3d72bd7f53dfbd07312938131c75b3bfd254da787947'
});

try {
  const request = new BlockChyp.CustomerSearchRequest();
  request.query = '(123) 123-1234';

  const httpResponse = await client.customerSearch(request)
  const response: BlockChyp.CustomerSearchResponse = httpResponse.data;
  console.log('Response: ' + JSON.stringify(response));

} catch (error) {
  console.log(error);
}
