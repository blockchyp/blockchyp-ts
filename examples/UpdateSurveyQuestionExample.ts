import BlockChyp from '@blockchyp/blockchyp-ts';

const client = BlockChyp.newClient({
  apiKey: 'ZDSMMZLGRPBPRTJUBTAFBYZ33Q',
  bearerToken: 'ZLBW5NR4U5PKD5PNP3ZP3OZS5U',
  signingKey: '9c6a5e8e763df1c9256e3d72bd7f53dfbd07312938131c75b3bfd254da787947'
});

try {
  const request = new BlockChyp.SurveyQuestion();
  request.id = '<QUESTION ID>';
  request.ordinal = 1;
  request.questionText = 'Would you shop here again?';
  request.questionType = 'yes_no';
  request.enabled = true;

  const httpResponse = await client.updateSurveyQuestion(request)
  const response: BlockChyp.SurveyQuestion = httpResponse.data;
  console.log('Response: ' + JSON.stringify(response));

} catch (error) {
  console.log(error);
}
