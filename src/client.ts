/**
 * Copyright 2019-2024 BlockChyp, Inc. All rights reserved. Use of this code is governed
 * by a license that can be found in the LICENSE file.
 *
 * This file was generated automatically by the BlockChyp SDK Generator. Changes to this
 * file will be lost every time the code is regenerated.
 */
import axios, {AxiosRequestConfig, AxiosResponse}  from 'axios'
import CryptoUtils from './cryptoutils'
import * as Models from './models'
import * as nodeHttps from 'https'
import * as findPackageJson from 'find-package-json';

/* eslint-disable no-unused-vars */
export const CardType = Object.freeze({
  CREDIT: 0,
  DEBIT: 1,
  EBT: 2,
  BLOCKCHAIN_GIFT: 3,
  HEALTHCARE: 4,
})

export const SignatureFormat = Object.freeze({
  NONE: '',
  PNG: 'png',
  JPG: 'jpg',
  GIF: 'gif',
})

export const RoundingMode = Object.freeze({
  UP: 'up',
  NEAREST: 'nearest',
  DOWN: 'down',
})

export const PromptType = Object.freeze({
  AMOUNT: 'amount',
  EMAIL: 'email',
  PHONE_NUMBER: 'phone',
  CUSTOMER_NUMBER: 'customer-number',
  REWARDS_NUMBER: 'rewards-number',
  FIRST_NAME: 'first-name',
  LAST_NAME: 'last-name',
})

export const AVSResponse = Object.freeze({
  NOT_APPLICABLE: '',
  NOT_SUPPORTED: 'not_supported',
  RETRY: 'retry',
  NO_MATCH: 'no_match',
  ADDRESS_MATCH: 'address_match',
  POSTAL_CODE_MATCH: 'zip_match',
  ADDRESS_AND_POSTAL_CODE_MATCH: 'match',
})

export const CVMType = Object.freeze({
  SIGNATURE: 'Signature',
  OFFLINE_PIN: 'Offline PIN',
  ONLINE_PIN: 'Online PIN',
  CDCVM: 'CDCVM',
  NO_CVM: 'No CVM',
})

export const HealthcareType = Object.freeze({
  HEALTHCARE: 'healthcare',
  PRESCRIPTION: 'prescription',
  VISION: 'vision',
  CLINIC: 'clinic',
  DENTAL: 'dental',
})
/* eslint-enable no-unused-vars */
// const packageJsonPath = findPackageJson(__dirname).next().filename;
// const VERSION: string = require(packageJsonPath).version;
const VERSION: string = "v1.0.0";
console.log(VERSION)
const USER_AGENT: string = `BlockChyp-TypeScript/${VERSION}`;
// Some browsers do not allow setting the user-agent header, so we set
// an alternative if running from a browser.
const AGENT_HEADER: string = (typeof window === 'undefined') ? 'User-Agent' : 'X-Requested-With';

interface TerminalRoute {
  terminalName: string;
  ipAddress: string;
  transientCredentials: {
    apiKey: string;
    bearerToken: string;
    signingKey: string;
  };
  cloudRelayEnabled: boolean;
}

interface RouteCacheEntry {
  ttl: number;
  route: TerminalRoute;
}

export class BlockChypClient {
  private gatewayHost: string;
  private testGatewayHost: string;
  private dashboardHost: string;
  private credentials: BlockChypCredentials | undefined;
  private https: boolean;
  private cloudRelay: boolean;
  private routeCacheTTL: number;
  private gatewayTimeout: number;
  private terminalTimeout: number;
  private _routeCache: { [key: string]: RouteCacheEntry };

  constructor(
    gatewayHostOrCreds?: string | BlockChypCredentials,
    testGatewayHostOrCreds?: string | BlockChypCredentials,
    dashboardHostOrCreds?: string | BlockChypCredentials,
    creds?: BlockChypCredentials
  ) {
    this.gatewayHost = 'https://api.blockchyp.com';
    this.testGatewayHost = 'https://test.blockchyp.com';
    this.dashboardHost = 'https://dashboard.blockchyp.com';

    if (typeof gatewayHostOrCreds === 'string') {
      this.gatewayHost = gatewayHostOrCreds;
    } else if (typeof gatewayHostOrCreds === 'object') {
      creds = gatewayHostOrCreds;
    }

    if (typeof testGatewayHostOrCreds === 'string') {
      this.testGatewayHost = testGatewayHostOrCreds;
    } else if (typeof testGatewayHostOrCreds === 'object') {
      creds = testGatewayHostOrCreds;
    }

    if (typeof dashboardHostOrCreds === 'string') {
      this.dashboardHost = dashboardHostOrCreds;
    } else if (typeof dashboardHostOrCreds === 'object') {
      creds = dashboardHostOrCreds;
    }

    this.credentials = creds;
    this.https = true;
    this.cloudRelay = false;
    this.routeCacheTTL = 60;
    this.gatewayTimeout = 20;
    this.terminalTimeout = 120;
    this._routeCache = {};
  }

  newClient(creds: BlockChypCredentials): BlockChypClient {
    return new BlockChypClient(creds);
  }

  getGatewayHost(): string {
    return this.gatewayHost;
  }

  getDashboardHost(): string {
    return this.dashboardHost;
  }

  setGatewayHost(host: string): void {
    this.gatewayHost = host;
  }

  setDashboardHost(host: string): void {
    this.dashboardHost = host;
  }

  setTestGatewayHost(host: string): void {
    this.testGatewayHost = host;
  }

  heartbeat() {
    return this._gatewayRequest('get', '/api/heartbeat');
  }

  /**
   * Tests connectivity with a payment terminal.
   */
  async ping(request: Models.PingRequest): Promise<AxiosResponse<Models.PingResponse>> {
    return this.routeTerminalRequest('post', request, '/api/test', '/api/terminal-test');
  }

  /**
   * Executes a standard direct preauth and capture.
   */
  async charge(request: Models.AuthorizationRequest): Promise<AxiosResponse<Models.AuthorizationResponse>> {
    return this.routeTerminalRequest('post', request, '/api/charge', '/api/charge');
  }

  /**
   * Executes a preauthorization intended to be captured later.
   */
  async preauth(request: Models.AuthorizationRequest): Promise<AxiosResponse<Models.AuthorizationResponse>> {
    return this.routeTerminalRequest('post', request, '/api/preauth', '/api/preauth');
  }

  /**
   * Executes a refund.
   */
  async refund(request: Models.RefundRequest): Promise<AxiosResponse<Models.AuthorizationResponse>> {
    return this.routeTerminalRequest('post', request, '/api/refund', '/api/refund');
  }

  /**
   * Adds a new payment method to the token vault.
   */
  async enroll(request: Models.EnrollRequest): Promise<AxiosResponse<Models.EnrollResponse>> {
    return this.routeTerminalRequest('post', request, '/api/enroll', '/api/enroll');
  }

  /**
   * Activates or recharges a gift card.
   */
  async giftActivate(request: Models.GiftActivateRequest): Promise<AxiosResponse<Models.GiftActivateResponse>> {
    return this.routeTerminalRequest('post', request, '/api/gift-activate', '/api/gift-activate');
  }

  /**
   * Checks the remaining balance on a payment method.
   */
  async balance(request: Models.BalanceRequest): Promise<AxiosResponse<Models.BalanceResponse>> {
    return this.routeTerminalRequest('post', request, '/api/balance', '/api/balance');
  }

  /**
   * Clears the line item display and any in progress transaction.
   */
  async clear(request: Models.ClearTerminalRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this.routeTerminalRequest('post', request, '/api/clear', '/api/terminal-clear');
  }

  /**
   * Returns the current status of a terminal.
   */
  async terminalStatus(request: Models.TerminalStatusRequest): Promise<AxiosResponse<Models.TerminalStatusResponse>> {
    return this.routeTerminalRequest('post', request, '/api/terminal-status', '/api/terminal-status');
  }

  /**
   * Prompts the user to accept terms and conditions.
   */
  async termsAndConditions(request: Models.TermsAndConditionsRequest): Promise<AxiosResponse<Models.TermsAndConditionsResponse>> {
    return this.routeTerminalRequest('post', request, '/api/tc', '/api/terminal-tc');
  }

  /**
   * Captures and returns a signature.
   */
  async captureSignature(request: Models.CaptureSignatureRequest): Promise<AxiosResponse<Models.CaptureSignatureResponse>> {
    return this.routeTerminalRequest('post', request, '/api/capture-signature', '/api/capture-signature');
  }

  /**
   * Displays a new transaction on the terminal.
   */
  async newTransactionDisplay(request: Models.TransactionDisplayRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this.routeTerminalRequest('post', request, '/api/txdisplay', '/api/terminal-txdisplay');
  }

  /**
   * Appends items to an existing transaction display. Subtotal, Tax, and Total are
   * overwritten by the request. Items with the same description are combined into
   * groups.
   */
  async updateTransactionDisplay(request: Models.TransactionDisplayRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this.routeTerminalRequest('put', request, '/api/txdisplay', '/api/terminal-txdisplay');
  }

  /**
   * Displays a short message on the terminal.
   */
  async message(request: Models.MessageRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this.routeTerminalRequest('post', request, '/api/message', '/api/message');
  }

  /**
   * Asks the consumer a yes/no question.
   */
  async booleanPrompt(request: Models.BooleanPromptRequest): Promise<AxiosResponse<Models.BooleanPromptResponse>> {
    return this.routeTerminalRequest('post', request, '/api/boolean-prompt', '/api/boolean-prompt');
  }

  /**
   * Asks the consumer a text based question.
   */
  async textPrompt(request: Models.TextPromptRequest): Promise<AxiosResponse<Models.TextPromptResponse>> {
    return this.routeTerminalRequest('post', request, '/api/text-prompt', '/api/text-prompt');
  }

  /**
   * Returns a list of queued transactions on a terminal.
   */
  async listQueuedTransactions(request: Models.ListQueuedTransactionsRequest): Promise<AxiosResponse<Models.ListQueuedTransactionsResponse>> {
    return this.routeTerminalRequest('post', request, '/api/queue/list', '/api/queue/list');
  }

  /**
   * Deletes a queued transaction from the terminal.
   */
  async deleteQueuedTransaction(request: Models.DeleteQueuedTransactionRequest): Promise<AxiosResponse<Models.DeleteQueuedTransactionResponse>> {
    return this.routeTerminalRequest('post', request, '/api/queue/delete', '/api/queue/delete');
  }

  /**
   * Reboot a payment terminal.
   */
  async reboot(request: Models.PingRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this.routeTerminalRequest('post', request, '/api/reboot', '/api/terminal-reboot');
  }

  /**
   * Returns routing and location data for a payment terminal.
   */
  locate(request: Models.LocateRequest): Promise<AxiosResponse<Models.LocateResponse>> {
    return this._gatewayRequest('post', '/api/terminal-locate', request);
  }

  /**
   * Captures a preauthorization.
   */
  capture(request: Models.CaptureRequest): Promise<AxiosResponse<Models.CaptureResponse>> {
    return this._gatewayRequest('post', '/api/capture', request);
  }

  /**
   * Discards a previous transaction.
   */
  void(request: Models.VoidRequest): Promise<AxiosResponse<Models.VoidResponse>> {
    return this._gatewayRequest('post', '/api/void', request);
  }

  /**
   * Executes a manual time out reversal.
   *
   * We love time out reversals. Don't be afraid to use them whenever a request to a
   * BlockChyp terminal times out. You have up to two minutes to reverse any transaction.
   * The only caveat is that you must assign transactionRef values when you build the
   * original request. Otherwise, we have no real way of knowing which transaction you're
   * trying to reverse because we may not have assigned it an id yet. And if we did assign it an
   * id, you wouldn't know what it is because your request to the terminal timed out before
   * you got a response.
   */
  reverse(request: Models.AuthorizationRequest): Promise<AxiosResponse<Models.AuthorizationResponse>> {
    return this._gatewayRequest('post', '/api/reverse', request);
  }

  /**
   * Closes the current credit card batch.
   */
  closeBatch(request: Models.CloseBatchRequest): Promise<AxiosResponse<Models.CloseBatchResponse>> {
    return this._gatewayRequest('post', '/api/close-batch', request);
  }

  /**
   * Creates and send a payment link to a customer.
   */
  sendPaymentLink(request: Models.PaymentLinkRequest): Promise<AxiosResponse<Models.PaymentLinkResponse>> {
    return this._gatewayRequest('post', '/api/send-payment-link', request);
  }

  /**
   * Resends payment link.
   */
  resendPaymentLink(request: Models.ResendPaymentLinkRequest): Promise<AxiosResponse<Models.ResendPaymentLinkResponse>> {
    return this._gatewayRequest('post', '/api/resend-payment-link', request);
  }

  /**
   * Cancels a payment link.
   */
  cancelPaymentLink(request: Models.CancelPaymentLinkRequest): Promise<AxiosResponse<Models.CancelPaymentLinkResponse>> {
    return this._gatewayRequest('post', '/api/cancel-payment-link', request);
  }

  /**
   * Retrieves the status of a payment link.
   */
  paymentLinkStatus(request: Models.PaymentLinkStatusRequest): Promise<AxiosResponse<Models.PaymentLinkStatusResponse>> {
    return this._gatewayRequest('post', '/api/payment-link-status', request);
  }

  /**
   * Retrieves the current status of a transaction.
   */
  transactionStatus(request: Models.TransactionStatusRequest): Promise<AxiosResponse<Models.AuthorizationResponse>> {
    return this._gatewayRequest('post', '/api/tx-status', request);
  }

  /**
   * Updates or creates a customer record.
   */
  updateCustomer(request: Models.UpdateCustomerRequest): Promise<AxiosResponse<Models.CustomerResponse>> {
    return this._gatewayRequest('post', '/api/update-customer', request);
  }

  /**
   * Retrieves a customer by id.
   */
  customer(request: Models.CustomerRequest): Promise<AxiosResponse<Models.CustomerResponse>> {
    return this._gatewayRequest('post', '/api/customer', request);
  }

  /**
   * Searches the customer database.
   */
  customerSearch(request: Models.CustomerSearchRequest): Promise<AxiosResponse<Models.CustomerSearchResponse>> {
    return this._gatewayRequest('post', '/api/customer-search', request);
  }

  /**
   * Calculates the discount for actual cash transactions.
   */
  cashDiscount(request: Models.CashDiscountRequest): Promise<AxiosResponse<Models.CashDiscountResponse>> {
    return this._gatewayRequest('post', '/api/cash-discount', request);
  }

  /**
   * Returns the batch history for a merchant.
   */
  batchHistory(request: Models.BatchHistoryRequest): Promise<AxiosResponse<Models.BatchHistoryResponse>> {
    return this._gatewayRequest('post', '/api/batch-history', request);
  }

  /**
   * Returns the batch details for a single batch.
   */
  batchDetails(request: Models.BatchDetailsRequest): Promise<AxiosResponse<Models.BatchDetailsResponse>> {
    return this._gatewayRequest('post', '/api/batch-details', request);
  }

  /**
   * Returns the transaction history for a merchant.
   */
  transactionHistory(request: Models.TransactionHistoryRequest): Promise<AxiosResponse<Models.TransactionHistoryResponse>> {
    return this._gatewayRequest('post', '/api/tx-history', request);
  }

  /**
   * Returns pricing policy for a merchant.
   */
  pricingPolicy(request: Models.PricingPolicyRequest): Promise<AxiosResponse<Models.PricingPolicyResponse>> {
    return this._gatewayRequest('post', '/api/read-pricing-policy', request);
  }

  /**
   * Returns a list of partner statements.
   */
  partnerStatements(request: Models.PartnerStatementListRequest): Promise<AxiosResponse<Models.PartnerStatementListResponse>> {
    return this._gatewayRequest('post', '/api/partner-statement-list', request);
  }

  /**
   * Returns detail for a single partner statement.
   */
  partnerStatementDetail(request: Models.PartnerStatementDetailRequest): Promise<AxiosResponse<Models.PartnerStatementDetailResponse>> {
    return this._gatewayRequest('post', '/api/partner-statement-detail', request);
  }

  /**
   * Returns a list of merchant invoices.
   */
  merchantInvoices(request: Models.MerchantInvoiceListRequest): Promise<AxiosResponse<Models.MerchantInvoiceListResponse>> {
    return this._gatewayRequest('post', '/api/merchant-invoice-list', request);
  }

  /**
   * Returns detail for a single merchant-invoice statement.
   */
  merchantInvoiceDetail(request: Models.MerchantInvoiceDetailRequest): Promise<AxiosResponse<Models.MerchantInvoiceDetailResponse>> {
    return this._gatewayRequest('post', '/api/merchant-invoice-detail', request);
  }

  /**
   * Returns low level details for how partner commissions were calculated for a specific
   * merchant statement.
   */
  partnerCommissionBreakdown(request: Models.PartnerCommissionBreakdownRequest): Promise<AxiosResponse<Models.PartnerCommissionBreakdownResponse>> {
    return this._gatewayRequest('post', '/api/partner-commission-breakdown', request);
  }

  /**
   * Generates and returns api credentials for a given merchant.
   */
  merchantCredentialGeneration(request: Models.MerchantCredentialGenerationRequest): Promise<AxiosResponse<Models.MerchantCredentialGenerationResponse>> {
    return this._gatewayRequest('post', '/api/creds/generateMerchant', request);
  }

  /**
   * Returns profile information for a merchant.
   */
  merchantProfile(request: Models.MerchantProfileRequest): Promise<AxiosResponse<Models.MerchantProfileResponse>> {
    return this._gatewayRequest('post', '/api/public-merchant-profile', request);
  }

  /**
   * Deletes a customer record.
   */
  deleteCustomer(request: Models.DeleteCustomerRequest): Promise<AxiosResponse<Models.DeleteCustomerResponse>> {
    return this._gatewayRequest('delete', '/api/customer/' + request.customerId, request);
  }

  /**
   * Retrieves payment token metadata.
   */
  tokenMetadata(request: Models.TokenMetadataRequest): Promise<AxiosResponse<Models.TokenMetadataResponse>> {
    return this._gatewayRequest('get', '/api/token/' + request.token, request);
  }

  /**
   * Links a token to a customer record.
   */
  linkToken(request: Models.LinkTokenRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this._gatewayRequest('post', '/api/link-token', request);
  }

  /**
   * Removes a link between a customer and a token.
   */
  unlinkToken(request: Models.UnlinkTokenRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this._gatewayRequest('post', '/api/unlink-token', request);
  }

  /**
   * Deletes a payment token.
   */
  deleteToken(request: Models.DeleteTokenRequest): Promise<AxiosResponse<Models.DeleteTokenResponse>> {
    return this._gatewayRequest('delete', '/api/token/' + request.token, request);
  }

  /**
   * Adds a test merchant account.
   */
  getMerchants(request: Models.GetMerchantsRequest): Promise<AxiosResponse<Models.GetMerchantsResponse>> {
    return this._dashboardRequest('post', '/api/get-merchants', request);
  }

  /**
   * Adds or updates a merchant account. Can be used to create or update test merchants.
   * Only gateway partners may create new live merchants.
   */
  updateMerchant(request: Models.MerchantProfile): Promise<AxiosResponse<Models.MerchantProfileResponse>> {
    return this._dashboardRequest('post', '/api/update-merchant', request);
  }

  /**
   * List all active users and pending invites for a merchant account.
   */
  merchantUsers(request: Models.MerchantProfileRequest): Promise<AxiosResponse<Models.MerchantUsersResponse>> {
    return this._dashboardRequest('post', '/api/merchant-users', request);
  }

  /**
   * Invites a user to join a merchant account.
   */
  inviteMerchantUser(request: Models.InviteMerchantUserRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this._dashboardRequest('post', '/api/invite-merchant-user', request);
  }

  /**
   * Adds a test merchant account.
   */
  addTestMerchant(request: Models.AddTestMerchantRequest): Promise<AxiosResponse<Models.MerchantProfileResponse>> {
    return this._dashboardRequest('post', '/api/add-test-merchant', request);
  }

  /**
   * Deletes a test merchant account. Supports partner scoped API credentials only. Live
   * merchant accounts cannot be deleted.
   */
  deleteTestMerchant(request: Models.MerchantProfileRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this._dashboardRequest('delete', '/api/test-merchant/' + request.merchantId, request);
  }

  /**
   * List all merchant platforms configured for a gateway merchant.
   */
  merchantPlatforms(request: Models.MerchantProfileRequest): Promise<AxiosResponse<Models.MerchantPlatformsResponse>> {
    return this._dashboardRequest('get', '/api/plugin-configs/' + request.merchantId, request);
  }

  /**
   * List all merchant platforms configured for a gateway merchant.
   */
  updateMerchantPlatforms(request: Models.MerchantPlatform): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this._dashboardRequest('post', '/api/plugin-configs', request);
  }

  /**
   * Deletes a boarding platform configuration.
   */
  deleteMerchantPlatforms(request: Models.MerchantPlatformRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this._dashboardRequest('delete', '/api/plugin-config/' + request.platformId, request);
  }

  /**
   * Returns all terminals associated with the merchant account.
   */
  terminals(request: Models.TerminalProfileRequest): Promise<AxiosResponse<Models.TerminalProfileResponse>> {
    return this._dashboardRequest('get', '/api/terminals', request);
  }

  /**
   * Deactivates a terminal.
   */
  deactivateTerminal(request: Models.TerminalDeactivationRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this._dashboardRequest('delete', '/api/terminal/' + request.terminalId, request);
  }

  /**
   * Activates a terminal.
   */
  activateTerminal(request: Models.TerminalActivationRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this._dashboardRequest('post', '/api/terminal-activate', request);
  }

  /**
   * Returns a list of terms and conditions templates associated with a merchant account.
   */
  tcTemplates(request: Models.TermsAndConditionsTemplateRequest): Promise<AxiosResponse<Models.TermsAndConditionsTemplateResponse>> {
    return this._dashboardRequest('get', '/api/tc-templates', request);
  }

  /**
   * Returns a single terms and conditions template.
   */
  tcTemplate(request: Models.TermsAndConditionsTemplateRequest): Promise<AxiosResponse<Models.TermsAndConditionsTemplate>> {
    return this._dashboardRequest('get', '/api/tc-templates/' + request.templateId, request);
  }

  /**
   * Updates or creates a terms and conditions template.
   */
  tcUpdateTemplate(request: Models.TermsAndConditionsTemplate): Promise<AxiosResponse<Models.TermsAndConditionsTemplate>> {
    return this._dashboardRequest('post', '/api/tc-templates', request);
  }

  /**
   * Deletes a single terms and conditions template.
   */
  tcDeleteTemplate(request: Models.TermsAndConditionsTemplateRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this._dashboardRequest('delete', '/api/tc-templates/' + request.templateId, request);
  }

  /**
   * Returns up to 250 entries from the Terms and Conditions log.
   */
  tcLog(request: Models.TermsAndConditionsLogRequest): Promise<AxiosResponse<Models.TermsAndConditionsLogResponse>> {
    return this._dashboardRequest('post', '/api/tc-log', request);
  }

  /**
   * Returns a single detailed Terms and Conditions entry.
   */
  tcEntry(request: Models.TermsAndConditionsLogRequest): Promise<AxiosResponse<Models.TermsAndConditionsLogEntry>> {
    return this._dashboardRequest('get', '/api/tc-entry/' + request.logEntryId, request);
  }

  /**
   * Returns all survey questions for a given merchant.
   */
  surveyQuestions(request: Models.SurveyQuestionRequest): Promise<AxiosResponse<Models.SurveyQuestionResponse>> {
    return this._dashboardRequest('get', '/api/survey-questions', request);
  }

  /**
   * Returns a single survey question with response data.
   */
  surveyQuestion(request: Models.SurveyQuestionRequest): Promise<AxiosResponse<Models.SurveyQuestion>> {
    return this._dashboardRequest('get', '/api/survey-questions/' + request.questionId, request);
  }

  /**
   * Updates or creates a survey question.
   */
  updateSurveyQuestion(request: Models.SurveyQuestion): Promise<AxiosResponse<Models.SurveyQuestion>> {
    return this._dashboardRequest('post', '/api/survey-questions', request);
  }

  /**
   * Deletes a survey question.
   */
  deleteSurveyQuestion(request: Models.SurveyQuestionRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this._dashboardRequest('delete', '/api/survey-questions/' + request.questionId, request);
  }

  /**
   * Returns results for a single survey question.
   */
  surveyResults(request: Models.SurveyResultsRequest): Promise<AxiosResponse<Models.SurveyQuestion>> {
    return this._dashboardRequest('post', '/api/survey-results', request);
  }

  /**
   * Returns the media library for a given partner, merchant, or organization.
   */
  media(request: Models.MediaRequest): Promise<AxiosResponse<Models.MediaLibraryResponse>> {
    return this._dashboardRequest('get', '/api/media', request);
  }

  /**
   * Uploads a media asset to the media library.
   */
  uploadMedia(request: Models.UploadMetadata, content: any): Promise<AxiosResponse<Models.MediaMetadata>> {
    return this._uploadRequest('/api/upload-media', request, content);
  }
  /**
   * Retrieves the current status of a file upload.
   */
  uploadStatus(request: Models.UploadStatusRequest): Promise<AxiosResponse<Models.UploadStatus>> {
    return this._dashboardRequest('get', '/api/media-upload/' + request.uploadId, request);
  }

  /**
   * Returns the media details for a single media asset.
   */
  mediaAsset(request: Models.MediaRequest): Promise<AxiosResponse<Models.MediaMetadata>> {
    return this._dashboardRequest('get', '/api/media/' + request.mediaId, request);
  }

  /**
   * Deletes a media asset.
   */
  deleteMediaAsset(request: Models.MediaRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this._dashboardRequest('delete', '/api/media/' + request.mediaId, request);
  }

  /**
   * Returns a collection of slide shows.
   */
  slideShows(request: Models.SlideShowRequest): Promise<AxiosResponse<Models.SlideShowResponse>> {
    return this._dashboardRequest('get', '/api/slide-shows', request);
  }

  /**
   * Returns a single slide show with slides.
   */
  slideShow(request: Models.SlideShowRequest): Promise<AxiosResponse<Models.SlideShow>> {
    return this._dashboardRequest('get', '/api/slide-shows/' + request.slideShowId, request);
  }

  /**
   * Updates or creates a slide show.
   */
  updateSlideShow(request: Models.SlideShow): Promise<AxiosResponse<Models.SlideShow>> {
    return this._dashboardRequest('post', '/api/slide-shows', request);
  }

  /**
   * Deletes a single slide show.
   */
  deleteSlideShow(request: Models.SlideShowRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this._dashboardRequest('delete', '/api/slide-shows/' + request.slideShowId, request);
  }

  /**
   * Returns the terminal branding stack for a given set of API credentials.
   */
  terminalBranding(request: Models.BrandingAssetRequest): Promise<AxiosResponse<Models.BrandingAssetResponse>> {
    return this._dashboardRequest('get', '/api/terminal-branding', request);
  }

  /**
   * Updates a branding asset.
   */
  updateBrandingAsset(request: Models.BrandingAsset): Promise<AxiosResponse<Models.BrandingAsset>> {
    return this._dashboardRequest('post', '/api/terminal-branding', request);
  }

  /**
   * Deletes a branding asset.
   */
  deleteBrandingAsset(request: Models.BrandingAssetRequest): Promise<AxiosResponse<Models.Acknowledgement>> {
    return this._dashboardRequest('delete', '/api/terminal-branding/' + request.assetId, request);
  }

  async routeTerminalRequest(method: any, request: any, terminalPath: string, cloudPath: string): Promise<any> {
    if (this.isTerminalRouted(request)) {
      const route = await this._resolveTerminalRoute(request.terminalName);
      if (route && !route.cloudRelayEnabled) {
        return this._terminalRequest(method, route, terminalPath, request);
      }
    }
    if (cloudPath) {
      return this._relayRequest(method, cloudPath, request);
    }
    return this._gatewayRequest(method, terminalPath, request);
  }

  async routeTerminalPost(request: any, terminalPath: string, cloudPath: string): Promise<any> {
    return this.routeTerminalRequest('post', request, terminalPath, cloudPath);
  }

  returnValidationError(desc: string): any {
    const result: any = {
      data: {
        approved: false,
        success: false,
        error: desc
      }
    };
    return result;
  }

  validateRequest(request: any): boolean {
    if (!this.validateCurrency(request.amount)) {
      return false;
    }
    return true;
  }

  validateCurrency(val: string): boolean {
    const amt: number = parseFloat(val);
    if (amt && !isNaN(amt)) {
      const decMatch: RegExpMatchArray | null = val.match(/\./g);
      if (decMatch && decMatch.length > 1) {
        return false;
      }
      return true;
    }
    return false;
  }

  isTerminalRouted(request: any): boolean {
    if (this.cloudRelay) {
      return false;
    } else if (request.terminalName) {
      return true;
    }
    return false;
  }

  _relayRequest(method: any, path: string, request: any): Promise<any> {
    return this._gatewayRequest(method, path, request, true);
  }

  _uploadRequest(path: string, request: any, content: any): Promise<any> {
    const config: AxiosRequestConfig = {
      method: 'post',
      url: this._assembleDashboardUrl(path),
      timeout: this._getTimeout(request, this.gatewayTimeout) * 1000,
      headers: {
        [AGENT_HEADER]: USER_AGENT,
      },
    };

    config.data = content;

    if (this.credentials && this.credentials.apiKey) {
      config.headers = Object.assign(config.headers, CryptoUtils.generateGatewayHeaders(this.credentials));
    }
    if (request.fileSize) {
      config.headers['X-File-Size'] = request.fileSize.toFixed();
    }
    if (request.fileName) {
      config.headers['X-Upload-File-Name'] = request.fileName;
    }
    if (request.uploadId) {
      config.headers['X-Upload-ID'] = request.uploadId;
    }

    return axios(config);
  }

  _dashboardRequest(method: any, path: string, request: any): Promise<any> {
    const config: AxiosRequestConfig = {
      method: method,
      url: this._assembleDashboardUrl(path),
      timeout: this._getTimeout(request, this.gatewayTimeout) * 1000,
      headers: {
        [AGENT_HEADER]: USER_AGENT,
        'Content-Type': 'application/json',
      },
    };

    if (method !== 'get') {
      config.data = request;
    }

    if (this.credentials && this.credentials.apiKey) {
      config.headers = Object.assign(config.headers, CryptoUtils.generateGatewayHeaders(this.credentials));
    }
    return axios(config);
  }

  _gatewayRequest(method: any, path: string, request?: any, relay?: boolean): Promise<any> {
    const config: AxiosRequestConfig = {
      method: method,
      url: this._assembleGatewayUrl(path, request),
      timeout: this._getTimeout(request, relay ? this.terminalTimeout : this.gatewayTimeout) * 1000,
      headers: {
        [AGENT_HEADER]: USER_AGENT,
        'Content-Type': 'application/json',
      },
    };

    if (method !== 'get') {
      config.data = request;
    }

    if (this.credentials && this.credentials.apiKey) {
      config.headers = Object.assign(config.headers, CryptoUtils.generateGatewayHeaders(this.credentials));
    }

    return axios(config);
  }

  _getTimeout(request: any, defaultTimeout: number): number {
    if (request && 'timeout' in request) {
      return request['timeout'];
    }

    return defaultTimeout;
  }

  _assembleDashboardUrl(path: string): string {
    return this.dashboardHost + path;
  }

  _assembleGatewayUrl(path: string, payload?: any): string {
    let result: string = '';
    if (payload && payload.test) {
      result = result + this.testGatewayHost;
    } else {
      result = result + this.gatewayHost;
    }
    result = result + path;
    return result;
  }

  async _terminalRequest(method: any, route: TerminalRoute, path: string, request: any): Promise<any> {
    const url: string = await this._assembleTerminalUrl(route, path);

    const config: AxiosRequestConfig = {
      method: method,
      url: url,
      headers: {
        [AGENT_HEADER]: USER_AGENT,
        'Content-Type': 'application/json',
      },
      timeout: this._getTimeout(request, this.terminalTimeout) * 1000,
    };
    if (typeof window === 'undefined') {
      if (this.https) {
        config.httpsAgent = new nodeHttps.Agent({
          rejectUnauthorized: false
        });
      }
    } else {
      config.httpsAgent = {
        protocol: 'https:',
        rejectUnauthorized: false
      };
    }

    if (request) {
      config.data = {
        apiKey: route.transientCredentials.apiKey,
        bearerToken: route.transientCredentials.bearerToken,
        signingKey: route.transientCredentials.signingKey,
        request: request,
      };
    }

    return axios(config);
  }

  async _assembleTerminalUrl(route: TerminalRoute, path: string): Promise<string> {
    let result: string = 'http';
    if (this.https) {
      result = result + 's';
    }
    result = result + '://';
    result = result + route.ipAddress;
    if (this.https) {
      result = result + ':8443';
    } else {
      result = result + ':8080';
    }
    result = result + path;
    return result;
  }

  async _resolveTerminalRoute(terminalName: string): Promise<TerminalRoute> {
    const cacheEntry: RouteCacheEntry | undefined = this._routeCache[terminalName];

    if (cacheEntry) {
      if (cacheEntry.ttl >= new Date().getTime()) {
        return cacheEntry.route;
      }
    }

    const routeResponse: any = await this._gatewayRequest('get', '/api/terminal-route?terminal=' + terminalName);
    const route: TerminalRoute = routeResponse.data;
    this._routeCache[terminalName] =
      {
        ttl: new Date().getTime() + (this.routeCacheTTL * 60000),
        route: route
      };

    return route;
  }
}

export class BlockChypCredentials {
  constructor(public apiKey: string, public bearerToken: string, public signingKey: string) {
    this.apiKey = apiKey
    this.bearerToken = bearerToken
    this.signingKey = signingKey
  }
}

const BlockChyp: BlockChypClient = new BlockChypClient();
export default BlockChyp;

export function newClient(creds: BlockChypCredentials): BlockChypClient {
  return BlockChyp.newClient(creds);
}
