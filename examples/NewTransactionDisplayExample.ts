import BlockChyp from '@blockchyp/blockchyp-ts';

const client = BlockChyp.newClient({
  apiKey: 'ZDSMMZLGRPBPRTJUBTAFBYZ33Q',
  bearerToken: 'ZLBW5NR4U5PKD5PNP3ZP3OZS5U',
  signingKey: '9c6a5e8e763df1c9256e3d72bd7f53dfbd07312938131c75b3bfd254da787947'
});

try {
  const request = new BlockChyp.TransactionDisplayRequest();
  request.test = true;
  request.terminalName = 'Test Terminal';

  const transaction = new TransactionDisplayTransaction();
  transaction.subtotal = '60.00';
  transaction.tax = '5.00';
  transaction.total = '65.00';

  const items = new TransactionDisplayItem();
  items.description = 'Leki Trekking Poles';
  items.price = '35.00';
  items.quantity = 2;
  items.extended = '70.00';

  const discounts = new TransactionDisplayDiscount();
  discounts.description = 'memberDiscount';
  discounts.amount = '10.00';

  items.discounts = [discounts];

  transaction.items = [items];
  request.transaction = transaction;

  const httpResponse = await client.newTransactionDisplay(request)
  const response: BlockChyp.Acknowledgement = httpResponse.data;
  console.log('Response: ' + JSON.stringify(response));

} catch (error) {
  console.log(error);
}
