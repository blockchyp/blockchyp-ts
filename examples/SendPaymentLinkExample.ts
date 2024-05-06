import BlockChyp from '@blockchyp/blockchyp-ts';

const client = BlockChyp.newClient({
  apiKey: 'ZDSMMZLGRPBPRTJUBTAFBYZ33Q',
  bearerToken: 'ZLBW5NR4U5PKD5PNP3ZP3OZS5U',
  signingKey: '9c6a5e8e763df1c9256e3d72bd7f53dfbd07312938131c75b3bfd254da787947'
});

try {
  const request = new BlockChyp.PaymentLinkRequest();
  request.transactionRef = '<TX REF>';
  request.amount = '199.99';
  request.description = 'Widget';
  request.subject = 'Widget invoice';

  const transaction = new TransactionDisplayTransaction();
  transaction.subtotal = '195.00';
  transaction.tax = '4.99';
  transaction.total = '199.99';

  const items = new TransactionDisplayItem();
  items.description = 'Widget';
  items.price = '195.00';
  items.quantity = 1;

  transaction.items = [items];
  request.transaction = transaction;
  request.autoSend = true;

  const customer = new Customer();
  customer.customerRef = 'Customer reference string';
  customer.firstName = 'FirstName';
  customer.lastName = 'LastName';
  customer.companyName = 'Company Name';
  customer.emailAddress = 'notifications@blockchypteam.m8r.co';
  customer.smsNumber = '(123) 123-1231';
  request.customer = customer;

  const httpResponse = await client.sendPaymentLink(request)
  const response: BlockChyp.PaymentLinkResponse = httpResponse.data;
  console.log('Response: ' + JSON.stringify(response));

} catch (error) {
  console.log(error);
}
