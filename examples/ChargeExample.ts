import BlockChyp from '@blockchyp/blockchyp-ts';


const client = BlockChyp.newClient({
  apiKey: 'ZDSMMZLGRPBPRTJUBTAFBYZ33Q',
  bearerToken: 'ZLBW5NR4U5PKD5PNP3ZP3OZS5U',
  signingKey: '9c6a5e8e763df1c9256e3d72bd7f53dfbd07312938131c75b3bfd254da787947'
});

client.charge({
  test: true,
  terminalName: 'Test Terminal',
  amount: '55.00',
})
.then(function (response: any) {
    console.log('Response: ' + JSON.stringify(response.data));
  })
  .catch(function (error: any) {
    console.log(error);
  });
