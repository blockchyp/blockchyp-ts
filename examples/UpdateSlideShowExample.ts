import BlockChyp from '@blockchyp/blockchyp-ts';

const client = BlockChyp.newClient({
  apiKey: 'ZDSMMZLGRPBPRTJUBTAFBYZ33Q',
  bearerToken: 'ZLBW5NR4U5PKD5PNP3ZP3OZS5U',
  signingKey: '9c6a5e8e763df1c9256e3d72bd7f53dfbd07312938131c75b3bfd254da787947'
});

try {
  const request = new BlockChyp.SlideShow();
  request.name = 'Test Slide Show';
  request.delay = 5;

  const slides = new Slide();
  slides.mediaId = '<MEDIA ID>';

  request.slides = [slides];

  const httpResponse = await client.updateSlideShow(request)
  const response: BlockChyp.SlideShow = httpResponse.data;
  console.log('Response: ' + JSON.stringify(response));

} catch (error) {
  console.log(error);
}
