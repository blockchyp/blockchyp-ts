import * as BlockChyp from '@blockchyp/blockchyp-ts';

const client = BlockChyp.newClient({
  apiKey: 'ZDSMMZLGRPBPRTJUBTAFBYZ33Q',
  bearerToken: 'ZLBW5NR4U5PKD5PNP3ZP3OZS5U',
  signingKey: '9c6a5e8e763df1c9256e3d72bd7f53dfbd07312938131c75b3bfd254da787947'
});

const request = new BlockChyp.CashDiscountRequest();
request.amount = '100.00';
request.cashDiscount = true;
request.surcharge = true;

client.cashDiscount(request)
.then(function(httpResponse) {
    const response: BlockChyp.CashDiscountResponse = httpResponse.data;
    console.log('Response: ' + JSON.stringify(response));
  })
  .catch(function (error: any) {
    console.log(error);
  });
