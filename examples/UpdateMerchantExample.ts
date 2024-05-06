import * as BlockChyp from '@blockchyp/blockchyp-ts';

const client = BlockChyp.newClient({
  apiKey: 'ZDSMMZLGRPBPRTJUBTAFBYZ33Q',
  bearerToken: 'ZLBW5NR4U5PKD5PNP3ZP3OZS5U',
  signingKey: '9c6a5e8e763df1c9256e3d72bd7f53dfbd07312938131c75b3bfd254da787947'
});

try {
  const request = new BlockChyp.MerchantProfile();
  request.merchantId = '<MERCHANT ID>';
  request.test = true;
  request.dbaName = 'Test Merchant';
  request.companyName = 'Test Merchant';

  const billingAddress = new BlockChyp.Address();
  billingAddress.address1 = '1060 West Addison';
  billingAddress.city = 'Chicago';
  billingAddress.stateOrProvince = 'IL';
  billingAddress.postalCode = '60613';
  request.billingAddress = billingAddress;

  const httpResponse = await client.updateMerchant(request)
  const response: BlockChyp.MerchantProfileResponse = httpResponse.data;
  console.log('Response: ' + JSON.stringify(response));

} catch (error) {
  console.log(error);
}
