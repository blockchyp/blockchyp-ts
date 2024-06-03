import * as BlockChyp from '@blockchyp/blockchyp-ts';

const client = BlockChyp.newClient({
  apiKey: 'ZDSMMZLGRPBPRTJUBTAFBYZ33Q',
  bearerToken: 'ZLBW5NR4U5PKD5PNP3ZP3OZS5U',
  signingKey: '9c6a5e8e763df1c9256e3d72bd7f53dfbd07312938131c75b3bfd254da787947'
});

const request = new BlockChyp.TransactionDisplayRequest();
request.test = true;
request.terminalName = 'Test Terminal';

const transaction = new BlockChyp.TransactionDisplayTransaction();
transaction.subtotal = '60.00';
transaction.tax = '5.00';
transaction.total = '65.00';

const items = new BlockChyp.TransactionDisplayItem();
items.description = 'Leki Trekking Poles';
items.price = '35.00';
items.quantity = 2;
items.extended = '70.00';

const discounts = new BlockChyp.TransactionDisplayDiscount();
discounts.description = 'memberDiscount';
discounts.amount = '10.00';

items.discounts = [discounts];

transaction.items = [items];
request.transaction = transaction;

client.updateTransactionDisplay(request)
.then(function(httpResponse) {
    const response: BlockChyp.Acknowledgement = httpResponse.data;
    console.log('Response: ' + JSON.stringify(response));
  })
  .catch(function (error: any) {
    console.log(error);
  });
