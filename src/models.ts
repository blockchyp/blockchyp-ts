/**
 * Copyright 2019-2025 BlockChyp, Inc. All rights reserved. Use of this code is governed
 * by a license that can be found in the LICENSE file.
 *
 * This file was generated automatically by the BlockChyp SDK Generator. Changes to this
 * file will be lost every time the code is regenerated.
 */

// APICredentials models gateway credentials.
interface APICredentials {
  apiKey: string;
  bearerToken: string;
  signingKey: string;
}

// CardType is used to differentiate credit, debit, and EBT.
enum CardType {
  Credit,
  Debit,
  EBT,
  BlockchainGift,
  Healthcare
}

// SignatureFormat is used to specify the output format for customer signature images.
type SignatureFormat = "" | "png" | "jpg" | "gif";

// CVMType designates a customer verification method.
type CVMType = 'Signature' | 'Offline PIN' | 'Online PIN' | 'CDCVM' | 'No CVM';

// PromptType is used to specify the type of text input data being requested from a customer.
type PromptType = 'amount' | 'email' | 'phone' | 'customer-number' | 'rewards-number' | 'first-name' | 'last-name';

// AVSResponse indicates the result of address verification.
type AVSResponse = '' | 'not_supported' | 'retry' | 'no_match' | 'address_match' | 'zip_match' | 'match';

// HealthcareType is a category of healthcare.
type HealthcareType = 'healthcare' | 'prescription' | 'vision' | 'clinic' | 'dental';

// RoundingMode indicates how partial penny rounding operations should work.
type RoundingMode = 'up' | 'nearest' | 'down';


  /**
   * EMV fields we recommend developers put on their receipts.
   */
export class ReceiptSuggestions {

  /**
   * The EMV Application Identifier.
   */
    aid?: string;

  /**
   * The EMV Application Request Cryptogram.
   */
    arqc?: string;

  /**
   * The EMV Issuer Application Data.
   */
    iad?: string;

  /**
   * The EMV Authorization Response Code.
   */
    arc?: string;

  /**
   * The EMV Transaction Certificate.
   */
    tc?: string;

  /**
   * The EMV Terminal Verification Response.
   */
    tvr?: string;

  /**
   * The EMV Transaction Status Indicator.
   */
    tsi?: string;

  /**
   * The ID of the payment terminal.
   */
    terminalId?: string;

  /**
   * The name of the merchant's business.
   */
    merchantName?: string;

  /**
   * The ID of the merchant.
   */
    merchantId?: string;

  /**
   * The partially masked merchant key required on EMV receipts.
   */
    merchantKey?: string;

  /**
   * A description of the selected AID.
   */
    applicationLabel?: string;

  /**
   * That the receipt should contain a signature line.
   */
    requestSignature: boolean | null = null;

  /**
   * The masked primary account number of the payment card, as required.
   */
    maskedPan?: string;

  /**
   * The amount authorized by the payment network. Could be less than the requested amount
   * for partial auth.
   */
    authorizedAmount: string | null = null;

  /**
   * The type of transaction performed (CHARGE, PREAUTH, REFUND, etc).
   */
    transactionType: string | null = null;

  /**
   * The method by which the payment card was entered (MSR, CHIP, KEYED, etc.).
   */
    entryMethod?: string;

  /**
   * That PIN verification was performed.
   */
    pinVerified?: boolean;

  /**
   * The customer verification method used for the transaction.
   */
    cvmUsed?: CVMType;

  /**
   * That a chip read failure caused the transaction to fall back to the magstripe.
   */
    fallback?: boolean;

  /**
   * The sequence of the transaction in the batch.
   */
    batchSequence?: number;

  /**
   * The amount of cash back that was approved.
   */
    cashBackAmount?: string;

  /**
   * The amount added to the transaction to cover eligible credit card fees.
   */
    surcharge?: string;

  /**
   * The discount applied to the transaction for payment methods ineligible for
   * surcharges.
   */
    cashDiscount?: string;

    // Constructor with default values for optional fields
    constructor(
        aid: string | undefined = undefined,
        arqc: string | undefined = undefined,
        iad: string | undefined = undefined,
        arc: string | undefined = undefined,
        tc: string | undefined = undefined,
        tvr: string | undefined = undefined,
        tsi: string | undefined = undefined,
        terminalId: string | undefined = undefined,
        merchantName: string | undefined = undefined,
        merchantId: string | undefined = undefined,
        merchantKey: string | undefined = undefined,
        applicationLabel: string | undefined = undefined,
        requestSignature: boolean | null = null,
        maskedPan: string | undefined = undefined,
        authorizedAmount: string | null = null,
        transactionType: string | null = null,
        entryMethod: string | undefined = undefined,
        pinVerified: boolean = false,
        cvmUsed: CVMType | undefined = undefined,
        fallback: boolean = false,
        batchSequence: number = 0,
        cashBackAmount: string | undefined = undefined,
        surcharge: string | undefined = undefined,
        cashDiscount: string | undefined = undefined,
        ) {
        this.aid = aid;
        this.arqc = arqc;
        this.iad = iad;
        this.arc = arc;
        this.tc = tc;
        this.tvr = tvr;
        this.tsi = tsi;
        this.terminalId = terminalId;
        this.merchantName = merchantName;
        this.merchantId = merchantId;
        this.merchantKey = merchantKey;
        this.applicationLabel = applicationLabel;
        this.requestSignature = requestSignature;
        this.maskedPan = maskedPan;
        this.authorizedAmount = authorizedAmount;
        this.transactionType = transactionType;
        this.entryMethod = entryMethod;
        this.pinVerified = pinVerified;
        this.cvmUsed = cvmUsed;
        this.fallback = fallback;
        this.batchSequence = batchSequence;
        this.cashBackAmount = cashBackAmount;
        this.surcharge = surcharge;
        this.cashDiscount = cashDiscount;
        }
}

  /**
   * A basic api acknowledgement.
   */
export class Acknowledgement {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        }
}

  /**
   * A request for customer signature data.
   */
export class CaptureSignatureRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * A location on the filesystem which a customer signature should be written to.
   */
    sigFile?: string;

  /**
   * The image format to be used for returning signatures.
   */
    sigFormat?: SignatureFormat;

  /**
   * The width that the signature image should be scaled to, preserving the aspect ratio.
   * If not provided, the signature is returned in the terminal's max resolution.
   */
    sigWidth?: number;

  /**
   * Whether or not signature prompt should be skipped on the terminal. The terminal will
   * indicate whether or not a signature is required by the card in the receipt suggestions
   * response.
   */
    disableSignature?: boolean;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        sigFile: string | undefined = undefined,
        sigFormat: SignatureFormat | undefined = undefined,
        sigWidth: number = 0,
        disableSignature: boolean = false,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.sigFile = sigFile;
        this.sigFormat = sigFormat;
        this.sigWidth = sigWidth;
        this.disableSignature = disableSignature;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        }
}

  /**
   * Customer signature data.
   */
export class CaptureSignatureResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The hex encoded signature data.
   */
    sigFile?: string;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        sigFile: string | undefined = undefined,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.sigFile = sigFile;
        }
}

  /**
   * Information needed to test connectivity with a terminal.
   */
export class PingRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        }
}

  /**
   * The response to a ping request.
   */
export class PingResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The ID assigned to the transaction.
   */
    transactionId: string | null = null;

  /**
   * The ID assigned to the batch.
   */
    batchId?: string;

  /**
   * The transaction reference string assigned to the transaction request. If no
   * transaction ref was assiged on the request, then the gateway will randomly generate
   * one.
   */
    transactionRef?: string;

  /**
   * The type of transaction.
   */
    transactionType: string | null = null;

  /**
   * The timestamp of the transaction.
   */
    timestamp: string | null = null;

  /**
   * The hash of the last tick block.
   */
    tickBlock: string | null = null;

  /**
   * That the transaction was processed on the test gateway.
   */
    test: boolean | null = null;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * The ECC signature of the response. Can be used to ensure that it was signed by the
   * terminal and detect man-in-the middle attacks.
   */
    sig?: string;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        transactionId: string | null = null,
        batchId: string | undefined = undefined,
        transactionRef: string | undefined = undefined,
        transactionType: string | null = null,
        timestamp: string | null = null,
        tickBlock: string | null = null,
        test: boolean | null = null,
        destinationAccount: string | undefined = undefined,
        sig: string | undefined = undefined,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.transactionId = transactionId;
        this.batchId = batchId;
        this.transactionRef = transactionRef;
        this.transactionType = transactionType;
        this.timestamp = timestamp;
        this.tickBlock = tickBlock;
        this.test = test;
        this.destinationAccount = destinationAccount;
        this.sig = sig;
        }
}

  /**
   * Information needed to retrieve location information for a terminal.
   */
export class LocateRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        }
}

  /**
   * The response to a locate request.
   */
export class LocateResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The ID assigned to the transaction.
   */
    transactionId: string | null = null;

  /**
   * The ID assigned to the batch.
   */
    batchId?: string;

  /**
   * The transaction reference string assigned to the transaction request. If no
   * transaction ref was assiged on the request, then the gateway will randomly generate
   * one.
   */
    transactionRef?: string;

  /**
   * The type of transaction.
   */
    transactionType: string | null = null;

  /**
   * The timestamp of the transaction.
   */
    timestamp: string | null = null;

  /**
   * The hash of the last tick block.
   */
    tickBlock: string | null = null;

  /**
   * That the transaction was processed on the test gateway.
   */
    test: boolean | null = null;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * The ECC signature of the response. Can be used to ensure that it was signed by the
   * terminal and detect man-in-the middle attacks.
   */
    sig?: string;

  /**
   * The name assigned to the terminal at activation.
   */
    terminalName: string | null = null;

  /**
   * The local IP address of the terminal.
   */
    ipAddress: string | null = null;

  /**
   * Whether or not the terminal is running in cloud relay mode.
   */
    cloudRelay: boolean | null = null;

  /**
   * The terminal's public key.
   */
    publicKey: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        transactionId: string | null = null,
        batchId: string | undefined = undefined,
        transactionRef: string | undefined = undefined,
        transactionType: string | null = null,
        timestamp: string | null = null,
        tickBlock: string | null = null,
        test: boolean | null = null,
        destinationAccount: string | undefined = undefined,
        sig: string | undefined = undefined,
        terminalName: string | null = null,
        ipAddress: string | null = null,
        cloudRelay: boolean | null = null,
        publicKey: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.transactionId = transactionId;
        this.batchId = batchId;
        this.transactionRef = transactionRef;
        this.transactionType = transactionType;
        this.timestamp = timestamp;
        this.tickBlock = tickBlock;
        this.test = test;
        this.destinationAccount = destinationAccount;
        this.sig = sig;
        this.terminalName = terminalName;
        this.ipAddress = ipAddress;
        this.cloudRelay = cloudRelay;
        this.publicKey = publicKey;
        }
}

  /**
   * A message to be displayed on the terminal screen.
   */
export class MessageRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

  /**
   * The message to be displayed on the terminal.
   */
    message: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        message: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        this.message = message;
        }
}

  /**
   * A simple yes no prompt request.
   */
export class BooleanPromptRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

  /**
   * The preferred caption for the 'yes' button.
   */
    yesCaption: string | null = null;

  /**
   * The preferred caption for the 'no' button.
   */
    noCaption: string | null = null;

  /**
   * The text to be displayed on the terminal.
   */
    prompt: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        yesCaption: string | null = null,
        noCaption: string | null = null,
        prompt: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        this.yesCaption = yesCaption;
        this.noCaption = noCaption;
        this.prompt = prompt;
        }
}

  /**
   * A text prompt request.
   */
export class TextPromptRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

  /**
   * The prompt type (email, phone, etc).
   */
    promptType: PromptType | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        promptType: PromptType | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        this.promptType = promptType;
        }
}

  /**
   * Models a customer data request.
   */
export class CustomerRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * BlockChyp assigned customer id.
   */
    customerId: string | null = null;

  /**
   * Optional customer ref that can be used for the client's system's customer id.
   */
    customerRef: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        customerId: string | null = null,
        customerRef: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.customerId = customerId;
        this.customerRef = customerRef;
        }
}

  /**
   * Models a customer data response.
   */
export class CustomerResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The customer record.
   */
    customer?: Customer;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        customer: Customer | undefined = undefined,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.customer = customer;
        }
}

  /**
   * Models a customer data search request.
   */
export class CustomerSearchRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * Search query for customer searches.
   */
    query: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        query: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.query = query;
        }
}

  /**
   * Models a customer data search request.
   */
export class UpdateCustomerRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * Models a customer update request.
   */
    customer: Customer | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        customer: Customer | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.customer = customer;
        }
}

  /**
   * Models customer search results.
   */
export class CustomerSearchResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The customer results matching the search query.
   */
    customers: Customer[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        customers: Customer[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.customers = customers;
        }
}

  /**
   * Models a customer record.
   */
export class Customer {

  /**
   * BlockChyp assigned customer id.
   */
    id: string | null = null;

  /**
   * Optional customer ref that can be used for the client's system's customer id.
   */
    customerRef: string | null = null;

  /**
   * Customer's first name.
   */
    firstName: string | null = null;

  /**
   * Customer's last name.
   */
    lastName: string | null = null;

  /**
   * Customer's company name.
   */
    companyName: string | null = null;

  /**
   * Customer's email address.
   */
    emailAddress: string | null = null;

  /**
   * Customer's SMS or mobile number.
   */
    smsNumber: string | null = null;

  /**
   * Model saved payment methods associated with a customer.
   */
    paymentMethods: CustomerToken[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        id: string | null = null,
        customerRef: string | null = null,
        firstName: string | null = null,
        lastName: string | null = null,
        companyName: string | null = null,
        emailAddress: string | null = null,
        smsNumber: string | null = null,
        paymentMethods: CustomerToken[] | null = null,
        ) {
        this.id = id;
        this.customerRef = customerRef;
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
        this.emailAddress = emailAddress;
        this.smsNumber = smsNumber;
        this.paymentMethods = paymentMethods;
        }
}

  /**
   * Retrieves token metadata.
   */
export class TokenMetadataRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The token to retrieve.
   */
    token: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        token: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.token = token;
        }
}

  /**
   * Models a payment token metadata response.
   */
export class TokenMetadataResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The token metadata for a given query.
   */
    token: CustomerToken | null = null;

  /**
   * Details about a payment card derived from its BIN/IIN.
   */
    cardMetadata?: CardMetadata;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        token: CustomerToken | null = null,
        cardMetadata: CardMetadata | undefined = undefined,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.token = token;
        this.cardMetadata = cardMetadata;
        }
}

  /**
   * Updates a payment token.
   */
export class UpdateTokenRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * The token to update.
   */
    token: string | null = null;

  /**
   * Bank account holder type (personal or business).
   */
    accountHolderType: string | null = null;

  /**
   * Bank account type (checking or saving).
   */
    accountType: string | null = null;

  /**
   * Bank name.
   */
    bankName: string | null = null;

  /**
   * Card holder name.
   */
    cardHolderName: string | null = null;

  /**
   * Expiry month.
   */
    expiryMonth: string | null = null;

  /**
   * Expiry year.
   */
    expiryYear: string | null = null;

  /**
   * Address.
   */
    address: string | null = null;

  /**
   * Postal code.
   */
    postalCode: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        token: string | null = null,
        accountHolderType: string | null = null,
        accountType: string | null = null,
        bankName: string | null = null,
        cardHolderName: string | null = null,
        expiryMonth: string | null = null,
        expiryYear: string | null = null,
        address: string | null = null,
        postalCode: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.token = token;
        this.accountHolderType = accountHolderType;
        this.accountType = accountType;
        this.bankName = bankName;
        this.cardHolderName = cardHolderName;
        this.expiryMonth = expiryMonth;
        this.expiryYear = expiryYear;
        this.address = address;
        this.postalCode = postalCode;
        }
}

  /**
   * The response to a update token request.
   */
export class UpdateTokenResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The updated token for a given query.
   */
    token: CustomerToken | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        token: CustomerToken | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.token = token;
        }
}

  /**
   * Models a customer token.
   */
export class CustomerToken {

  /**
   * BlockChyp assigned customer id.
   */
    token: string | null = null;

  /**
   * Masked primary account number.
   */
    maskedPan: string | null = null;

  /**
   * Expiration month.
   */
    expiryMonth: string | null = null;

  /**
   * Expiration month.
   */
    expiryYear: string | null = null;

  /**
   * Payment type.
   */
    paymentType: string | null = null;

  /**
   * Bank account type (checking, saving).
   */
    accountType: string | null = null;

  /**
   * Bank account holder type (personal, business).
   */
    accountHolderType: string | null = null;

  /**
   * Bank name.
   */
    bankName: string | null = null;

  /**
   * Routing number.
   */
    routingNumber: string | null = null;

  /**
   * Token hash (generated with a static salt, Merchant ID, Registration Date and PAN.
   */
    tokenHash: string | null = null;

  /**
   * Card bin.
   */
    bin: string | null = null;

  /**
   * Models customer records associated with a payment token.
   */
    customers: Customer[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        token: string | null = null,
        maskedPan: string | null = null,
        expiryMonth: string | null = null,
        expiryYear: string | null = null,
        paymentType: string | null = null,
        accountType: string | null = null,
        accountHolderType: string | null = null,
        bankName: string | null = null,
        routingNumber: string | null = null,
        tokenHash: string | null = null,
        bin: string | null = null,
        customers: Customer[] | null = null,
        ) {
        this.token = token;
        this.maskedPan = maskedPan;
        this.expiryMonth = expiryMonth;
        this.expiryYear = expiryYear;
        this.paymentType = paymentType;
        this.accountType = accountType;
        this.accountHolderType = accountHolderType;
        this.bankName = bankName;
        this.routingNumber = routingNumber;
        this.tokenHash = tokenHash;
        this.bin = bin;
        this.customers = customers;
        }
}

  /**
   * The response to a text prompt request.
   */
export class TextPromptResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The text prompt response.
   */
    response: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        response: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.response = response;
        }
}

  /**
   * The response to a boolean prompt request.
   */
export class BooleanPromptResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The boolean prompt response.
   */
    response: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        response: boolean | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.response = response;
        }
}

  /**
   * Shows details about a white listed card.
   */
export class WhiteListedCard {

  /**
   * The card BIN.
   */
    bin: string | null = null;

  /**
   * The track 1 data from the card.
   */
    track1: string | null = null;

  /**
   * The track 2 data from the card.
   */
    track2: string | null = null;

  /**
   * The card primary account number.
   */
    pan: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        bin: string | null = null,
        track1: string | null = null,
        track2: string | null = null,
        pan: string | null = null,
        ) {
        this.bin = bin;
        this.track1 = track1;
        this.track2 = track2;
        this.pan = pan;
        }
}

  /**
   * An authorization request for a charge, preauth, or reverse transaction.
   */
export class AuthorizationRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The payment token to be used for this transaction. This should be used for recurring
   * transactions.
   */
    token?: string;

  /**
   * Track 1 magnetic stripe data.
   */
    track1?: string;

  /**
   * Track 2 magnetic stripe data.
   */
    track2?: string;

  /**
   * The primary account number. We recommend using the terminal or e-commerce
   * tokenization libraries instead of passing account numbers in directly, as this
   * would put your application in PCI scope.
   */
    pan?: string;

  /**
   * The ACH routing number for ACH transactions.
   */
    routingNumber?: string;

  /**
   * The cardholder name. Only required if the request includes a primary account number
   * or track data.
   */
    cardholderName?: string;

  /**
   * The card expiration month for use with PAN based transactions.
   */
    expMonth?: string;

  /**
   * The card expiration year for use with PAN based transactions.
   */
    expYear?: string;

  /**
   * The card CVV for use with PAN based transactions.
   */
    cvv?: string;

  /**
   * The cardholder address for use with address verification.
   */
    address?: string;

  /**
   * The cardholder postal code for use with address verification.
   */
    postalCode?: string;

  /**
   * That the payment entry method is a manual keyed transaction. If this is true, no other
   * payment method will be accepted.
   */
    manualEntry?: boolean;

  /**
   * The key serial number used for DUKPT encryption.
   */
    ksn?: string;

  /**
   * The encrypted pin block.
   */
    pinBlock?: string;

  /**
   * Designates categories of cards: credit, debit, EBT.
   */
    cardType?: CardType;

  /**
   * Designates brands of payment methods: Visa, Discover, etc.
   */
    paymentType?: string;

  /**
   * The transaction currency code.
   */
    currencyCode: string | null = null;

  /**
   * The requested amount.
   */
    amount: string | null = null;

  /**
   * That the request is tax exempt. Only required for tax exempt level 2 processing.
   */
    taxExempt: boolean | null = null;

  /**
   * A flag to add a surcharge to the transaction to cover credit card fees, if permitted.
   */
    surcharge: boolean | null = null;

  /**
   * A flag that applies a discount to negate the surcharge for debit transactions or other
   * surcharge ineligible payment methods.
   */
    cashDiscount: boolean | null = null;

  /**
   * A location on the filesystem which a customer signature should be written to.
   */
    sigFile?: string;

  /**
   * The image format to be used for returning signatures.
   */
    sigFormat?: SignatureFormat;

  /**
   * The width that the signature image should be scaled to, preserving the aspect ratio.
   * If not provided, the signature is returned in the terminal's max resolution.
   */
    sigWidth?: number;

  /**
   * Whether or not signature prompt should be skipped on the terminal. The terminal will
   * indicate whether or not a signature is required by the card in the receipt suggestions
   * response.
   */
    disableSignature?: boolean;

  /**
   * The tip amount.
   */
    tipAmount?: string;

  /**
   * The tax amount.
   */
    taxAmount?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

  /**
   * Can be used to update a pre-auth to a new amount, sometimes called incremental auth.
   */
    transactionId?: string;

  /**
   * Used to validate online gift card authorizations.
   */
    onlineAuthCode?: string;

  /**
   * That the payment method should be added to the token vault alongside the
   * authorization.
   */
    enroll?: boolean;

  /**
   * Duplicate detection should be bypassed.
   */
    bypassDupeFilter?: boolean;

  /**
   * A narrative description of the transaction.
   */
    description?: string;

  /**
   * That the terminal should request a tip from the user before starting the transaction.
   */
    promptForTip?: boolean;

  /**
   * That cash back should be enabled for supported cards.
   */
    cashBackEnabled?: boolean;

  /**
   * That this transaction should be treated as MOTO with a card on file.
   */
    cardOnFile?: boolean;

  /**
   * That this transaction should be treated as a recurring transaction.
   */
    recurring?: boolean;

  /**
   * Manually sets the CIT (Customer Initiated Transaction) flag.
   */
    cit?: boolean;

  /**
   * Manually sets the MIT (Merchant Initiated Transaction) flag.
   */
    mit?: boolean;

  /**
   * That this transaction should be treated as a subscription recurring transaction.
   */
    subscription?: boolean;

  /**
   * The purchase order number, if known.
   */
    purchaseOrderNumber?: string;

  /**
   * The supplier reference number, if known.
   */
    supplierReferenceNumber?: string;

  /**
   * An item to display. Can be overwritten or appended, based on the request type.
   */
    lineItems: TransactionDisplayItem[] | null = null;

  /**
   * A map of alternate currencies and the price in each currency. Use only if you want to set
   * your own exchange rate for a crypto transaction.
   */
    altPrices?: {[key: string]: string};

  /**
   * Customer information.
   */
    customer?: Customer;

  /**
   * How partial pennies should be rounded for calculated values like surcharges.
   * Rounding up is the default behavior.
   */
    roundingMode?: RoundingMode;

  /**
   * Details for HSA/FSA transactions.
   */
    healthcareMetadata?: HealthcareMetadata;

  /**
   * That the transaction should be a cryptocurrency transaction. Value should be a
   * crypto currency code (ETH, BTC) or ANY to prompt the user to choose from supported
   * cryptocurrencies.
   */
    cryptocurrency?: string;

  /**
   * An optional parameter that can be used to force a crypto transaction onto a level one or
   * level two network. Valid values are L1 and L2. Defaults to L1.
   */
    cryptoNetwork?: string;

  /**
   * Can be used to specify a specific receive address for a crypto transaction. Disabled
   * by default. This should only be used by sophisticated users with access to properly
   * configured hot wallets.
   */
    cryptoReceiveAddress?: string;

  /**
   * Can optionally add a label to the payment request if the target cryptocurrency
   * supports labels. Defaults to the merchant's DBA Name.
   */
    paymentRequestLabel?: string;

  /**
   * Can optionally add a message to the payment request if the target cryptocurrency
   * supports labels. Defaults to empty.
   */
    paymentRequestMessage?: string;

  /**
   * Instructs the terminal to simulate a post auth chip rejection that would trigger an
   * automatic reversal.
   */
    simulateChipRejection?: boolean;

  /**
   * Instructs the terminal to simulate an out of order automatic reversal.
   */
    simulateOutOfOrderReversal?: boolean;

  /**
   * Causes auto-reversals on the terminal to be executed asyncronously. Use with
   * caution and in conjunction with the transaction status API.
   */
    asyncReversals?: boolean;

  /**
   * A passthrough surcharge amount. This surcharge amount will be passed directly to the
   * gateway and is not directly calculated.
   */
    passthroughSurcharge?: string;

  /**
   * Marks a transaction as HSA/FSA.
   */
    healthcare?: boolean;

  /**
   * The total amount to process as healthcare.
   */
    healthcareTotal?: string;

  /**
   * The total amount to process as ebt.
   */
    ebtTotal?: string;

  /**
   * That this transaction will include a card metadata lookup.
   */
    cardMetadataLookup?: boolean;

  /**
   * The shipping cost associated with the transaction
   */
    shippingAmount?: string;

  /**
   * The processor ID associated with the transaction
   */
    processorId?: string;

  /**
   * The external customer ID associated with the transaction
   */
    externalCustomerId?: string;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        token: string | undefined = undefined,
        track1: string | undefined = undefined,
        track2: string | undefined = undefined,
        pan: string | undefined = undefined,
        routingNumber: string | undefined = undefined,
        cardholderName: string | undefined = undefined,
        expMonth: string | undefined = undefined,
        expYear: string | undefined = undefined,
        cvv: string | undefined = undefined,
        address: string | undefined = undefined,
        postalCode: string | undefined = undefined,
        manualEntry: boolean = false,
        ksn: string | undefined = undefined,
        pinBlock: string | undefined = undefined,
        cardType: CardType | undefined = undefined,
        paymentType: string | undefined = undefined,
        currencyCode: string | null = null,
        amount: string | null = null,
        taxExempt: boolean | null = null,
        surcharge: boolean | null = null,
        cashDiscount: boolean | null = null,
        sigFile: string | undefined = undefined,
        sigFormat: SignatureFormat | undefined = undefined,
        sigWidth: number = 0,
        disableSignature: boolean = false,
        tipAmount: string | undefined = undefined,
        taxAmount: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        transactionId: string | undefined = undefined,
        onlineAuthCode: string | undefined = undefined,
        enroll: boolean = false,
        bypassDupeFilter: boolean = false,
        description: string | undefined = undefined,
        promptForTip: boolean = false,
        cashBackEnabled: boolean = false,
        cardOnFile: boolean = false,
        recurring: boolean = false,
        cit: boolean = false,
        mit: boolean = false,
        subscription: boolean = false,
        purchaseOrderNumber: string | undefined = undefined,
        supplierReferenceNumber: string | undefined = undefined,
        lineItems: TransactionDisplayItem[] | null = null,
        altPrices: {[key: string]: string} | undefined = undefined,
        customer: Customer | undefined = undefined,
        roundingMode: RoundingMode | undefined = undefined,
        healthcareMetadata: HealthcareMetadata | undefined = undefined,
        cryptocurrency: string | undefined = undefined,
        cryptoNetwork: string | undefined = undefined,
        cryptoReceiveAddress: string | undefined = undefined,
        paymentRequestLabel: string | undefined = undefined,
        paymentRequestMessage: string | undefined = undefined,
        simulateChipRejection: boolean = false,
        simulateOutOfOrderReversal: boolean = false,
        asyncReversals: boolean = false,
        passthroughSurcharge: string | undefined = undefined,
        healthcare: boolean = false,
        healthcareTotal: string | undefined = undefined,
        ebtTotal: string | undefined = undefined,
        cardMetadataLookup: boolean = false,
        shippingAmount: string | undefined = undefined,
        processorId: string | undefined = undefined,
        externalCustomerId: string | undefined = undefined,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.token = token;
        this.track1 = track1;
        this.track2 = track2;
        this.pan = pan;
        this.routingNumber = routingNumber;
        this.cardholderName = cardholderName;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.cvv = cvv;
        this.address = address;
        this.postalCode = postalCode;
        this.manualEntry = manualEntry;
        this.ksn = ksn;
        this.pinBlock = pinBlock;
        this.cardType = cardType;
        this.paymentType = paymentType;
        this.currencyCode = currencyCode;
        this.amount = amount;
        this.taxExempt = taxExempt;
        this.surcharge = surcharge;
        this.cashDiscount = cashDiscount;
        this.sigFile = sigFile;
        this.sigFormat = sigFormat;
        this.sigWidth = sigWidth;
        this.disableSignature = disableSignature;
        this.tipAmount = tipAmount;
        this.taxAmount = taxAmount;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        this.transactionId = transactionId;
        this.onlineAuthCode = onlineAuthCode;
        this.enroll = enroll;
        this.bypassDupeFilter = bypassDupeFilter;
        this.description = description;
        this.promptForTip = promptForTip;
        this.cashBackEnabled = cashBackEnabled;
        this.cardOnFile = cardOnFile;
        this.recurring = recurring;
        this.cit = cit;
        this.mit = mit;
        this.subscription = subscription;
        this.purchaseOrderNumber = purchaseOrderNumber;
        this.supplierReferenceNumber = supplierReferenceNumber;
        this.lineItems = lineItems;
        this.altPrices = altPrices;
        this.customer = customer;
        this.roundingMode = roundingMode;
        this.healthcareMetadata = healthcareMetadata;
        this.cryptocurrency = cryptocurrency;
        this.cryptoNetwork = cryptoNetwork;
        this.cryptoReceiveAddress = cryptoReceiveAddress;
        this.paymentRequestLabel = paymentRequestLabel;
        this.paymentRequestMessage = paymentRequestMessage;
        this.simulateChipRejection = simulateChipRejection;
        this.simulateOutOfOrderReversal = simulateOutOfOrderReversal;
        this.asyncReversals = asyncReversals;
        this.passthroughSurcharge = passthroughSurcharge;
        this.healthcare = healthcare;
        this.healthcareTotal = healthcareTotal;
        this.ebtTotal = ebtTotal;
        this.cardMetadataLookup = cardMetadataLookup;
        this.shippingAmount = shippingAmount;
        this.processorId = processorId;
        this.externalCustomerId = externalCustomerId;
        }
}

  /**
   * Essential information about a payment card derived from its BIN/IIN.
   */
export class CardMetadata {

  /**
   * The brand or network of the card (e.g., Visa, Mastercard, Amex).
   */
    cardBrand: string | null = null;

  /**
   * The name of the financial institution that issued the card.
   */
    issuerName: string | null = null;

  /**
   * Whether the card supports Level 3 processing for detailed transaction data.
   */
    l3: boolean | null = null;

  /**
   * Whether the card supports Level 2 processing for additional transaction data.
   */
    l2: boolean | null = null;

  /**
   * The general category or type of the card product.
   */
    productType: string | null = null;

  /**
   * The specific name or designation of the card product.
   */
    productName: string | null = null;

  /**
   * Whether the card is an Electronic Benefit Transfer (EBT) card.
   */
    ebt: boolean | null = null;

  /**
   * Whether the card is a debit card.
   */
    debit: boolean | null = null;

  /**
   * Whether the card is a healthcare-specific payment card.
   */
    healthcare: boolean | null = null;

  /**
   * Whether the card is a prepaid card.
   */
    prepaid: boolean | null = null;

  /**
   * The geographical region associated with the card's issuer.
   */
    region: string | null = null;

  /**
   * The country associated with the card's issuer.
   */
    country: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        cardBrand: string | null = null,
        issuerName: string | null = null,
        l3: boolean | null = null,
        l2: boolean | null = null,
        productType: string | null = null,
        productName: string | null = null,
        ebt: boolean | null = null,
        debit: boolean | null = null,
        healthcare: boolean | null = null,
        prepaid: boolean | null = null,
        region: string | null = null,
        country: string | null = null,
        ) {
        this.cardBrand = cardBrand;
        this.issuerName = issuerName;
        this.l3 = l3;
        this.l2 = l2;
        this.productType = productType;
        this.productName = productName;
        this.ebt = ebt;
        this.debit = debit;
        this.healthcare = healthcare;
        this.prepaid = prepaid;
        this.region = region;
        this.country = country;
        }
}

  /**
   * Retrieves card metadata.
   */
export class CardMetadataRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The payment token to be used for this transaction. This should be used for recurring
   * transactions.
   */
    token?: string;

  /**
   * Track 1 magnetic stripe data.
   */
    track1?: string;

  /**
   * Track 2 magnetic stripe data.
   */
    track2?: string;

  /**
   * The primary account number. We recommend using the terminal or e-commerce
   * tokenization libraries instead of passing account numbers in directly, as this
   * would put your application in PCI scope.
   */
    pan?: string;

  /**
   * The ACH routing number for ACH transactions.
   */
    routingNumber?: string;

  /**
   * The cardholder name. Only required if the request includes a primary account number
   * or track data.
   */
    cardholderName?: string;

  /**
   * The card expiration month for use with PAN based transactions.
   */
    expMonth?: string;

  /**
   * The card expiration year for use with PAN based transactions.
   */
    expYear?: string;

  /**
   * The card CVV for use with PAN based transactions.
   */
    cvv?: string;

  /**
   * The cardholder address for use with address verification.
   */
    address?: string;

  /**
   * The cardholder postal code for use with address verification.
   */
    postalCode?: string;

  /**
   * That the payment entry method is a manual keyed transaction. If this is true, no other
   * payment method will be accepted.
   */
    manualEntry?: boolean;

  /**
   * The key serial number used for DUKPT encryption.
   */
    ksn?: string;

  /**
   * The encrypted pin block.
   */
    pinBlock?: string;

  /**
   * Designates categories of cards: credit, debit, EBT.
   */
    cardType?: CardType;

  /**
   * Designates brands of payment methods: Visa, Discover, etc.
   */
    paymentType?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

  /**
   * Marks a transaction as HSA/FSA.
   */
    healthcare?: boolean;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        token: string | undefined = undefined,
        track1: string | undefined = undefined,
        track2: string | undefined = undefined,
        pan: string | undefined = undefined,
        routingNumber: string | undefined = undefined,
        cardholderName: string | undefined = undefined,
        expMonth: string | undefined = undefined,
        expYear: string | undefined = undefined,
        cvv: string | undefined = undefined,
        address: string | undefined = undefined,
        postalCode: string | undefined = undefined,
        manualEntry: boolean = false,
        ksn: string | undefined = undefined,
        pinBlock: string | undefined = undefined,
        cardType: CardType | undefined = undefined,
        paymentType: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        healthcare: boolean = false,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.token = token;
        this.track1 = track1;
        this.track2 = track2;
        this.pan = pan;
        this.routingNumber = routingNumber;
        this.cardholderName = cardholderName;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.cvv = cvv;
        this.address = address;
        this.postalCode = postalCode;
        this.manualEntry = manualEntry;
        this.ksn = ksn;
        this.pinBlock = pinBlock;
        this.cardType = cardType;
        this.paymentType = paymentType;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        this.healthcare = healthcare;
        }
}

  /**
   * The response to a card metadata request.
   */
export class CardMetadataResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The payment token, if the payment was enrolled in the vault.
   */
    token?: string;

  /**
   * The entry method for the transaction (CHIP, MSR, KEYED, etc).
   */
    entryMethod?: string;

  /**
   * The card brand (VISA, MC, AMEX, DEBIT, etc).
   */
    paymentType?: string;

  /**
   * Provides network level detail on how a transaction was routed, especially for debit
   * transactions.
   */
    network?: string;

  /**
   * Identifies the card association based on bin number. Used primarily used to indicate
   * the major logo on a card, even when debit transactions are routed on a different
   * network.
   */
    logo?: string;

  /**
   * The masked primary account number.
   */
    maskedPan?: string;

  /**
   * The BlockChyp public key if the user presented a BlockChyp payment card.
   */
    publicKey?: string;

  /**
   * That the transaction did something that would put the system in PCI scope.
   */
    ScopeAlert?: boolean;

  /**
   * The cardholder name.
   */
    cardHolder?: string;

  /**
   * The card expiration month in MM format.
   */
    expMonth?: string;

  /**
   * The card expiration year in YY format.
   */
    expYear?: string;

  /**
   * Address verification results if address information was submitted.
   */
    avsResponse: AVSResponse | null = null;

  /**
   * The CVV verification result if CVV was submitted.
   */
    cvvResponse?: string;

  /**
   * Suggested receipt fields.
   */
    receiptSuggestions: ReceiptSuggestions | null = null;

  /**
   * Customer data, if any. Preserved for reverse compatibility.
   */
    customer?: Customer;

  /**
   * Customer data, if any.
   */
    customers: Customer[] | null = null;

  /**
   * Details about a payment card derived from its BIN/IIN.
   */
    cardMetadata?: CardMetadata;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        token: string | undefined = undefined,
        entryMethod: string | undefined = undefined,
        paymentType: string | undefined = undefined,
        network: string | undefined = undefined,
        logo: string | undefined = undefined,
        maskedPan: string | undefined = undefined,
        publicKey: string | undefined = undefined,
        ScopeAlert: boolean = false,
        cardHolder: string | undefined = undefined,
        expMonth: string | undefined = undefined,
        expYear: string | undefined = undefined,
        avsResponse: AVSResponse | null = null,
        cvvResponse: string | undefined = undefined,
        receiptSuggestions: ReceiptSuggestions | null = null,
        customer: Customer | undefined = undefined,
        customers: Customer[] | null = null,
        cardMetadata: CardMetadata | undefined = undefined,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.token = token;
        this.entryMethod = entryMethod;
        this.paymentType = paymentType;
        this.network = network;
        this.logo = logo;
        this.maskedPan = maskedPan;
        this.publicKey = publicKey;
        this.ScopeAlert = ScopeAlert;
        this.cardHolder = cardHolder;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.avsResponse = avsResponse;
        this.cvvResponse = cvvResponse;
        this.receiptSuggestions = receiptSuggestions;
        this.customer = customer;
        this.customers = customers;
        this.cardMetadata = cardMetadata;
        }
}

  /**
   * A request for the remaining balance on a payment type.
   */
export class BalanceRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The payment token to be used for this transaction. This should be used for recurring
   * transactions.
   */
    token?: string;

  /**
   * Track 1 magnetic stripe data.
   */
    track1?: string;

  /**
   * Track 2 magnetic stripe data.
   */
    track2?: string;

  /**
   * The primary account number. We recommend using the terminal or e-commerce
   * tokenization libraries instead of passing account numbers in directly, as this
   * would put your application in PCI scope.
   */
    pan?: string;

  /**
   * The ACH routing number for ACH transactions.
   */
    routingNumber?: string;

  /**
   * The cardholder name. Only required if the request includes a primary account number
   * or track data.
   */
    cardholderName?: string;

  /**
   * The card expiration month for use with PAN based transactions.
   */
    expMonth?: string;

  /**
   * The card expiration year for use with PAN based transactions.
   */
    expYear?: string;

  /**
   * The card CVV for use with PAN based transactions.
   */
    cvv?: string;

  /**
   * The cardholder address for use with address verification.
   */
    address?: string;

  /**
   * The cardholder postal code for use with address verification.
   */
    postalCode?: string;

  /**
   * That the payment entry method is a manual keyed transaction. If this is true, no other
   * payment method will be accepted.
   */
    manualEntry?: boolean;

  /**
   * The key serial number used for DUKPT encryption.
   */
    ksn?: string;

  /**
   * The encrypted pin block.
   */
    pinBlock?: string;

  /**
   * Designates categories of cards: credit, debit, EBT.
   */
    cardType?: CardType;

  /**
   * Designates brands of payment methods: Visa, Discover, etc.
   */
    paymentType?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        token: string | undefined = undefined,
        track1: string | undefined = undefined,
        track2: string | undefined = undefined,
        pan: string | undefined = undefined,
        routingNumber: string | undefined = undefined,
        cardholderName: string | undefined = undefined,
        expMonth: string | undefined = undefined,
        expYear: string | undefined = undefined,
        cvv: string | undefined = undefined,
        address: string | undefined = undefined,
        postalCode: string | undefined = undefined,
        manualEntry: boolean = false,
        ksn: string | undefined = undefined,
        pinBlock: string | undefined = undefined,
        cardType: CardType | undefined = undefined,
        paymentType: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.token = token;
        this.track1 = track1;
        this.track2 = track2;
        this.pan = pan;
        this.routingNumber = routingNumber;
        this.cardholderName = cardholderName;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.cvv = cvv;
        this.address = address;
        this.postalCode = postalCode;
        this.manualEntry = manualEntry;
        this.ksn = ksn;
        this.pinBlock = pinBlock;
        this.cardType = cardType;
        this.paymentType = paymentType;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        }
}

  /**
   * The response to a balance request.
   */
export class BalanceResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The ID assigned to the transaction.
   */
    transactionId: string | null = null;

  /**
   * The ID assigned to the batch.
   */
    batchId?: string;

  /**
   * The transaction reference string assigned to the transaction request. If no
   * transaction ref was assiged on the request, then the gateway will randomly generate
   * one.
   */
    transactionRef?: string;

  /**
   * The type of transaction.
   */
    transactionType: string | null = null;

  /**
   * The timestamp of the transaction.
   */
    timestamp: string | null = null;

  /**
   * The hash of the last tick block.
   */
    tickBlock: string | null = null;

  /**
   * That the transaction was processed on the test gateway.
   */
    test: boolean | null = null;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * The ECC signature of the response. Can be used to ensure that it was signed by the
   * terminal and detect man-in-the middle attacks.
   */
    sig?: string;

  /**
   * The payment token, if the payment was enrolled in the vault.
   */
    token?: string;

  /**
   * The entry method for the transaction (CHIP, MSR, KEYED, etc).
   */
    entryMethod?: string;

  /**
   * The card brand (VISA, MC, AMEX, DEBIT, etc).
   */
    paymentType?: string;

  /**
   * Provides network level detail on how a transaction was routed, especially for debit
   * transactions.
   */
    network?: string;

  /**
   * Identifies the card association based on bin number. Used primarily used to indicate
   * the major logo on a card, even when debit transactions are routed on a different
   * network.
   */
    logo?: string;

  /**
   * The masked primary account number.
   */
    maskedPan?: string;

  /**
   * The BlockChyp public key if the user presented a BlockChyp payment card.
   */
    publicKey?: string;

  /**
   * That the transaction did something that would put the system in PCI scope.
   */
    ScopeAlert?: boolean;

  /**
   * The cardholder name.
   */
    cardHolder?: string;

  /**
   * The card expiration month in MM format.
   */
    expMonth?: string;

  /**
   * The card expiration year in YY format.
   */
    expYear?: string;

  /**
   * Address verification results if address information was submitted.
   */
    avsResponse: AVSResponse | null = null;

  /**
   * The CVV verification result if CVV was submitted.
   */
    cvvResponse?: string;

  /**
   * Suggested receipt fields.
   */
    receiptSuggestions: ReceiptSuggestions | null = null;

  /**
   * Customer data, if any. Preserved for reverse compatibility.
   */
    customer?: Customer;

  /**
   * Customer data, if any.
   */
    customers: Customer[] | null = null;

  /**
   * Remaining balance on the payment method.
   */
    remainingBalance?: string;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        transactionId: string | null = null,
        batchId: string | undefined = undefined,
        transactionRef: string | undefined = undefined,
        transactionType: string | null = null,
        timestamp: string | null = null,
        tickBlock: string | null = null,
        test: boolean | null = null,
        destinationAccount: string | undefined = undefined,
        sig: string | undefined = undefined,
        token: string | undefined = undefined,
        entryMethod: string | undefined = undefined,
        paymentType: string | undefined = undefined,
        network: string | undefined = undefined,
        logo: string | undefined = undefined,
        maskedPan: string | undefined = undefined,
        publicKey: string | undefined = undefined,
        ScopeAlert: boolean = false,
        cardHolder: string | undefined = undefined,
        expMonth: string | undefined = undefined,
        expYear: string | undefined = undefined,
        avsResponse: AVSResponse | null = null,
        cvvResponse: string | undefined = undefined,
        receiptSuggestions: ReceiptSuggestions | null = null,
        customer: Customer | undefined = undefined,
        customers: Customer[] | null = null,
        remainingBalance: string | undefined = undefined,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.transactionId = transactionId;
        this.batchId = batchId;
        this.transactionRef = transactionRef;
        this.transactionType = transactionType;
        this.timestamp = timestamp;
        this.tickBlock = tickBlock;
        this.test = test;
        this.destinationAccount = destinationAccount;
        this.sig = sig;
        this.token = token;
        this.entryMethod = entryMethod;
        this.paymentType = paymentType;
        this.network = network;
        this.logo = logo;
        this.maskedPan = maskedPan;
        this.publicKey = publicKey;
        this.ScopeAlert = ScopeAlert;
        this.cardHolder = cardHolder;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.avsResponse = avsResponse;
        this.cvvResponse = cvvResponse;
        this.receiptSuggestions = receiptSuggestions;
        this.customer = customer;
        this.customers = customers;
        this.remainingBalance = remainingBalance;
        }
}

  /**
   * A refund request.
   */
export class RefundRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The payment token to be used for this transaction. This should be used for recurring
   * transactions.
   */
    token?: string;

  /**
   * Track 1 magnetic stripe data.
   */
    track1?: string;

  /**
   * Track 2 magnetic stripe data.
   */
    track2?: string;

  /**
   * The primary account number. We recommend using the terminal or e-commerce
   * tokenization libraries instead of passing account numbers in directly, as this
   * would put your application in PCI scope.
   */
    pan?: string;

  /**
   * The ACH routing number for ACH transactions.
   */
    routingNumber?: string;

  /**
   * The cardholder name. Only required if the request includes a primary account number
   * or track data.
   */
    cardholderName?: string;

  /**
   * The card expiration month for use with PAN based transactions.
   */
    expMonth?: string;

  /**
   * The card expiration year for use with PAN based transactions.
   */
    expYear?: string;

  /**
   * The card CVV for use with PAN based transactions.
   */
    cvv?: string;

  /**
   * The cardholder address for use with address verification.
   */
    address?: string;

  /**
   * The cardholder postal code for use with address verification.
   */
    postalCode?: string;

  /**
   * That the payment entry method is a manual keyed transaction. If this is true, no other
   * payment method will be accepted.
   */
    manualEntry?: boolean;

  /**
   * The key serial number used for DUKPT encryption.
   */
    ksn?: string;

  /**
   * The encrypted pin block.
   */
    pinBlock?: string;

  /**
   * Designates categories of cards: credit, debit, EBT.
   */
    cardType?: CardType;

  /**
   * Designates brands of payment methods: Visa, Discover, etc.
   */
    paymentType?: string;

  /**
   * The ID of the previous transaction being referenced.
   */
    transactionId: string | null = null;

  /**
   * The transaction currency code.
   */
    currencyCode: string | null = null;

  /**
   * The requested amount.
   */
    amount: string | null = null;

  /**
   * That the request is tax exempt. Only required for tax exempt level 2 processing.
   */
    taxExempt: boolean | null = null;

  /**
   * A flag to add a surcharge to the transaction to cover credit card fees, if permitted.
   */
    surcharge: boolean | null = null;

  /**
   * A flag that applies a discount to negate the surcharge for debit transactions or other
   * surcharge ineligible payment methods.
   */
    cashDiscount: boolean | null = null;

  /**
   * A location on the filesystem which a customer signature should be written to.
   */
    sigFile?: string;

  /**
   * The image format to be used for returning signatures.
   */
    sigFormat?: SignatureFormat;

  /**
   * The width that the signature image should be scaled to, preserving the aspect ratio.
   * If not provided, the signature is returned in the terminal's max resolution.
   */
    sigWidth?: number;

  /**
   * Whether or not signature prompt should be skipped on the terminal. The terminal will
   * indicate whether or not a signature is required by the card in the receipt suggestions
   * response.
   */
    disableSignature?: boolean;

  /**
   * The tip amount.
   */
    tipAmount?: string;

  /**
   * The tax amount.
   */
    taxAmount?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

  /**
   * Details for HSA/FSA transactions.
   */
    healthcareMetadata?: HealthcareMetadata;

  /**
   * Instructs the terminal to simulate a post auth chip rejection that would trigger an
   * automatic reversal.
   */
    simulateChipRejection?: boolean;

  /**
   * Instructs the terminal to simulate an out of order automatic reversal.
   */
    simulateOutOfOrderReversal?: boolean;

  /**
   * Causes auto-reversals on the terminal to be executed asyncronously. Use with
   * caution and in conjunction with the transaction status API.
   */
    asyncReversals?: boolean;

  /**
   * Manually sets the CIT (Customer Initiated Transaction) flag.
   */
    cit?: boolean;

  /**
   * Manually sets the MIT (Merchant Initiated Transaction) flag.
   */
    mit?: boolean;

  /**
   * That this transaction will include a card metadata lookup.
   */
    cardMetadataLookup?: boolean;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        token: string | undefined = undefined,
        track1: string | undefined = undefined,
        track2: string | undefined = undefined,
        pan: string | undefined = undefined,
        routingNumber: string | undefined = undefined,
        cardholderName: string | undefined = undefined,
        expMonth: string | undefined = undefined,
        expYear: string | undefined = undefined,
        cvv: string | undefined = undefined,
        address: string | undefined = undefined,
        postalCode: string | undefined = undefined,
        manualEntry: boolean = false,
        ksn: string | undefined = undefined,
        pinBlock: string | undefined = undefined,
        cardType: CardType | undefined = undefined,
        paymentType: string | undefined = undefined,
        transactionId: string | null = null,
        currencyCode: string | null = null,
        amount: string | null = null,
        taxExempt: boolean | null = null,
        surcharge: boolean | null = null,
        cashDiscount: boolean | null = null,
        sigFile: string | undefined = undefined,
        sigFormat: SignatureFormat | undefined = undefined,
        sigWidth: number = 0,
        disableSignature: boolean = false,
        tipAmount: string | undefined = undefined,
        taxAmount: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        healthcareMetadata: HealthcareMetadata | undefined = undefined,
        simulateChipRejection: boolean = false,
        simulateOutOfOrderReversal: boolean = false,
        asyncReversals: boolean = false,
        cit: boolean = false,
        mit: boolean = false,
        cardMetadataLookup: boolean = false,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.token = token;
        this.track1 = track1;
        this.track2 = track2;
        this.pan = pan;
        this.routingNumber = routingNumber;
        this.cardholderName = cardholderName;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.cvv = cvv;
        this.address = address;
        this.postalCode = postalCode;
        this.manualEntry = manualEntry;
        this.ksn = ksn;
        this.pinBlock = pinBlock;
        this.cardType = cardType;
        this.paymentType = paymentType;
        this.transactionId = transactionId;
        this.currencyCode = currencyCode;
        this.amount = amount;
        this.taxExempt = taxExempt;
        this.surcharge = surcharge;
        this.cashDiscount = cashDiscount;
        this.sigFile = sigFile;
        this.sigFormat = sigFormat;
        this.sigWidth = sigWidth;
        this.disableSignature = disableSignature;
        this.tipAmount = tipAmount;
        this.taxAmount = taxAmount;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        this.healthcareMetadata = healthcareMetadata;
        this.simulateChipRejection = simulateChipRejection;
        this.simulateOutOfOrderReversal = simulateOutOfOrderReversal;
        this.asyncReversals = asyncReversals;
        this.cit = cit;
        this.mit = mit;
        this.cardMetadataLookup = cardMetadataLookup;
        }
}

  /**
   * The information needed to capture a preauth.
   */
export class CaptureRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The ID of the previous transaction being referenced.
   */
    transactionId: string | null = null;

  /**
   * The transaction currency code.
   */
    currencyCode: string | null = null;

  /**
   * The requested amount.
   */
    amount: string | null = null;

  /**
   * That the request is tax exempt. Only required for tax exempt level 2 processing.
   */
    taxExempt: boolean | null = null;

  /**
   * A flag to add a surcharge to the transaction to cover credit card fees, if permitted.
   */
    surcharge: boolean | null = null;

  /**
   * A flag that applies a discount to negate the surcharge for debit transactions or other
   * surcharge ineligible payment methods.
   */
    cashDiscount: boolean | null = null;

  /**
   * The tip amount.
   */
    tipAmount?: string;

  /**
   * The tax amount.
   */
    taxAmount?: string;

  /**
   * The number of shipments the original authorization will be broken into.
   */
    shipmentCount: number | null = null;

  /**
   * Which shipment this particular capture is for.
   */
    shipmentNumber: number | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        transactionId: string | null = null,
        currencyCode: string | null = null,
        amount: string | null = null,
        taxExempt: boolean | null = null,
        surcharge: boolean | null = null,
        cashDiscount: boolean | null = null,
        tipAmount: string | undefined = undefined,
        taxAmount: string | undefined = undefined,
        shipmentCount: number | null = null,
        shipmentNumber: number | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.transactionId = transactionId;
        this.currencyCode = currencyCode;
        this.amount = amount;
        this.taxExempt = taxExempt;
        this.surcharge = surcharge;
        this.cashDiscount = cashDiscount;
        this.tipAmount = tipAmount;
        this.taxAmount = taxAmount;
        this.shipmentCount = shipmentCount;
        this.shipmentNumber = shipmentNumber;
        }
}

  /**
   * The response to a capture request.
   */
export class CaptureResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * That the transaction was approved.
   */
    approved: boolean | null = null;

  /**
   * The auth code from the payment network.
   */
    authCode?: string;

  /**
   * The code returned by the terminal or the card issuer to indicate the disposition of the
   * message.
   */
    authResponseCode?: string;

  /**
   * The ID assigned to the transaction.
   */
    transactionId: string | null = null;

  /**
   * The ID assigned to the batch.
   */
    batchId?: string;

  /**
   * The transaction reference string assigned to the transaction request. If no
   * transaction ref was assiged on the request, then the gateway will randomly generate
   * one.
   */
    transactionRef?: string;

  /**
   * The type of transaction.
   */
    transactionType: string | null = null;

  /**
   * The timestamp of the transaction.
   */
    timestamp: string | null = null;

  /**
   * The hash of the last tick block.
   */
    tickBlock: string | null = null;

  /**
   * That the transaction was processed on the test gateway.
   */
    test: boolean | null = null;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * The ECC signature of the response. Can be used to ensure that it was signed by the
   * terminal and detect man-in-the middle attacks.
   */
    sig?: string;

  /**
   * Whether or not the transaction was approved for a partial amount.
   */
    partialAuth: boolean | null = null;

  /**
   * Whether or not an alternate currency was used.
   */
    altCurrency: boolean | null = null;

  /**
   * Whether or not a request was settled on an FSA card.
   */
    fsaAuth: boolean | null = null;

  /**
   * The currency code used for the transaction.
   */
    currencyCode: string | null = null;

  /**
   * The requested amount.
   */
    requestedAmount: string | null = null;

  /**
   * The authorized amount. May not match the requested amount in the event of a partial
   * auth.
   */
    authorizedAmount: string | null = null;

  /**
   * The remaining balance on the payment method.
   */
    remainingBalance: string | null = null;

  /**
   * The tip amount.
   */
    tipAmount: string | null = null;

  /**
   * The tax amount.
   */
    taxAmount: string | null = null;

  /**
   * The cash back amount the customer requested during the transaction.
   */
    requestedCashBackAmount: string | null = null;

  /**
   * The amount of cash back authorized by the gateway. This amount will be the entire
   * amount requested, or zero.
   */
    authorizedCashBackAmount: string | null = null;

  /**
   * The payment token, if the payment was enrolled in the vault.
   */
    token?: string;

  /**
   * The entry method for the transaction (CHIP, MSR, KEYED, etc).
   */
    entryMethod?: string;

  /**
   * The card brand (VISA, MC, AMEX, DEBIT, etc).
   */
    paymentType?: string;

  /**
   * Provides network level detail on how a transaction was routed, especially for debit
   * transactions.
   */
    network?: string;

  /**
   * Identifies the card association based on bin number. Used primarily used to indicate
   * the major logo on a card, even when debit transactions are routed on a different
   * network.
   */
    logo?: string;

  /**
   * The masked primary account number.
   */
    maskedPan?: string;

  /**
   * The BlockChyp public key if the user presented a BlockChyp payment card.
   */
    publicKey?: string;

  /**
   * That the transaction did something that would put the system in PCI scope.
   */
    ScopeAlert?: boolean;

  /**
   * The cardholder name.
   */
    cardHolder?: string;

  /**
   * The card expiration month in MM format.
   */
    expMonth?: string;

  /**
   * The card expiration year in YY format.
   */
    expYear?: string;

  /**
   * Address verification results if address information was submitted.
   */
    avsResponse: AVSResponse | null = null;

  /**
   * The CVV verification result if CVV was submitted.
   */
    cvvResponse?: string;

  /**
   * Suggested receipt fields.
   */
    receiptSuggestions: ReceiptSuggestions | null = null;

  /**
   * Customer data, if any. Preserved for reverse compatibility.
   */
    customer?: Customer;

  /**
   * Customer data, if any.
   */
    customers: Customer[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        approved: boolean | null = null,
        authCode: string | undefined = undefined,
        authResponseCode: string | undefined = undefined,
        transactionId: string | null = null,
        batchId: string | undefined = undefined,
        transactionRef: string | undefined = undefined,
        transactionType: string | null = null,
        timestamp: string | null = null,
        tickBlock: string | null = null,
        test: boolean | null = null,
        destinationAccount: string | undefined = undefined,
        sig: string | undefined = undefined,
        partialAuth: boolean | null = null,
        altCurrency: boolean | null = null,
        fsaAuth: boolean | null = null,
        currencyCode: string | null = null,
        requestedAmount: string | null = null,
        authorizedAmount: string | null = null,
        remainingBalance: string | null = null,
        tipAmount: string | null = null,
        taxAmount: string | null = null,
        requestedCashBackAmount: string | null = null,
        authorizedCashBackAmount: string | null = null,
        token: string | undefined = undefined,
        entryMethod: string | undefined = undefined,
        paymentType: string | undefined = undefined,
        network: string | undefined = undefined,
        logo: string | undefined = undefined,
        maskedPan: string | undefined = undefined,
        publicKey: string | undefined = undefined,
        ScopeAlert: boolean = false,
        cardHolder: string | undefined = undefined,
        expMonth: string | undefined = undefined,
        expYear: string | undefined = undefined,
        avsResponse: AVSResponse | null = null,
        cvvResponse: string | undefined = undefined,
        receiptSuggestions: ReceiptSuggestions | null = null,
        customer: Customer | undefined = undefined,
        customers: Customer[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.approved = approved;
        this.authCode = authCode;
        this.authResponseCode = authResponseCode;
        this.transactionId = transactionId;
        this.batchId = batchId;
        this.transactionRef = transactionRef;
        this.transactionType = transactionType;
        this.timestamp = timestamp;
        this.tickBlock = tickBlock;
        this.test = test;
        this.destinationAccount = destinationAccount;
        this.sig = sig;
        this.partialAuth = partialAuth;
        this.altCurrency = altCurrency;
        this.fsaAuth = fsaAuth;
        this.currencyCode = currencyCode;
        this.requestedAmount = requestedAmount;
        this.authorizedAmount = authorizedAmount;
        this.remainingBalance = remainingBalance;
        this.tipAmount = tipAmount;
        this.taxAmount = taxAmount;
        this.requestedCashBackAmount = requestedCashBackAmount;
        this.authorizedCashBackAmount = authorizedCashBackAmount;
        this.token = token;
        this.entryMethod = entryMethod;
        this.paymentType = paymentType;
        this.network = network;
        this.logo = logo;
        this.maskedPan = maskedPan;
        this.publicKey = publicKey;
        this.ScopeAlert = ScopeAlert;
        this.cardHolder = cardHolder;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.avsResponse = avsResponse;
        this.cvvResponse = cvvResponse;
        this.receiptSuggestions = receiptSuggestions;
        this.customer = customer;
        this.customers = customers;
        }
}

  /**
   * A void request.
   */
export class VoidRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The ID of the previous transaction being referenced.
   */
    transactionId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        transactionId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.transactionId = transactionId;
        }
}

  /**
   * The response to a void request.
   */
export class VoidResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * That the transaction was approved.
   */
    approved: boolean | null = null;

  /**
   * The auth code from the payment network.
   */
    authCode?: string;

  /**
   * The code returned by the terminal or the card issuer to indicate the disposition of the
   * message.
   */
    authResponseCode?: string;

  /**
   * The ID assigned to the transaction.
   */
    transactionId: string | null = null;

  /**
   * The ID assigned to the batch.
   */
    batchId?: string;

  /**
   * The transaction reference string assigned to the transaction request. If no
   * transaction ref was assiged on the request, then the gateway will randomly generate
   * one.
   */
    transactionRef?: string;

  /**
   * The type of transaction.
   */
    transactionType: string | null = null;

  /**
   * The timestamp of the transaction.
   */
    timestamp: string | null = null;

  /**
   * The hash of the last tick block.
   */
    tickBlock: string | null = null;

  /**
   * That the transaction was processed on the test gateway.
   */
    test: boolean | null = null;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * The ECC signature of the response. Can be used to ensure that it was signed by the
   * terminal and detect man-in-the middle attacks.
   */
    sig?: string;

  /**
   * The payment token, if the payment was enrolled in the vault.
   */
    token?: string;

  /**
   * The entry method for the transaction (CHIP, MSR, KEYED, etc).
   */
    entryMethod?: string;

  /**
   * The card brand (VISA, MC, AMEX, DEBIT, etc).
   */
    paymentType?: string;

  /**
   * Provides network level detail on how a transaction was routed, especially for debit
   * transactions.
   */
    network?: string;

  /**
   * Identifies the card association based on bin number. Used primarily used to indicate
   * the major logo on a card, even when debit transactions are routed on a different
   * network.
   */
    logo?: string;

  /**
   * The masked primary account number.
   */
    maskedPan?: string;

  /**
   * The BlockChyp public key if the user presented a BlockChyp payment card.
   */
    publicKey?: string;

  /**
   * That the transaction did something that would put the system in PCI scope.
   */
    ScopeAlert?: boolean;

  /**
   * The cardholder name.
   */
    cardHolder?: string;

  /**
   * The card expiration month in MM format.
   */
    expMonth?: string;

  /**
   * The card expiration year in YY format.
   */
    expYear?: string;

  /**
   * Address verification results if address information was submitted.
   */
    avsResponse: AVSResponse | null = null;

  /**
   * The CVV verification result if CVV was submitted.
   */
    cvvResponse?: string;

  /**
   * Suggested receipt fields.
   */
    receiptSuggestions: ReceiptSuggestions | null = null;

  /**
   * Customer data, if any. Preserved for reverse compatibility.
   */
    customer?: Customer;

  /**
   * Customer data, if any.
   */
    customers: Customer[] | null = null;

  /**
   * The hex encoded signature data.
   */
    sigFile?: string;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        approved: boolean | null = null,
        authCode: string | undefined = undefined,
        authResponseCode: string | undefined = undefined,
        transactionId: string | null = null,
        batchId: string | undefined = undefined,
        transactionRef: string | undefined = undefined,
        transactionType: string | null = null,
        timestamp: string | null = null,
        tickBlock: string | null = null,
        test: boolean | null = null,
        destinationAccount: string | undefined = undefined,
        sig: string | undefined = undefined,
        token: string | undefined = undefined,
        entryMethod: string | undefined = undefined,
        paymentType: string | undefined = undefined,
        network: string | undefined = undefined,
        logo: string | undefined = undefined,
        maskedPan: string | undefined = undefined,
        publicKey: string | undefined = undefined,
        ScopeAlert: boolean = false,
        cardHolder: string | undefined = undefined,
        expMonth: string | undefined = undefined,
        expYear: string | undefined = undefined,
        avsResponse: AVSResponse | null = null,
        cvvResponse: string | undefined = undefined,
        receiptSuggestions: ReceiptSuggestions | null = null,
        customer: Customer | undefined = undefined,
        customers: Customer[] | null = null,
        sigFile: string | undefined = undefined,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.approved = approved;
        this.authCode = authCode;
        this.authResponseCode = authResponseCode;
        this.transactionId = transactionId;
        this.batchId = batchId;
        this.transactionRef = transactionRef;
        this.transactionType = transactionType;
        this.timestamp = timestamp;
        this.tickBlock = tickBlock;
        this.test = test;
        this.destinationAccount = destinationAccount;
        this.sig = sig;
        this.token = token;
        this.entryMethod = entryMethod;
        this.paymentType = paymentType;
        this.network = network;
        this.logo = logo;
        this.maskedPan = maskedPan;
        this.publicKey = publicKey;
        this.ScopeAlert = ScopeAlert;
        this.cardHolder = cardHolder;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.avsResponse = avsResponse;
        this.cvvResponse = cvvResponse;
        this.receiptSuggestions = receiptSuggestions;
        this.customer = customer;
        this.customers = customers;
        this.sigFile = sigFile;
        }
}

  /**
   * The information needed to enroll a new payment method in the token vault.
   */
export class EnrollRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The payment token to be used for this transaction. This should be used for recurring
   * transactions.
   */
    token?: string;

  /**
   * Track 1 magnetic stripe data.
   */
    track1?: string;

  /**
   * Track 2 magnetic stripe data.
   */
    track2?: string;

  /**
   * The primary account number. We recommend using the terminal or e-commerce
   * tokenization libraries instead of passing account numbers in directly, as this
   * would put your application in PCI scope.
   */
    pan?: string;

  /**
   * The ACH routing number for ACH transactions.
   */
    routingNumber?: string;

  /**
   * The cardholder name. Only required if the request includes a primary account number
   * or track data.
   */
    cardholderName?: string;

  /**
   * The card expiration month for use with PAN based transactions.
   */
    expMonth?: string;

  /**
   * The card expiration year for use with PAN based transactions.
   */
    expYear?: string;

  /**
   * The card CVV for use with PAN based transactions.
   */
    cvv?: string;

  /**
   * The cardholder address for use with address verification.
   */
    address?: string;

  /**
   * The cardholder postal code for use with address verification.
   */
    postalCode?: string;

  /**
   * That the payment entry method is a manual keyed transaction. If this is true, no other
   * payment method will be accepted.
   */
    manualEntry?: boolean;

  /**
   * The key serial number used for DUKPT encryption.
   */
    ksn?: string;

  /**
   * The encrypted pin block.
   */
    pinBlock?: string;

  /**
   * Designates categories of cards: credit, debit, EBT.
   */
    cardType?: CardType;

  /**
   * Designates brands of payment methods: Visa, Discover, etc.
   */
    paymentType?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

  /**
   * The method by which the payment card was entered (MSR, CHIP, KEYED, etc.).
   */
    entryMethod?: string;

  /**
   * Customer with which the new token should be associated.
   */
    customer?: Customer;

  /**
   * That this transaction should be treated as a recurring transaction.
   */
    recurring?: boolean;

  /**
   * That this transaction and any using this token should be treated as a subscription
   * recurring transaction.
   */
    subscription?: boolean;

  /**
   * That this transaction will include a card metadata lookup.
   */
    cardMetadataLookup?: boolean;

  /**
   * The type of account (checking, savings, etc) for an ACH payment method.
   */
    accountType?: string;

  /**
   * The type of account holder (personal, business, etc) for an ACH payment method.
   */
    accountHolderType?: string;

  /**
   * The bank name for an ACH payment method.
   */
    bankName?: string;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        token: string | undefined = undefined,
        track1: string | undefined = undefined,
        track2: string | undefined = undefined,
        pan: string | undefined = undefined,
        routingNumber: string | undefined = undefined,
        cardholderName: string | undefined = undefined,
        expMonth: string | undefined = undefined,
        expYear: string | undefined = undefined,
        cvv: string | undefined = undefined,
        address: string | undefined = undefined,
        postalCode: string | undefined = undefined,
        manualEntry: boolean = false,
        ksn: string | undefined = undefined,
        pinBlock: string | undefined = undefined,
        cardType: CardType | undefined = undefined,
        paymentType: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        entryMethod: string | undefined = undefined,
        customer: Customer | undefined = undefined,
        recurring: boolean = false,
        subscription: boolean = false,
        cardMetadataLookup: boolean = false,
        accountType: string | undefined = undefined,
        accountHolderType: string | undefined = undefined,
        bankName: string | undefined = undefined,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.token = token;
        this.track1 = track1;
        this.track2 = track2;
        this.pan = pan;
        this.routingNumber = routingNumber;
        this.cardholderName = cardholderName;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.cvv = cvv;
        this.address = address;
        this.postalCode = postalCode;
        this.manualEntry = manualEntry;
        this.ksn = ksn;
        this.pinBlock = pinBlock;
        this.cardType = cardType;
        this.paymentType = paymentType;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        this.entryMethod = entryMethod;
        this.customer = customer;
        this.recurring = recurring;
        this.subscription = subscription;
        this.cardMetadataLookup = cardMetadataLookup;
        this.accountType = accountType;
        this.accountHolderType = accountHolderType;
        this.bankName = bankName;
        }
}

  /**
   * The response to an enroll request.
   */
export class EnrollResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * That the transaction was approved.
   */
    approved: boolean | null = null;

  /**
   * The auth code from the payment network.
   */
    authCode?: string;

  /**
   * The code returned by the terminal or the card issuer to indicate the disposition of the
   * message.
   */
    authResponseCode?: string;

  /**
   * The ID assigned to the transaction.
   */
    transactionId: string | null = null;

  /**
   * The ID assigned to the batch.
   */
    batchId?: string;

  /**
   * The transaction reference string assigned to the transaction request. If no
   * transaction ref was assiged on the request, then the gateway will randomly generate
   * one.
   */
    transactionRef?: string;

  /**
   * The type of transaction.
   */
    transactionType: string | null = null;

  /**
   * The timestamp of the transaction.
   */
    timestamp: string | null = null;

  /**
   * The hash of the last tick block.
   */
    tickBlock: string | null = null;

  /**
   * That the transaction was processed on the test gateway.
   */
    test: boolean | null = null;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * The ECC signature of the response. Can be used to ensure that it was signed by the
   * terminal and detect man-in-the middle attacks.
   */
    sig?: string;

  /**
   * The payment token, if the payment was enrolled in the vault.
   */
    token?: string;

  /**
   * The entry method for the transaction (CHIP, MSR, KEYED, etc).
   */
    entryMethod?: string;

  /**
   * The card brand (VISA, MC, AMEX, DEBIT, etc).
   */
    paymentType?: string;

  /**
   * Provides network level detail on how a transaction was routed, especially for debit
   * transactions.
   */
    network?: string;

  /**
   * Identifies the card association based on bin number. Used primarily used to indicate
   * the major logo on a card, even when debit transactions are routed on a different
   * network.
   */
    logo?: string;

  /**
   * The masked primary account number.
   */
    maskedPan?: string;

  /**
   * The BlockChyp public key if the user presented a BlockChyp payment card.
   */
    publicKey?: string;

  /**
   * That the transaction did something that would put the system in PCI scope.
   */
    ScopeAlert?: boolean;

  /**
   * The cardholder name.
   */
    cardHolder?: string;

  /**
   * The card expiration month in MM format.
   */
    expMonth?: string;

  /**
   * The card expiration year in YY format.
   */
    expYear?: string;

  /**
   * Address verification results if address information was submitted.
   */
    avsResponse: AVSResponse | null = null;

  /**
   * The CVV verification result if CVV was submitted.
   */
    cvvResponse?: string;

  /**
   * Suggested receipt fields.
   */
    receiptSuggestions: ReceiptSuggestions | null = null;

  /**
   * Customer data, if any. Preserved for reverse compatibility.
   */
    customer?: Customer;

  /**
   * Customer data, if any.
   */
    customers: Customer[] | null = null;

  /**
   * The hex encoded signature data.
   */
    sigFile?: string;

  /**
   * Details about a payment card derived from its BIN/IIN.
   */
    cardMetadata?: CardMetadata;

  /**
   * The type of account (checking, savings, etc) for an ACH payment method.
   */
    accountType?: string;

  /**
   * The type of account holder (personal, business, etc) for an ACH payment method.
   */
    accountHolderType?: string;

  /**
   * The bank name for an ACH payment method.
   */
    bankName?: string;

  /**
   * The token hash (generated with a static salt, Merchant ID, Registration Date and
   * PAN).
   */
    tokenHash?: string;

  /**
   * The first 8 digits of the card aka the BIN.
   */
    bin?: string;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        approved: boolean | null = null,
        authCode: string | undefined = undefined,
        authResponseCode: string | undefined = undefined,
        transactionId: string | null = null,
        batchId: string | undefined = undefined,
        transactionRef: string | undefined = undefined,
        transactionType: string | null = null,
        timestamp: string | null = null,
        tickBlock: string | null = null,
        test: boolean | null = null,
        destinationAccount: string | undefined = undefined,
        sig: string | undefined = undefined,
        token: string | undefined = undefined,
        entryMethod: string | undefined = undefined,
        paymentType: string | undefined = undefined,
        network: string | undefined = undefined,
        logo: string | undefined = undefined,
        maskedPan: string | undefined = undefined,
        publicKey: string | undefined = undefined,
        ScopeAlert: boolean = false,
        cardHolder: string | undefined = undefined,
        expMonth: string | undefined = undefined,
        expYear: string | undefined = undefined,
        avsResponse: AVSResponse | null = null,
        cvvResponse: string | undefined = undefined,
        receiptSuggestions: ReceiptSuggestions | null = null,
        customer: Customer | undefined = undefined,
        customers: Customer[] | null = null,
        sigFile: string | undefined = undefined,
        cardMetadata: CardMetadata | undefined = undefined,
        accountType: string | undefined = undefined,
        accountHolderType: string | undefined = undefined,
        bankName: string | undefined = undefined,
        tokenHash: string | undefined = undefined,
        bin: string | undefined = undefined,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.approved = approved;
        this.authCode = authCode;
        this.authResponseCode = authResponseCode;
        this.transactionId = transactionId;
        this.batchId = batchId;
        this.transactionRef = transactionRef;
        this.transactionType = transactionType;
        this.timestamp = timestamp;
        this.tickBlock = tickBlock;
        this.test = test;
        this.destinationAccount = destinationAccount;
        this.sig = sig;
        this.token = token;
        this.entryMethod = entryMethod;
        this.paymentType = paymentType;
        this.network = network;
        this.logo = logo;
        this.maskedPan = maskedPan;
        this.publicKey = publicKey;
        this.ScopeAlert = ScopeAlert;
        this.cardHolder = cardHolder;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.avsResponse = avsResponse;
        this.cvvResponse = cvvResponse;
        this.receiptSuggestions = receiptSuggestions;
        this.customer = customer;
        this.customers = customers;
        this.sigFile = sigFile;
        this.cardMetadata = cardMetadata;
        this.accountType = accountType;
        this.accountHolderType = accountHolderType;
        this.bankName = bankName;
        this.tokenHash = tokenHash;
        this.bin = bin;
        }
}

  /**
   * The information needed to enroll a new payment method in the token vault.
   */
export class ClearTerminalRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        }
}

  /**
   * The information needed to activate or recharge a gift card.
   */
export class GiftActivateRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The transaction currency code.
   */
    currencyCode: string | null = null;

  /**
   * The requested amount.
   */
    amount: string | null = null;

  /**
   * That the request is tax exempt. Only required for tax exempt level 2 processing.
   */
    taxExempt: boolean | null = null;

  /**
   * A flag to add a surcharge to the transaction to cover credit card fees, if permitted.
   */
    surcharge: boolean | null = null;

  /**
   * A flag that applies a discount to negate the surcharge for debit transactions or other
   * surcharge ineligible payment methods.
   */
    cashDiscount: boolean | null = null;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        currencyCode: string | null = null,
        amount: string | null = null,
        taxExempt: boolean | null = null,
        surcharge: boolean | null = null,
        cashDiscount: boolean | null = null,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.currencyCode = currencyCode;
        this.amount = amount;
        this.taxExempt = taxExempt;
        this.surcharge = surcharge;
        this.cashDiscount = cashDiscount;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        }
}

  /**
   * The response to a gift activate request.
   */
export class GiftActivateResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The ID assigned to the transaction.
   */
    transactionId: string | null = null;

  /**
   * The ID assigned to the batch.
   */
    batchId?: string;

  /**
   * The transaction reference string assigned to the transaction request. If no
   * transaction ref was assiged on the request, then the gateway will randomly generate
   * one.
   */
    transactionRef?: string;

  /**
   * The type of transaction.
   */
    transactionType: string | null = null;

  /**
   * The timestamp of the transaction.
   */
    timestamp: string | null = null;

  /**
   * The hash of the last tick block.
   */
    tickBlock: string | null = null;

  /**
   * That the transaction was processed on the test gateway.
   */
    test: boolean | null = null;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * The ECC signature of the response. Can be used to ensure that it was signed by the
   * terminal and detect man-in-the middle attacks.
   */
    sig?: string;

  /**
   * That the card was activated.
   */
    approved: boolean | null = null;

  /**
   * The amount of the transaction.
   */
    amount: string | null = null;

  /**
   * The current balance of the gift card.
   */
    currentBalance: string | null = null;

  /**
   * The currency code used for the transaction.
   */
    currencyCode: string | null = null;

  /**
   * The public key of the activated card.
   */
    publicKey: string | null = null;

  /**
   * The masked card identifier.
   */
    maskedPan?: string;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        transactionId: string | null = null,
        batchId: string | undefined = undefined,
        transactionRef: string | undefined = undefined,
        transactionType: string | null = null,
        timestamp: string | null = null,
        tickBlock: string | null = null,
        test: boolean | null = null,
        destinationAccount: string | undefined = undefined,
        sig: string | undefined = undefined,
        approved: boolean | null = null,
        amount: string | null = null,
        currentBalance: string | null = null,
        currencyCode: string | null = null,
        publicKey: string | null = null,
        maskedPan: string | undefined = undefined,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.transactionId = transactionId;
        this.batchId = batchId;
        this.transactionRef = transactionRef;
        this.transactionType = transactionType;
        this.timestamp = timestamp;
        this.tickBlock = tickBlock;
        this.test = test;
        this.destinationAccount = destinationAccount;
        this.sig = sig;
        this.approved = approved;
        this.amount = amount;
        this.currentBalance = currentBalance;
        this.currencyCode = currencyCode;
        this.publicKey = publicKey;
        this.maskedPan = maskedPan;
        }
}

  /**
   * The information needed to manually close a credit card batch.
   */
export class CloseBatchRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * Optional batch id.
   */
    batchId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        batchId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.batchId = batchId;
        }
}

  /**
   * The response to a close batch request.
   */
export class CloseBatchResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The ID assigned to the transaction.
   */
    transactionId: string | null = null;

  /**
   * The ID assigned to the batch.
   */
    batchId?: string;

  /**
   * The transaction reference string assigned to the transaction request. If no
   * transaction ref was assiged on the request, then the gateway will randomly generate
   * one.
   */
    transactionRef?: string;

  /**
   * The type of transaction.
   */
    transactionType: string | null = null;

  /**
   * The timestamp of the transaction.
   */
    timestamp: string | null = null;

  /**
   * The hash of the last tick block.
   */
    tickBlock: string | null = null;

  /**
   * That the transaction was processed on the test gateway.
   */
    test: boolean | null = null;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * The ECC signature of the response. Can be used to ensure that it was signed by the
   * terminal and detect man-in-the middle attacks.
   */
    sig?: string;

  /**
   * A collection of batches closed during the batch close operation.
   */
    batches: BatchSummary[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        transactionId: string | null = null,
        batchId: string | undefined = undefined,
        transactionRef: string | undefined = undefined,
        transactionType: string | null = null,
        timestamp: string | null = null,
        tickBlock: string | null = null,
        test: boolean | null = null,
        destinationAccount: string | undefined = undefined,
        sig: string | undefined = undefined,
        batches: BatchSummary[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.transactionId = transactionId;
        this.batchId = batchId;
        this.transactionRef = transactionRef;
        this.transactionType = transactionType;
        this.timestamp = timestamp;
        this.tickBlock = tickBlock;
        this.test = test;
        this.destinationAccount = destinationAccount;
        this.sig = sig;
        this.batches = batches;
        }
}

  /**
   * The fields needed for custom Terms and Conditions prompts.
   */
export class TermsAndConditionsRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The ID of the previous transaction being referenced.
   */
    transactionId: string | null = null;

  /**
   * A location on the filesystem which a customer signature should be written to.
   */
    sigFile?: string;

  /**
   * The image format to be used for returning signatures.
   */
    sigFormat?: SignatureFormat;

  /**
   * The width that the signature image should be scaled to, preserving the aspect ratio.
   * If not provided, the signature is returned in the terminal's max resolution.
   */
    sigWidth?: number;

  /**
   * Whether or not signature prompt should be skipped on the terminal. The terminal will
   * indicate whether or not a signature is required by the card in the receipt suggestions
   * response.
   */
    disableSignature?: boolean;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

  /**
   * An alias for a Terms and Conditions template configured in the BlockChyp dashboard.
   */
    tcAlias: string | null = null;

  /**
   * The name of the Terms and Conditions the user is accepting.
   */
    tcName: string | null = null;

  /**
   * The content of the terms and conditions that will be presented to the user.
   */
    tcContent: string | null = null;

  /**
   * A hash of the terms and conditions content that can be used for caching.
   */
    contentHash: string | null = null;

  /**
   * That a signature should be requested.
   */
    sigRequired: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        transactionId: string | null = null,
        sigFile: string | undefined = undefined,
        sigFormat: SignatureFormat | undefined = undefined,
        sigWidth: number = 0,
        disableSignature: boolean = false,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        tcAlias: string | null = null,
        tcName: string | null = null,
        tcContent: string | null = null,
        contentHash: string | null = null,
        sigRequired: boolean | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.transactionId = transactionId;
        this.sigFile = sigFile;
        this.sigFormat = sigFormat;
        this.sigWidth = sigWidth;
        this.disableSignature = disableSignature;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        this.tcAlias = tcAlias;
        this.tcName = tcName;
        this.tcContent = tcContent;
        this.contentHash = contentHash;
        this.sigRequired = sigRequired;
        }
}

  /**
   * A signature capture response for Terms and Conditions.
   */
export class TermsAndConditionsResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The ID assigned to the transaction.
   */
    transactionId: string | null = null;

  /**
   * The ID assigned to the batch.
   */
    batchId?: string;

  /**
   * The transaction reference string assigned to the transaction request. If no
   * transaction ref was assiged on the request, then the gateway will randomly generate
   * one.
   */
    transactionRef?: string;

  /**
   * The type of transaction.
   */
    transactionType: string | null = null;

  /**
   * The timestamp of the transaction.
   */
    timestamp: string | null = null;

  /**
   * The hash of the last tick block.
   */
    tickBlock: string | null = null;

  /**
   * That the transaction was processed on the test gateway.
   */
    test: boolean | null = null;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * The ECC signature of the response. Can be used to ensure that it was signed by the
   * terminal and detect man-in-the middle attacks.
   */
    sig?: string;

  /**
   * The hex encoded signature data.
   */
    sigFile?: string;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        transactionId: string | null = null,
        batchId: string | undefined = undefined,
        transactionRef: string | undefined = undefined,
        transactionType: string | null = null,
        timestamp: string | null = null,
        tickBlock: string | null = null,
        test: boolean | null = null,
        destinationAccount: string | undefined = undefined,
        sig: string | undefined = undefined,
        sigFile: string | undefined = undefined,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.transactionId = transactionId;
        this.batchId = batchId;
        this.transactionRef = transactionRef;
        this.transactionType = transactionType;
        this.timestamp = timestamp;
        this.tickBlock = tickBlock;
        this.test = test;
        this.destinationAccount = destinationAccount;
        this.sig = sig;
        this.sigFile = sigFile;
        }
}

  /**
   * The response to an authorization request.
   */
export class AuthorizationResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * That the transaction was approved.
   */
    approved: boolean | null = null;

  /**
   * The auth code from the payment network.
   */
    authCode?: string;

  /**
   * The code returned by the terminal or the card issuer to indicate the disposition of the
   * message.
   */
    authResponseCode?: string;

  /**
   * The ID assigned to the transaction.
   */
    transactionId: string | null = null;

  /**
   * The ID assigned to the batch.
   */
    batchId?: string;

  /**
   * The transaction reference string assigned to the transaction request. If no
   * transaction ref was assiged on the request, then the gateway will randomly generate
   * one.
   */
    transactionRef?: string;

  /**
   * The type of transaction.
   */
    transactionType: string | null = null;

  /**
   * The timestamp of the transaction.
   */
    timestamp: string | null = null;

  /**
   * The hash of the last tick block.
   */
    tickBlock: string | null = null;

  /**
   * That the transaction was processed on the test gateway.
   */
    test: boolean | null = null;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * The ECC signature of the response. Can be used to ensure that it was signed by the
   * terminal and detect man-in-the middle attacks.
   */
    sig?: string;

  /**
   * Whether or not the transaction was approved for a partial amount.
   */
    partialAuth: boolean | null = null;

  /**
   * Whether or not an alternate currency was used.
   */
    altCurrency: boolean | null = null;

  /**
   * Whether or not a request was settled on an FSA card.
   */
    fsaAuth: boolean | null = null;

  /**
   * The currency code used for the transaction.
   */
    currencyCode: string | null = null;

  /**
   * The requested amount.
   */
    requestedAmount: string | null = null;

  /**
   * The authorized amount. May not match the requested amount in the event of a partial
   * auth.
   */
    authorizedAmount: string | null = null;

  /**
   * The remaining balance on the payment method.
   */
    remainingBalance: string | null = null;

  /**
   * The tip amount.
   */
    tipAmount: string | null = null;

  /**
   * The tax amount.
   */
    taxAmount: string | null = null;

  /**
   * The cash back amount the customer requested during the transaction.
   */
    requestedCashBackAmount: string | null = null;

  /**
   * The amount of cash back authorized by the gateway. This amount will be the entire
   * amount requested, or zero.
   */
    authorizedCashBackAmount: string | null = null;

  /**
   * That the transaction has met the standard criteria for confirmation on the network.
   * (For example, 6 confirmations for level one bitcoin.)
   */
    confirmed: boolean | null = null;

  /**
   * The amount submitted to the blockchain.
   */
    cryptoAuthorizedAmount: string | null = null;

  /**
   * The network level fee assessed for the transaction denominated in cryptocurrency.
   * This fee goes to channel operators and crypto miners, not BlockChyp.
   */
    cryptoNetworkFee: string | null = null;

  /**
   * The three letter cryptocurrency code used for the transactions.
   */
    cryptocurrency: string | null = null;

  /**
   * Whether or not the transaction was processed on the level one or level two network.
   */
    cryptoNetwork: string | null = null;

  /**
   * The address on the crypto network the transaction was sent to.
   */
    cryptoReceiveAddress: string | null = null;

  /**
   * Hash or other identifier that identifies the block on the cryptocurrency network, if
   * available or relevant.
   */
    cryptoBlock: string | null = null;

  /**
   * Hash or other transaction identifier that identifies the transaction on the
   * cryptocurrency network, if available or relevant.
   */
    cryptoTransactionId: string | null = null;

  /**
   * The payment request URI used for the transaction, if available.
   */
    cryptoPaymentRequest: string | null = null;

  /**
   * Used for additional status information related to crypto transactions.
   */
    cryptoStatus: string | null = null;

  /**
   * The payment token, if the payment was enrolled in the vault.
   */
    token?: string;

  /**
   * The entry method for the transaction (CHIP, MSR, KEYED, etc).
   */
    entryMethod?: string;

  /**
   * The card brand (VISA, MC, AMEX, DEBIT, etc).
   */
    paymentType?: string;

  /**
   * Provides network level detail on how a transaction was routed, especially for debit
   * transactions.
   */
    network?: string;

  /**
   * Identifies the card association based on bin number. Used primarily used to indicate
   * the major logo on a card, even when debit transactions are routed on a different
   * network.
   */
    logo?: string;

  /**
   * The masked primary account number.
   */
    maskedPan?: string;

  /**
   * The BlockChyp public key if the user presented a BlockChyp payment card.
   */
    publicKey?: string;

  /**
   * That the transaction did something that would put the system in PCI scope.
   */
    ScopeAlert?: boolean;

  /**
   * The cardholder name.
   */
    cardHolder?: string;

  /**
   * The card expiration month in MM format.
   */
    expMonth?: string;

  /**
   * The card expiration year in YY format.
   */
    expYear?: string;

  /**
   * Address verification results if address information was submitted.
   */
    avsResponse: AVSResponse | null = null;

  /**
   * The CVV verification result if CVV was submitted.
   */
    cvvResponse?: string;

  /**
   * Suggested receipt fields.
   */
    receiptSuggestions: ReceiptSuggestions | null = null;

  /**
   * Customer data, if any. Preserved for reverse compatibility.
   */
    customer?: Customer;

  /**
   * Customer data, if any.
   */
    customers: Customer[] | null = null;

  /**
   * The hex encoded signature data.
   */
    sigFile?: string;

  /**
   * Card BIN ranges can be whitelisted so that they are read instead of being processed
   * directly. This is useful for integration with legacy gift card systems.
   */
    whiteListedCard?: WhiteListedCard;

  /**
   * That the transaction was flagged for store and forward due to network problems.
   */
    storeAndForward: boolean | null = null;

  /**
   * The current status of a transaction.
   */
    status: string | null = null;

  /**
   * Details about a payment card derived from its BIN/IIN.
   */
    cardMetadata?: CardMetadata;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        approved: boolean | null = null,
        authCode: string | undefined = undefined,
        authResponseCode: string | undefined = undefined,
        transactionId: string | null = null,
        batchId: string | undefined = undefined,
        transactionRef: string | undefined = undefined,
        transactionType: string | null = null,
        timestamp: string | null = null,
        tickBlock: string | null = null,
        test: boolean | null = null,
        destinationAccount: string | undefined = undefined,
        sig: string | undefined = undefined,
        partialAuth: boolean | null = null,
        altCurrency: boolean | null = null,
        fsaAuth: boolean | null = null,
        currencyCode: string | null = null,
        requestedAmount: string | null = null,
        authorizedAmount: string | null = null,
        remainingBalance: string | null = null,
        tipAmount: string | null = null,
        taxAmount: string | null = null,
        requestedCashBackAmount: string | null = null,
        authorizedCashBackAmount: string | null = null,
        confirmed: boolean | null = null,
        cryptoAuthorizedAmount: string | null = null,
        cryptoNetworkFee: string | null = null,
        cryptocurrency: string | null = null,
        cryptoNetwork: string | null = null,
        cryptoReceiveAddress: string | null = null,
        cryptoBlock: string | null = null,
        cryptoTransactionId: string | null = null,
        cryptoPaymentRequest: string | null = null,
        cryptoStatus: string | null = null,
        token: string | undefined = undefined,
        entryMethod: string | undefined = undefined,
        paymentType: string | undefined = undefined,
        network: string | undefined = undefined,
        logo: string | undefined = undefined,
        maskedPan: string | undefined = undefined,
        publicKey: string | undefined = undefined,
        ScopeAlert: boolean = false,
        cardHolder: string | undefined = undefined,
        expMonth: string | undefined = undefined,
        expYear: string | undefined = undefined,
        avsResponse: AVSResponse | null = null,
        cvvResponse: string | undefined = undefined,
        receiptSuggestions: ReceiptSuggestions | null = null,
        customer: Customer | undefined = undefined,
        customers: Customer[] | null = null,
        sigFile: string | undefined = undefined,
        whiteListedCard: WhiteListedCard | undefined = undefined,
        storeAndForward: boolean | null = null,
        status: string | null = null,
        cardMetadata: CardMetadata | undefined = undefined,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.approved = approved;
        this.authCode = authCode;
        this.authResponseCode = authResponseCode;
        this.transactionId = transactionId;
        this.batchId = batchId;
        this.transactionRef = transactionRef;
        this.transactionType = transactionType;
        this.timestamp = timestamp;
        this.tickBlock = tickBlock;
        this.test = test;
        this.destinationAccount = destinationAccount;
        this.sig = sig;
        this.partialAuth = partialAuth;
        this.altCurrency = altCurrency;
        this.fsaAuth = fsaAuth;
        this.currencyCode = currencyCode;
        this.requestedAmount = requestedAmount;
        this.authorizedAmount = authorizedAmount;
        this.remainingBalance = remainingBalance;
        this.tipAmount = tipAmount;
        this.taxAmount = taxAmount;
        this.requestedCashBackAmount = requestedCashBackAmount;
        this.authorizedCashBackAmount = authorizedCashBackAmount;
        this.confirmed = confirmed;
        this.cryptoAuthorizedAmount = cryptoAuthorizedAmount;
        this.cryptoNetworkFee = cryptoNetworkFee;
        this.cryptocurrency = cryptocurrency;
        this.cryptoNetwork = cryptoNetwork;
        this.cryptoReceiveAddress = cryptoReceiveAddress;
        this.cryptoBlock = cryptoBlock;
        this.cryptoTransactionId = cryptoTransactionId;
        this.cryptoPaymentRequest = cryptoPaymentRequest;
        this.cryptoStatus = cryptoStatus;
        this.token = token;
        this.entryMethod = entryMethod;
        this.paymentType = paymentType;
        this.network = network;
        this.logo = logo;
        this.maskedPan = maskedPan;
        this.publicKey = publicKey;
        this.ScopeAlert = ScopeAlert;
        this.cardHolder = cardHolder;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.avsResponse = avsResponse;
        this.cvvResponse = cvvResponse;
        this.receiptSuggestions = receiptSuggestions;
        this.customer = customer;
        this.customers = customers;
        this.sigFile = sigFile;
        this.whiteListedCard = whiteListedCard;
        this.storeAndForward = storeAndForward;
        this.status = status;
        this.cardMetadata = cardMetadata;
        }
}

  /**
   * Models the request for updated information about a transaction.
   */
export class TransactionStatusRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The BlockChyp assigned transaction id.
   */
    transactionId?: string;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        transactionId: string | undefined = undefined,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.transactionId = transactionId;
        }
}

  /**
   * Models the request for updated information about a payment link.
   */
export class PaymentLinkStatusRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * The link code assigned to the payment link.
   */
    linkCode: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        linkCode: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.linkCode = linkCode;
        }
}

  /**
   * Models the status of a payment link.
   */
export class PaymentLinkStatusResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The code used to retrieve the payment link.
   */
    linkCode: string | null = null;

  /**
   * The BlockChyp merchant id associated with a payment link.
   */
    merchantId: string | null = null;

  /**
   * The customer id associated with a payment link.
   */
    customerId?: string;

  /**
   * The user's internal reference for any transaction that may occur.
   */
    transactionRef?: string;

  /**
   * The user's internal reference for an order.
   */
    orderRef?: string;

  /**
   * That the order is tax exempt.
   */
    taxExempt?: boolean;

  /**
   * That the amount to collect via the payment link.
   */
    amount?: string;

  /**
   * The sales tax to be collected via the payment link.
   */
    taxAmount?: string;

  /**
   * Subject for email notifications.
   */
    subject?: string;

  /**
   * Id of the most recent transaction associated with the link.
   */
    transactionId?: string;

  /**
   * Description associated with the payment link.
   */
    description?: string;

  /**
   * Date and time the link will expire.
   */
    expiration?: Date;

  /**
   * Date and time the link was created.
   */
    dateCreated?: Date;

  /**
   * Line item level data if provided.
   */
    transactionDetails?: TransactionDisplayTransaction;

  /**
   * The current status of the payment link.
   */
    status?: string;

  /**
   * Alias for any terms and conditions language associated with the link.
   */
    tcAlias?: string;

  /**
   * Name of any terms and conditions agreements associated with the payment link.
   */
    tcName?: string;

  /**
   * Full text of any terms and conditions language associated with the agreement.
   */
    tcContent?: string;

  /**
   * That the link is intended for internal use by the merchant.
   */
    cashierFacing?: boolean;

  /**
   * That the payment method should be enrolled in the token vault.
   */
    enroll?: boolean;

  /**
   * That the link should only be used for enrollment in the token vault without any
   * underlying payment transaction.
   */
    enrollOnly?: boolean;

  /**
   * Returns details about the last transaction status.
   */
    lastTransaction?: AuthorizationResponse;

  /**
   * Returns a list of transactions associated with the link, including any declines.
   */
    transactionHistory?: AuthorizationResponse[];

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        linkCode: string | null = null,
        merchantId: string | null = null,
        customerId: string | undefined = undefined,
        transactionRef: string | undefined = undefined,
        orderRef: string | undefined = undefined,
        taxExempt: boolean = false,
        amount: string | undefined = undefined,
        taxAmount: string | undefined = undefined,
        subject: string | undefined = undefined,
        transactionId: string | undefined = undefined,
        description: string | undefined = undefined,
        expiration: Date | undefined = undefined,
        dateCreated: Date | undefined = undefined,
        transactionDetails: TransactionDisplayTransaction | undefined = undefined,
        status: string | undefined = undefined,
        tcAlias: string | undefined = undefined,
        tcName: string | undefined = undefined,
        tcContent: string | undefined = undefined,
        cashierFacing: boolean = false,
        enroll: boolean = false,
        enrollOnly: boolean = false,
        lastTransaction: AuthorizationResponse | undefined = undefined,
        transactionHistory: AuthorizationResponse[] | undefined = undefined,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.linkCode = linkCode;
        this.merchantId = merchantId;
        this.customerId = customerId;
        this.transactionRef = transactionRef;
        this.orderRef = orderRef;
        this.taxExempt = taxExempt;
        this.amount = amount;
        this.taxAmount = taxAmount;
        this.subject = subject;
        this.transactionId = transactionId;
        this.description = description;
        this.expiration = expiration;
        this.dateCreated = dateCreated;
        this.transactionDetails = transactionDetails;
        this.status = status;
        this.tcAlias = tcAlias;
        this.tcName = tcName;
        this.tcContent = tcContent;
        this.cashierFacing = cashierFacing;
        this.enroll = enroll;
        this.enrollOnly = enrollOnly;
        this.lastTransaction = lastTransaction;
        this.transactionHistory = transactionHistory;
        }
}

  /**
   * Models the status of a transaction.
   */
export class TransactionStatus {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * That the transaction was approved.
   */
    approved: boolean | null = null;

  /**
   * The auth code from the payment network.
   */
    authCode?: string;

  /**
   * The code returned by the terminal or the card issuer to indicate the disposition of the
   * message.
   */
    authResponseCode?: string;

  /**
   * The ID assigned to the transaction.
   */
    transactionId: string | null = null;

  /**
   * The ID assigned to the batch.
   */
    batchId?: string;

  /**
   * The transaction reference string assigned to the transaction request. If no
   * transaction ref was assiged on the request, then the gateway will randomly generate
   * one.
   */
    transactionRef?: string;

  /**
   * The type of transaction.
   */
    transactionType: string | null = null;

  /**
   * The timestamp of the transaction.
   */
    timestamp: string | null = null;

  /**
   * The hash of the last tick block.
   */
    tickBlock: string | null = null;

  /**
   * That the transaction was processed on the test gateway.
   */
    test: boolean | null = null;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * The ECC signature of the response. Can be used to ensure that it was signed by the
   * terminal and detect man-in-the middle attacks.
   */
    sig?: string;

  /**
   * Whether or not the transaction was approved for a partial amount.
   */
    partialAuth: boolean | null = null;

  /**
   * Whether or not an alternate currency was used.
   */
    altCurrency: boolean | null = null;

  /**
   * Whether or not a request was settled on an FSA card.
   */
    fsaAuth: boolean | null = null;

  /**
   * The currency code used for the transaction.
   */
    currencyCode: string | null = null;

  /**
   * The requested amount.
   */
    requestedAmount: string | null = null;

  /**
   * The authorized amount. May not match the requested amount in the event of a partial
   * auth.
   */
    authorizedAmount: string | null = null;

  /**
   * The remaining balance on the payment method.
   */
    remainingBalance: string | null = null;

  /**
   * The tip amount.
   */
    tipAmount: string | null = null;

  /**
   * The tax amount.
   */
    taxAmount: string | null = null;

  /**
   * The cash back amount the customer requested during the transaction.
   */
    requestedCashBackAmount: string | null = null;

  /**
   * The amount of cash back authorized by the gateway. This amount will be the entire
   * amount requested, or zero.
   */
    authorizedCashBackAmount: string | null = null;

  /**
   * The payment token, if the payment was enrolled in the vault.
   */
    token?: string;

  /**
   * The entry method for the transaction (CHIP, MSR, KEYED, etc).
   */
    entryMethod?: string;

  /**
   * The card brand (VISA, MC, AMEX, DEBIT, etc).
   */
    paymentType?: string;

  /**
   * Provides network level detail on how a transaction was routed, especially for debit
   * transactions.
   */
    network?: string;

  /**
   * Identifies the card association based on bin number. Used primarily used to indicate
   * the major logo on a card, even when debit transactions are routed on a different
   * network.
   */
    logo?: string;

  /**
   * The masked primary account number.
   */
    maskedPan?: string;

  /**
   * The BlockChyp public key if the user presented a BlockChyp payment card.
   */
    publicKey?: string;

  /**
   * That the transaction did something that would put the system in PCI scope.
   */
    ScopeAlert?: boolean;

  /**
   * The cardholder name.
   */
    cardHolder?: string;

  /**
   * The card expiration month in MM format.
   */
    expMonth?: string;

  /**
   * The card expiration year in YY format.
   */
    expYear?: string;

  /**
   * Address verification results if address information was submitted.
   */
    avsResponse: AVSResponse | null = null;

  /**
   * The CVV verification result if CVV was submitted.
   */
    cvvResponse?: string;

  /**
   * Suggested receipt fields.
   */
    receiptSuggestions: ReceiptSuggestions | null = null;

  /**
   * Customer data, if any. Preserved for reverse compatibility.
   */
    customer?: Customer;

  /**
   * Customer data, if any.
   */
    customers: Customer[] | null = null;

  /**
   * The hex encoded signature data.
   */
    sigFile?: string;

  /**
   * That the transaction was flagged for store and forward due to network problems.
   */
    storeAndForward: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        approved: boolean | null = null,
        authCode: string | undefined = undefined,
        authResponseCode: string | undefined = undefined,
        transactionId: string | null = null,
        batchId: string | undefined = undefined,
        transactionRef: string | undefined = undefined,
        transactionType: string | null = null,
        timestamp: string | null = null,
        tickBlock: string | null = null,
        test: boolean | null = null,
        destinationAccount: string | undefined = undefined,
        sig: string | undefined = undefined,
        partialAuth: boolean | null = null,
        altCurrency: boolean | null = null,
        fsaAuth: boolean | null = null,
        currencyCode: string | null = null,
        requestedAmount: string | null = null,
        authorizedAmount: string | null = null,
        remainingBalance: string | null = null,
        tipAmount: string | null = null,
        taxAmount: string | null = null,
        requestedCashBackAmount: string | null = null,
        authorizedCashBackAmount: string | null = null,
        token: string | undefined = undefined,
        entryMethod: string | undefined = undefined,
        paymentType: string | undefined = undefined,
        network: string | undefined = undefined,
        logo: string | undefined = undefined,
        maskedPan: string | undefined = undefined,
        publicKey: string | undefined = undefined,
        ScopeAlert: boolean = false,
        cardHolder: string | undefined = undefined,
        expMonth: string | undefined = undefined,
        expYear: string | undefined = undefined,
        avsResponse: AVSResponse | null = null,
        cvvResponse: string | undefined = undefined,
        receiptSuggestions: ReceiptSuggestions | null = null,
        customer: Customer | undefined = undefined,
        customers: Customer[] | null = null,
        sigFile: string | undefined = undefined,
        storeAndForward: boolean | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.approved = approved;
        this.authCode = authCode;
        this.authResponseCode = authResponseCode;
        this.transactionId = transactionId;
        this.batchId = batchId;
        this.transactionRef = transactionRef;
        this.transactionType = transactionType;
        this.timestamp = timestamp;
        this.tickBlock = tickBlock;
        this.test = test;
        this.destinationAccount = destinationAccount;
        this.sig = sig;
        this.partialAuth = partialAuth;
        this.altCurrency = altCurrency;
        this.fsaAuth = fsaAuth;
        this.currencyCode = currencyCode;
        this.requestedAmount = requestedAmount;
        this.authorizedAmount = authorizedAmount;
        this.remainingBalance = remainingBalance;
        this.tipAmount = tipAmount;
        this.taxAmount = taxAmount;
        this.requestedCashBackAmount = requestedCashBackAmount;
        this.authorizedCashBackAmount = authorizedCashBackAmount;
        this.token = token;
        this.entryMethod = entryMethod;
        this.paymentType = paymentType;
        this.network = network;
        this.logo = logo;
        this.maskedPan = maskedPan;
        this.publicKey = publicKey;
        this.ScopeAlert = ScopeAlert;
        this.cardHolder = cardHolder;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.avsResponse = avsResponse;
        this.cvvResponse = cvvResponse;
        this.receiptSuggestions = receiptSuggestions;
        this.customer = customer;
        this.customers = customers;
        this.sigFile = sigFile;
        this.storeAndForward = storeAndForward;
        }
}

  /**
   * An item level discount for transaction display. Discounts never combine.
   */
export class TransactionDisplayDiscount {

  /**
   * The discount description.
   */
    description: string | null = null;

  /**
   * The amount of the discount.
   */
    amount: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        description: string | null = null,
        amount: string | null = null,
        ) {
        this.description = description;
        this.amount = amount;
        }
}

  /**
   * An item category in a transaction display. Groups combine if their descriptions
   * match. Calculated subtotal amounts are rounded to two decimal places of precision.
   * Quantity is a floating point number that is not rounded at all.
   */
export class TransactionDisplayItem {

  /**
   * A unique value identifying the item. This is not required, but recommended since it is
   * required to update or delete line items.
   */
    id: string | null = null;

  /**
   * A description of the line item.
   */
    description: string | null = null;

  /**
   * The price of the line item.
   */
    price: string | null = null;

  /**
   * The quantity of the line item.
   */
    quantity: number | null = null;

  /**
   * An item category in a transaction display. Groups combine if their descriptions
   * match. Calculated subtotal amounts are rounded to two decimal places of precision.
   * Quantity is a floating point number that is not rounded at all.
   */
    extended: string | null = null;

  /**
   * An alphanumeric code for units of measurement as used in international trade.
   */
    unitCode: string | null = null;

  /**
   * An international description code of the item.
   */
    commodityCode: string | null = null;

  /**
   * A merchant-defined description code of the item.
   */
    productCode: string | null = null;

  /**
   * Are displayed under their corresponding item.
   */
    discounts: TransactionDisplayDiscount[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        id: string | null = null,
        description: string | null = null,
        price: string | null = null,
        quantity: number | null = null,
        extended: string | null = null,
        unitCode: string | null = null,
        commodityCode: string | null = null,
        productCode: string | null = null,
        discounts: TransactionDisplayDiscount[] | null = null,
        ) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.extended = extended;
        this.unitCode = unitCode;
        this.commodityCode = commodityCode;
        this.productCode = productCode;
        this.discounts = discounts;
        }
}

  /**
   * The items to display on a terminal.
   */
export class TransactionDisplayTransaction {

  /**
   * The subtotal to display.
   */
    subtotal: string | null = null;

  /**
   * The tax to display.
   */
    tax: string | null = null;

  /**
   * The total to display.
   */
    total: string | null = null;

  /**
   * An item to display. Can be overwritten or appended, based on the request type.
   */
    items: TransactionDisplayItem[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        subtotal: string | null = null,
        tax: string | null = null,
        total: string | null = null,
        items: TransactionDisplayItem[] | null = null,
        ) {
        this.subtotal = subtotal;
        this.tax = tax;
        this.total = total;
        this.items = items;
        }
}

  /**
   * Used to start or update a transaction line item display on a terminal.
   */
export class TransactionDisplayRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

  /**
   * Transaction to display on the terminal.
   */
    transaction?: TransactionDisplayTransaction;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        transaction: TransactionDisplayTransaction | undefined = undefined,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        this.transaction = transaction;
        }
}

  /**
   * The response to a basic API health check. If the security context permits it, the
   * response may also include the public key of the current merchant.
   */
export class HeartbeatResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The timestamp of the heartbeat.
   */
    timestamp: Date | null = null;

  /**
   * The public key of the clockchain. This is blockchain stuff that you don't really need
   * to worry about. It is a base 58 encoded and compressed eliptic curve public key. For the
   * production clockchain, this will always be:
   * '3cuhsckVUd9HzMjbdUSW17aY5kCcm1d6YAphJMUwmtXRj7WLyU'.
   */
    clockchain: string | null = null;

  /**
   * The hash of the last tick block.
   */
    latestTick: string | null = null;

  /**
   * The public key for the merchant's blockchain.
   */
    merchantPublicKey: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        timestamp: Date | null = null,
        clockchain: string | null = null,
        latestTick: string | null = null,
        merchantPublicKey: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.timestamp = timestamp;
        this.clockchain = clockchain;
        this.latestTick = latestTick;
        this.merchantPublicKey = merchantPublicKey;
        }
}

  /**
   * A request for the status of a terminal.
   */
export class TerminalStatusRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        }
}

  /**
   * The current status of a terminal.
   */
export class TerminalStatusResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * That the terminal is idle.
   */
    idle: boolean | null = null;

  /**
   * Whether or not a card is currently in the card slot.
   */
    cardInSlot: boolean | null = null;

  /**
   * The operation that the terminal is performing.
   */
    status: string | null = null;

  /**
   * The transaction reference for an ongoing transaction, if one was specified at
   * request time.
   */
    transactionRef: string | null = null;

  /**
   * The timestamp of the last status change.
   */
    since: Date | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        idle: boolean | null = null,
        cardInSlot: boolean | null = null,
        status: string | null = null,
        transactionRef: string | null = null,
        since: Date | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.idle = idle;
        this.cardInSlot = cardInSlot;
        this.status = status;
        this.transactionRef = transactionRef;
        this.since = since;
        }
}

  /**
   * Creates a payment link.
   */
export class PaymentLinkRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The transaction currency code.
   */
    currencyCode: string | null = null;

  /**
   * The requested amount.
   */
    amount: string | null = null;

  /**
   * That the request is tax exempt. Only required for tax exempt level 2 processing.
   */
    taxExempt: boolean | null = null;

  /**
   * A flag to add a surcharge to the transaction to cover credit card fees, if permitted.
   */
    surcharge: boolean | null = null;

  /**
   * A flag that applies a discount to negate the surcharge for debit transactions or other
   * surcharge ineligible payment methods.
   */
    cashDiscount: boolean | null = null;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

  /**
   * Automatically send the link via an email.
   */
    autoSend: boolean | null = null;

  /**
   * That the payment method should be added to the token vault alongside the
   * authorization.
   */
    enroll?: boolean;

  /**
   * That the link should be used to enroll a token only. Can only be used in cashier mode.
   */
    enrollOnly?: boolean;

  /**
   * That the QR Code binary should be returned.
   */
    qrcodeBinary?: boolean;

  /**
   * Determines the size of the qr code to be returned.
   */
    qrcodeSize?: number;

  /**
   * Number of days until the payment link expires.
   */
    daysToExpiration?: number;

  /**
   * Flags the payment link as cashier facing.
   */
    cashier: boolean | null = null;

  /**
   * Description explaining the transaction for display to the user.
   */
    description: string | null = null;

  /**
   * Subject of the payment email.
   */
    subject: string | null = null;

  /**
   * Transaction details for display on the payment email.
   */
    transaction?: TransactionDisplayTransaction;

  /**
   * Customer information.
   */
    customer: Customer | null = null;

  /**
   * Optional callback url to which transaction responses for this link will be posted.
   */
    callbackUrl: string | null = null;

  /**
   * An alias for a Terms and Conditions template configured in the BlockChyp dashboard.
   */
    tcAlias: string | null = null;

  /**
   * The name of the Terms and Conditions the user is accepting.
   */
    tcName: string | null = null;

  /**
   * The content of the terms and conditions that will be presented to the user.
   */
    tcContent: string | null = null;

  /**
   * That the transaction should be a cryptocurrency transaction. Value should be a
   * crypto currency code (ETH, BTC) or ANY to prompt the user to choose from supported
   * cryptocurrencies.
   */
    cryptocurrency?: string;

  /**
   * An optional parameter that can be used to force a crypto transaction onto a level one or
   * level two network. Valid values are L1 and L2. Defaults to L1.
   */
    cryptoNetwork?: string;

  /**
   * Can be used to specify a specific receive address for a crypto transaction. Disabled
   * by default. This should only be used by sophisticated users with access to properly
   * configured hot wallets.
   */
    cryptoReceiveAddress?: string;

  /**
   * Can optionally add a label to the payment request if the target cryptocurrency
   * supports labels. Defaults to the merchant's DBA Name.
   */
    paymentRequestLabel?: string;

  /**
   * Can optionally add a message to the payment request if the target cryptocurrency
   * supports labels. Defaults to empty.
   */
    paymentRequestMessage?: string;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        currencyCode: string | null = null,
        amount: string | null = null,
        taxExempt: boolean | null = null,
        surcharge: boolean | null = null,
        cashDiscount: boolean | null = null,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        autoSend: boolean | null = null,
        enroll: boolean = false,
        enrollOnly: boolean = false,
        qrcodeBinary: boolean = false,
        qrcodeSize: number = 0,
        daysToExpiration: number = 0,
        cashier: boolean | null = null,
        description: string | null = null,
        subject: string | null = null,
        transaction: TransactionDisplayTransaction | undefined = undefined,
        customer: Customer | null = null,
        callbackUrl: string | null = null,
        tcAlias: string | null = null,
        tcName: string | null = null,
        tcContent: string | null = null,
        cryptocurrency: string | undefined = undefined,
        cryptoNetwork: string | undefined = undefined,
        cryptoReceiveAddress: string | undefined = undefined,
        paymentRequestLabel: string | undefined = undefined,
        paymentRequestMessage: string | undefined = undefined,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.currencyCode = currencyCode;
        this.amount = amount;
        this.taxExempt = taxExempt;
        this.surcharge = surcharge;
        this.cashDiscount = cashDiscount;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        this.autoSend = autoSend;
        this.enroll = enroll;
        this.enrollOnly = enrollOnly;
        this.qrcodeBinary = qrcodeBinary;
        this.qrcodeSize = qrcodeSize;
        this.daysToExpiration = daysToExpiration;
        this.cashier = cashier;
        this.description = description;
        this.subject = subject;
        this.transaction = transaction;
        this.customer = customer;
        this.callbackUrl = callbackUrl;
        this.tcAlias = tcAlias;
        this.tcName = tcName;
        this.tcContent = tcContent;
        this.cryptocurrency = cryptocurrency;
        this.cryptoNetwork = cryptoNetwork;
        this.cryptoReceiveAddress = cryptoReceiveAddress;
        this.paymentRequestLabel = paymentRequestLabel;
        this.paymentRequestMessage = paymentRequestMessage;
        }
}

  /**
   * Creates a payment link.
   */
export class PaymentLinkResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The payment link code.
   */
    linkCode: string | null = null;

  /**
   * The url for the payment link.
   */
    url: string | null = null;

  /**
   * The url for a QR Code associated with this link.
   */
    qrcodeUrl: string | null = null;

  /**
   * The hex encoded binary for the QR Code, if requested. Encoded in PNG format.
   */
    qrcodeBinary: string | null = null;

  /**
   * The customer id created or used for the payment.
   */
    customerId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        linkCode: string | null = null,
        url: string | null = null,
        qrcodeUrl: string | null = null,
        qrcodeBinary: string | null = null,
        customerId: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.linkCode = linkCode;
        this.url = url;
        this.qrcodeUrl = qrcodeUrl;
        this.qrcodeBinary = qrcodeBinary;
        this.customerId = customerId;
        }
}

  /**
   * Cancels a pending payment link. Payment links that have already been used cannot be
   * canceled and the request will be rejected.
   */
export class CancelPaymentLinkRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The payment link code to cancel.
   */
    linkCode: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        linkCode: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.linkCode = linkCode;
        }
}

  /**
   * Success or failure of a payment link cancellation.
   */
export class CancelPaymentLinkResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        }
}

  /**
   * Resends a pending payment link. Payment links that have already been used or
   * cancelled cannot be resent and the request will be rejected.
   */
export class ResendPaymentLinkRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The payment link code to cancel.
   */
    linkCode: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        linkCode: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.linkCode = linkCode;
        }
}

  /**
   * Success or failure of a payment link resend operation.
   */
export class ResendPaymentLinkResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        }
}

  /**
   * Computes the cash discount for a cash discount if enabled.
   */
export class CashDiscountRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The transaction currency code.
   */
    currencyCode: string | null = null;

  /**
   * The requested amount.
   */
    amount: string | null = null;

  /**
   * That the request is tax exempt. Only required for tax exempt level 2 processing.
   */
    taxExempt: boolean | null = null;

  /**
   * A flag to add a surcharge to the transaction to cover credit card fees, if permitted.
   */
    surcharge: boolean | null = null;

  /**
   * A flag that applies a discount to negate the surcharge for debit transactions or other
   * surcharge ineligible payment methods.
   */
    cashDiscount: boolean | null = null;

  /**
   * How partial pennies should be rounded for calculated values like surcharges.
   * Rounding up is the default behavior.
   */
    roundingMode?: RoundingMode;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        currencyCode: string | null = null,
        amount: string | null = null,
        taxExempt: boolean | null = null,
        surcharge: boolean | null = null,
        cashDiscount: boolean | null = null,
        roundingMode: RoundingMode | undefined = undefined,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.currencyCode = currencyCode;
        this.amount = amount;
        this.taxExempt = taxExempt;
        this.surcharge = surcharge;
        this.cashDiscount = cashDiscount;
        this.roundingMode = roundingMode;
        }
}

  /**
   * Models the results of a cash discount calculation.
   */
export class CashDiscountResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The transaction currency code.
   */
    currencyCode: string | null = null;

  /**
   * The new calculated total amount.
   */
    amount: string | null = null;

  /**
   * That the request is tax exempt. Only required for tax exempt level 2 processing.
   */
    taxExempt: boolean | null = null;

  /**
   * The normal surcharge for a transaction. Will only be returned if an offsetting cash
   * discount is also returned.
   */
    surcharge: string | null = null;

  /**
   * The cash discount. Will not be returned in surcharge only mode.
   */
    cashDiscount: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        currencyCode: string | null = null,
        amount: string | null = null,
        taxExempt: boolean | null = null,
        surcharge: string | null = null,
        cashDiscount: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.currencyCode = currencyCode;
        this.amount = amount;
        this.taxExempt = taxExempt;
        this.surcharge = surcharge;
        this.cashDiscount = cashDiscount;
        }
}

  /**
   * Models a batch history request.
   */
export class TransactionHistoryRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * Optional search query. Will match amount, last 4 and customer name. batchId and
   * terminalName are not supported with this option.
   */
    query: string | null = null;

  /**
   * Optional batch id.
   */
    batchId: string | null = null;

  /**
   * Optional terminal name.
   */
    terminalName: string | null = null;

  /**
   * Optional start date filter for batch history.
   */
    startDate: Date | null = null;

  /**
   * Optional end date filter for batch history.
   */
    endDate: Date | null = null;

  /**
   * Max results to be returned by this request.
   */
    maxResults: number | null = null;

  /**
   * Starting index for results to be returned.
   */
    startIndex: number | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        query: string | null = null,
        batchId: string | null = null,
        terminalName: string | null = null,
        startDate: Date | null = null,
        endDate: Date | null = null,
        maxResults: number | null = null,
        startIndex: number | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.query = query;
        this.batchId = batchId;
        this.terminalName = terminalName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.maxResults = maxResults;
        this.startIndex = startIndex;
        }
}

  /**
   * Models response to a batch history request.
   */
export class TransactionHistoryResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * That the response came from the test gateway.
   */
    test: boolean | null = null;

  /**
   * Batch identifier if filtered by batch.
   */
    batchId: string | null = null;

  /**
   * Terminal name if filtered by terminal.
   */
    terminalName: string | null = null;

  /**
   * Start date if filtered by start date.
   */
    startDate: Date | null = null;

  /**
   * End date if filtered by end date.
   */
    endDate: Date | null = null;

  /**
   * Max results from the original request echoed back. Defaults to the system max of 250.
   */
    maxResults: number | null = null;

  /**
   * Starting index from the original request echoed back.
   */
    startIndex: number | null = null;

  /**
   * Total number of results accessible through paging.
   */
    totalResultCount: number | null = null;

  /**
   * Matching transaction history.
   */
    transactions: AuthorizationResponse[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        test: boolean | null = null,
        batchId: string | null = null,
        terminalName: string | null = null,
        startDate: Date | null = null,
        endDate: Date | null = null,
        maxResults: number | null = null,
        startIndex: number | null = null,
        totalResultCount: number | null = null,
        transactions: AuthorizationResponse[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.test = test;
        this.batchId = batchId;
        this.terminalName = terminalName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.maxResults = maxResults;
        this.startIndex = startIndex;
        this.totalResultCount = totalResultCount;
        this.transactions = transactions;
        }
}

  /**
   * Models a batch history request.
   */
export class BatchHistoryRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * Optional start date filter for batch history.
   */
    startDate: Date | null = null;

  /**
   * Optional end date filter for batch history.
   */
    endDate: Date | null = null;

  /**
   * Max results to be returned by this request. Defaults to the system max of 250.
   */
    maxResults: number | null = null;

  /**
   * Starting index for results to be returned.
   */
    startIndex: number | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        startDate: Date | null = null,
        endDate: Date | null = null,
        maxResults: number | null = null,
        startIndex: number | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.startDate = startDate;
        this.endDate = endDate;
        this.maxResults = maxResults;
        this.startIndex = startIndex;
        }
}

  /**
   * Models response to a batch history request.
   */
export class BatchHistoryResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * That the response came from the test gateway.
   */
    test: boolean | null = null;

  /**
   * Start date if filtered by start date.
   */
    startDate: Date | null = null;

  /**
   * End date if filtered by end date.
   */
    endDate: Date | null = null;

  /**
   * Merchant's batch history in descending order.
   */
    batches: BatchSummary[] | null = null;

  /**
   * Max results from the original request echoed back.
   */
    maxResults: number | null = null;

  /**
   * Starting index from the original request echoed back.
   */
    startIndex: number | null = null;

  /**
   * Total number of results accessible through paging.
   */
    totalResultCount: number | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        test: boolean | null = null,
        startDate: Date | null = null,
        endDate: Date | null = null,
        batches: BatchSummary[] | null = null,
        maxResults: number | null = null,
        startIndex: number | null = null,
        totalResultCount: number | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.test = test;
        this.startDate = startDate;
        this.endDate = endDate;
        this.batches = batches;
        this.maxResults = maxResults;
        this.startIndex = startIndex;
        this.totalResultCount = totalResultCount;
        }
}

  /**
   * Models high level information about a single batch.
   */
export class BatchSummary {

  /**
   * Batch identifier.
   */
    batchId: string | null = null;

  /**
   * Entry method for the batch, if any.
   */
    entryMethod: string | null = null;

  /**
   * Merchant deposit account into which proceeds should be deposited.
   */
    destinationAccountId: string | null = null;

  /**
   * The new captured amount.
   */
    capturedAmount: string | null = null;

  /**
   * The amount of preauths opened during the batch that have not been captured.
   */
    openPreauths: string | null = null;

  /**
   * The currency the batch was settled in.
   */
    currencyCode: string | null = null;

  /**
   * Flag indicating whether or not the batch is open.
   */
    open: boolean | null = null;

  /**
   * Date and time of the first transaction for this batch.
   */
    openDate: Date | null = null;

  /**
   * Date and time the batch was closed.
   */
    closeDate: Date | null = null;

    // Constructor with default values for optional fields
    constructor(
        batchId: string | null = null,
        entryMethod: string | null = null,
        destinationAccountId: string | null = null,
        capturedAmount: string | null = null,
        openPreauths: string | null = null,
        currencyCode: string | null = null,
        open: boolean | null = null,
        openDate: Date | null = null,
        closeDate: Date | null = null,
        ) {
        this.batchId = batchId;
        this.entryMethod = entryMethod;
        this.destinationAccountId = destinationAccountId;
        this.capturedAmount = capturedAmount;
        this.openPreauths = openPreauths;
        this.currencyCode = currencyCode;
        this.open = open;
        this.openDate = openDate;
        this.closeDate = closeDate;
        }
}

  /**
   * Models a request for details about a single batch.
   */
export class BatchDetailsRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * Id for the batch to be retrieved.
   */
    batchId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        batchId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.batchId = batchId;
        }
}

  /**
   * Models a response for details about a single batch.
   */
export class BatchDetailsResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * That the response came from the test gateway.
   */
    test: boolean | null = null;

  /**
   * Batch identifier.
   */
    batchId: string | null = null;

  /**
   * Entry method for the batch, if any.
   */
    entryMethod: string | null = null;

  /**
   * Merchant deposit account into which proceeds should be deposited.
   */
    destinationAccountId: string | null = null;

  /**
   * The new captured amount.
   */
    capturedAmount: string | null = null;

  /**
   * Preauths from this batch still open.
   */
    openPreauths: string | null = null;

  /**
   * The total volume from this batch.
   */
    totalVolume: string | null = null;

  /**
   * The total number of transactions in this batch.
   */
    transactionCount: number | null = null;

  /**
   * The total volume of gift cards sold.
   */
    giftCardsSold: string | null = null;

  /**
   * The total volume of gift cards transactions.
   */
    giftCardVolume: string | null = null;

  /**
   * The expected volume for this batch, usually captured volume less gift card volume.
   */
    expectedDeposit: string | null = null;

  /**
   * Flag indicating whether or not the batch is open.
   */
    open: boolean | null = null;

  /**
   * Date and time of the first transaction for this batch.
   */
    openDate: Date | null = null;

  /**
   * Date and time the batch was closed.
   */
    closeDate: Date | null = null;

  /**
   * Merchant's batch history in descending order.
   */
    volumeByTerminal: TerminalVolume[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        test: boolean | null = null,
        batchId: string | null = null,
        entryMethod: string | null = null,
        destinationAccountId: string | null = null,
        capturedAmount: string | null = null,
        openPreauths: string | null = null,
        totalVolume: string | null = null,
        transactionCount: number | null = null,
        giftCardsSold: string | null = null,
        giftCardVolume: string | null = null,
        expectedDeposit: string | null = null,
        open: boolean | null = null,
        openDate: Date | null = null,
        closeDate: Date | null = null,
        volumeByTerminal: TerminalVolume[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.test = test;
        this.batchId = batchId;
        this.entryMethod = entryMethod;
        this.destinationAccountId = destinationAccountId;
        this.capturedAmount = capturedAmount;
        this.openPreauths = openPreauths;
        this.totalVolume = totalVolume;
        this.transactionCount = transactionCount;
        this.giftCardsSold = giftCardsSold;
        this.giftCardVolume = giftCardVolume;
        this.expectedDeposit = expectedDeposit;
        this.open = open;
        this.openDate = openDate;
        this.closeDate = closeDate;
        this.volumeByTerminal = volumeByTerminal;
        }
}

  /**
   * Models transaction volume for a single terminal.
   */
export class TerminalVolume {

  /**
   * The terminal name assigned during activation.
   */
    terminalName: string | null = null;

  /**
   * The manufacturer's serial number.
   */
    serialNumber: string | null = null;

  /**
   * The terminal type.
   */
    terminalType: string | null = null;

  /**
   * The captured amount.
   */
    capturedAmount: string | null = null;

  /**
   * The number of transactions run on this terminal.
   */
    transactionCount: number | null = null;

    // Constructor with default values for optional fields
    constructor(
        terminalName: string | null = null,
        serialNumber: string | null = null,
        terminalType: string | null = null,
        capturedAmount: string | null = null,
        transactionCount: number | null = null,
        ) {
        this.terminalName = terminalName;
        this.serialNumber = serialNumber;
        this.terminalType = terminalType;
        this.capturedAmount = capturedAmount;
        this.transactionCount = transactionCount;
        }
}

  /**
   * Models basic information needed to create a test merchant.
   */
export class AddTestMerchantRequest {

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * The DBA name for the test merchant.
   */
    dbaName: string | null = null;

  /**
   * The corporate name for the test merchant.
   */
    companyName: string | null = null;

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

    // Constructor with default values for optional fields
    constructor(
        test: boolean | null = null,
        dbaName: string | null = null,
        companyName: string | null = null,
        timeout: number | null = null,
        ) {
        this.test = test;
        this.dbaName = dbaName;
        this.companyName = companyName;
        this.timeout = timeout;
        }
}

  /**
   * Models basic information needed to create a gateway merchant.
   */
export class AddGatewayMerchantRequest {

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * The merchant profile to be boarded.
   */
    profile: MerchantProfile | null = null;

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

    // Constructor with default values for optional fields
    constructor(
        test: boolean | null = null,
        profile: MerchantProfile | null = null,
        timeout: number | null = null,
        ) {
        this.test = test;
        this.profile = profile;
        this.timeout = timeout;
        }
}

  /**
   * Models a request for information about the merchant profile.
   */
export class MerchantProfileRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The merchant id. Optional for merchant scoped requests.
   */
    merchantId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        merchantId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.merchantId = merchantId;
        }
}

  /**
   * Models a request related to a platform configuration.
   */
export class MerchantPlatformRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The platform configuration id.
   */
    platformId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        platformId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.platformId = platformId;
        }
}

  /**
   * Models a request for adding a new user to a merchant account.
   */
export class InviteMerchantUserRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The merchant id. Optional for merchant scoped requests.
   */
    merchantId: string | null = null;

  /**
   * The email address of the user.
   */
    email: string | null = null;

  /**
   * The first name of the new user.
   */
    firstName: string | null = null;

  /**
   * The last name of the new user.
   */
    lastName: string | null = null;

  /**
   * An optional array of role codes that will be assigned to the user. If omitted defaults
   * to the default merchant role.
   */
    roles: string[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        merchantId: string | null = null,
        email: string | null = null,
        firstName: string | null = null,
        lastName: string | null = null,
        roles: string[] | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.merchantId = merchantId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roles = roles;
        }
}

  /**
   * Models a physical address.
   */
export class Address {

  /**
   * The first line of the street address.
   */
    address1: string | null = null;

  /**
   * The second line of the street address.
   */
    address2: string | null = null;

  /**
   * The city associated with the street address.
   */
    city: string | null = null;

  /**
   * The state or province associated with the street address.
   */
    stateOrProvince: string | null = null;

  /**
   * The postal code associated with the street address.
   */
    postalCode: string | null = null;

  /**
   * The ISO country code associated with the street address.
   */
    countryCode: string | null = null;

  /**
   * The latitude component of the address's GPS coordinates.
   */
    latitude: number | null = null;

  /**
   * The longitude component of the address's GPS coordinates.
   */
    longitude: number | null = null;

    // Constructor with default values for optional fields
    constructor(
        address1: string | null = null,
        address2: string | null = null,
        city: string | null = null,
        stateOrProvince: string | null = null,
        postalCode: string | null = null,
        countryCode: string | null = null,
        latitude: number | null = null,
        longitude: number | null = null,
        ) {
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.stateOrProvince = stateOrProvince;
        this.postalCode = postalCode;
        this.countryCode = countryCode;
        this.latitude = latitude;
        this.longitude = longitude;
        }
}

  /**
   * Models a merchant profile.
   */
export class MerchantProfile {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * That the response came from the test gateway.
   */
    test: boolean | null = null;

  /**
   * The merchant id.
   */
    merchantId: string | null = null;

  /**
   * The primary bank mid.
   */
    bankMid: string | null = null;

  /**
   * The merchant's company name.
   */
    companyName: string | null = null;

  /**
   * The dba name of the merchant.
   */
    dbaName: string | null = null;

  /**
   * The name the merchant prefers on payment link invoices.
   */
    invoiceName: string | null = null;

  /**
   * The contact name for the merchant.
   */
    contactName: string | null = null;

  /**
   * The contact number for the merchant.
   */
    contactNumber: string | null = null;

  /**
   * The location name.
   */
    locationName: string | null = null;

  /**
   * The store number.
   */
    storeNumber: string | null = null;

  /**
   * The partner assigne reference for this merchant.
   */
    partnerRef: string | null = null;

  /**
   * The merchant's local time zone.
   */
    timeZone: string | null = null;

  /**
   * The batch close time in the merchant's time zone.
   */
    batchCloseTime: string | null = null;

  /**
   * The terminal firmware update time.
   */
    terminalUpdateTime: string | null = null;

  /**
   * Flag indicating whether or not the batch automatically closes.
   */
    autoBatchClose: boolean | null = null;

  /**
   * Flag indicating whether or not batch closure emails should be automatically sent.
   */
    disableBatchEmails: boolean | null = null;

  /**
   * Flag indicating whether or not pin entry is enabled.
   */
    pinEnabled: boolean | null = null;

  /**
   * Flag indicating whether or not cash back is enabled.
   */
    cashBackEnabled: boolean | null = null;

  /**
   * Flag indicating whether or not store and forward is enabled.
   */
    storeAndForwardEnabled: boolean | null = null;

  /**
   * Flag indicating whether or not partial authorizations are supported for this
   * merchant.
   */
    partialAuthEnabled: boolean | null = null;

  /**
   * Flag indicating whether or not this merchant support split settlement.
   */
    splitBankAccountsEnabled: boolean | null = null;

  /**
   * Floor limit for store and forward transactions.
   */
    storeAndForwardFloorLimit: string | null = null;

  /**
   * The blockchyp public key for this merchant.
   */
    publicKey: string | null = null;

  /**
   * The underwriting/processing status for the the merchant.
   */
    status: string | null = null;

  /**
   * Enables cash discount or surcharging.
   */
    cashDiscountEnabled: boolean | null = null;

  /**
   * The post transaction survey timeout in seconds.
   */
    surveyTimeout: number | null = null;

  /**
   * Time a transaction result is displayed on a terminal before the terminal is
   * automatically cleared in seconds.
   */
    cooldownTimeout: number | null = null;

  /**
   * That tips are enabled for a merchant account.
   */
    tipEnabled: boolean | null = null;

  /**
   * That tips should be automatically prompted for after charge and preauth
   * transactions.
   */
    promptForTip: boolean | null = null;

  /**
   * Three default values for tips. Can be provided as a percentage if a percent sign is
   * provided. Otherwise the values are assumed to be basis points.
   */
    tipDefaults: string[] | null = null;

  /**
   * Four default values for cashback prompts.
   */
    cashbackPresets: string[] | null = null;

  /**
   * That EBT cards are enabled.
   */
    ebtEnabled: boolean | null = null;

  /**
   * That refunds without transaction references are permitted.
   */
    freeRangeRefundsEnabled: boolean | null = null;

  /**
   * That pin bypass is enabled.
   */
    pinBypassEnabled: boolean | null = null;

  /**
   * That gift cards are disabled.
   */
    giftCardsDisabled: boolean | null = null;

  /**
   * Disables terms and conditions pages in the merchant UI.
   */
    tcDisabled: boolean | null = null;

  /**
   * That digital signature capture is enabled.
   */
    digitalSignaturesEnabled: boolean | null = null;

  /**
   * That transactions should auto-reverse when signatures are refused.
   */
    digitalSignatureReversal: boolean | null = null;

  /**
   * The address to be used for billing correspondence.
   */
    billingAddress: Address | null = null;

  /**
   * The address to be used for shipping.
   */
    shippingAddress: Address | null = null;

  /**
   * That Visa cards are supported.
   */
    visa: boolean | null = null;

  /**
   * That MasterCard is supported.
   */
    masterCard: boolean | null = null;

  /**
   * That American Express is supported.
   */
    amex: boolean | null = null;

  /**
   * That Discover cards are supported.
   */
    discover: boolean | null = null;

  /**
   * That JCB (Japan Card Bureau) cards are supported.
   */
    jcb: boolean | null = null;

  /**
   * That China Union Pay cards are supported.
   */
    unionPay: boolean | null = null;

  /**
   * That contactless EMV cards are supported.
   */
    contactlessEmv: boolean | null = null;

  /**
   * That manual card entry is enabled.
   */
    manualEntryEnabled: boolean | null = null;

  /**
   * Requires a zip code to be entered for manually entered transactions.
   */
    manualEntryPromptZip: boolean | null = null;

  /**
   * Requires a street number to be entered for manually entered transactions.
   */
    manualEntryPromptStreetNumber: boolean | null = null;

  /**
   * That this merchant is boarded on BlockChyp in gateway only mode.
   */
    gatewayOnly: boolean | null = null;

  /**
   * Bank accounts for split bank account merchants.
   */
    bankAccounts: BankAccount[] | null = null;

  /**
   * That a merchant is allowed to send a surcharge amount directly to the gateway.
   */
    passthroughSurchargeEnabled: boolean | null = null;

  /**
   * That CVV verification is enabled for manually entered transactions.
   */
    cvvVerificationEnabled: boolean | null = null;

  /**
   * That CVV mismatch (N) responses should be declined.
   */
    cvvVerificationNEnabled: boolean | null = null;

  /**
   * That CVV not processed (P) responses should be declined.
   */
    cvvVerificationPEnabled: boolean | null = null;

  /**
   * That CVV should be on card but is not indicated (S) responses should be declined.
   */
    cvvVerificationSEnabled: boolean | null = null;

  /**
   * That issuer not certified or has not provided encryption key (U) responses should be
   * declined.
   */
    cvvVerificationUEnabled: boolean | null = null;

  /**
   * That the merchant follows the partner's CVV settings.
   */
    followPartnerCvvSettings: boolean | null = null;

  /**
   * The AVS (Address Verification Service) rule to apply. Allowed values are
   * 'allow_all', 'require_full_match', 'require_zip_match',
   * 'require_address_match'. If avsRule is empty, then merchant follows partner
   * setting.
   */
    avsRule: string | null = null;

  /**
   * That the merchant follows the partner's AVS settings.
   */
    followPartnerAvsSettings: boolean | null = null;

  /**
   * Flag indicating whether or not account updater is enrolled. Note that only
   * merchant's whose partner is enrolled will be processed by the account updater.
   */
    accountUpdaterEnrolled: boolean | null = null;

  /**
   * Whether the merchant should bypass an auth with TSYS on Enrollment.
   */
    bypassEnrollAuthEnabled: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        merchantId: string | null = null,
        bankMid: string | null = null,
        companyName: string | null = null,
        dbaName: string | null = null,
        invoiceName: string | null = null,
        contactName: string | null = null,
        contactNumber: string | null = null,
        locationName: string | null = null,
        storeNumber: string | null = null,
        partnerRef: string | null = null,
        timeZone: string | null = null,
        batchCloseTime: string | null = null,
        terminalUpdateTime: string | null = null,
        autoBatchClose: boolean | null = null,
        disableBatchEmails: boolean | null = null,
        pinEnabled: boolean | null = null,
        cashBackEnabled: boolean | null = null,
        storeAndForwardEnabled: boolean | null = null,
        partialAuthEnabled: boolean | null = null,
        splitBankAccountsEnabled: boolean | null = null,
        storeAndForwardFloorLimit: string | null = null,
        publicKey: string | null = null,
        status: string | null = null,
        cashDiscountEnabled: boolean | null = null,
        surveyTimeout: number | null = null,
        cooldownTimeout: number | null = null,
        tipEnabled: boolean | null = null,
        promptForTip: boolean | null = null,
        tipDefaults: string[] | null = null,
        cashbackPresets: string[] | null = null,
        ebtEnabled: boolean | null = null,
        freeRangeRefundsEnabled: boolean | null = null,
        pinBypassEnabled: boolean | null = null,
        giftCardsDisabled: boolean | null = null,
        tcDisabled: boolean | null = null,
        digitalSignaturesEnabled: boolean | null = null,
        digitalSignatureReversal: boolean | null = null,
        billingAddress: Address | null = null,
        shippingAddress: Address | null = null,
        visa: boolean | null = null,
        masterCard: boolean | null = null,
        amex: boolean | null = null,
        discover: boolean | null = null,
        jcb: boolean | null = null,
        unionPay: boolean | null = null,
        contactlessEmv: boolean | null = null,
        manualEntryEnabled: boolean | null = null,
        manualEntryPromptZip: boolean | null = null,
        manualEntryPromptStreetNumber: boolean | null = null,
        gatewayOnly: boolean | null = null,
        bankAccounts: BankAccount[] | null = null,
        passthroughSurchargeEnabled: boolean | null = null,
        cvvVerificationEnabled: boolean | null = null,
        cvvVerificationNEnabled: boolean | null = null,
        cvvVerificationPEnabled: boolean | null = null,
        cvvVerificationSEnabled: boolean | null = null,
        cvvVerificationUEnabled: boolean | null = null,
        followPartnerCvvSettings: boolean | null = null,
        avsRule: string | null = null,
        followPartnerAvsSettings: boolean | null = null,
        accountUpdaterEnrolled: boolean | null = null,
        bypassEnrollAuthEnabled: boolean | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.merchantId = merchantId;
        this.bankMid = bankMid;
        this.companyName = companyName;
        this.dbaName = dbaName;
        this.invoiceName = invoiceName;
        this.contactName = contactName;
        this.contactNumber = contactNumber;
        this.locationName = locationName;
        this.storeNumber = storeNumber;
        this.partnerRef = partnerRef;
        this.timeZone = timeZone;
        this.batchCloseTime = batchCloseTime;
        this.terminalUpdateTime = terminalUpdateTime;
        this.autoBatchClose = autoBatchClose;
        this.disableBatchEmails = disableBatchEmails;
        this.pinEnabled = pinEnabled;
        this.cashBackEnabled = cashBackEnabled;
        this.storeAndForwardEnabled = storeAndForwardEnabled;
        this.partialAuthEnabled = partialAuthEnabled;
        this.splitBankAccountsEnabled = splitBankAccountsEnabled;
        this.storeAndForwardFloorLimit = storeAndForwardFloorLimit;
        this.publicKey = publicKey;
        this.status = status;
        this.cashDiscountEnabled = cashDiscountEnabled;
        this.surveyTimeout = surveyTimeout;
        this.cooldownTimeout = cooldownTimeout;
        this.tipEnabled = tipEnabled;
        this.promptForTip = promptForTip;
        this.tipDefaults = tipDefaults;
        this.cashbackPresets = cashbackPresets;
        this.ebtEnabled = ebtEnabled;
        this.freeRangeRefundsEnabled = freeRangeRefundsEnabled;
        this.pinBypassEnabled = pinBypassEnabled;
        this.giftCardsDisabled = giftCardsDisabled;
        this.tcDisabled = tcDisabled;
        this.digitalSignaturesEnabled = digitalSignaturesEnabled;
        this.digitalSignatureReversal = digitalSignatureReversal;
        this.billingAddress = billingAddress;
        this.shippingAddress = shippingAddress;
        this.visa = visa;
        this.masterCard = masterCard;
        this.amex = amex;
        this.discover = discover;
        this.jcb = jcb;
        this.unionPay = unionPay;
        this.contactlessEmv = contactlessEmv;
        this.manualEntryEnabled = manualEntryEnabled;
        this.manualEntryPromptZip = manualEntryPromptZip;
        this.manualEntryPromptStreetNumber = manualEntryPromptStreetNumber;
        this.gatewayOnly = gatewayOnly;
        this.bankAccounts = bankAccounts;
        this.passthroughSurchargeEnabled = passthroughSurchargeEnabled;
        this.cvvVerificationEnabled = cvvVerificationEnabled;
        this.cvvVerificationNEnabled = cvvVerificationNEnabled;
        this.cvvVerificationPEnabled = cvvVerificationPEnabled;
        this.cvvVerificationSEnabled = cvvVerificationSEnabled;
        this.cvvVerificationUEnabled = cvvVerificationUEnabled;
        this.followPartnerCvvSettings = followPartnerCvvSettings;
        this.avsRule = avsRule;
        this.followPartnerAvsSettings = followPartnerAvsSettings;
        this.accountUpdaterEnrolled = accountUpdaterEnrolled;
        this.bypassEnrollAuthEnabled = bypassEnrollAuthEnabled;
        }
}

  /**
   * Models a response for a single merchant profile.
   */
export class MerchantProfileResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * That the response came from the test gateway.
   */
    test: boolean | null = null;

  /**
   * The merchant id.
   */
    merchantId: string | null = null;

  /**
   * The primary bank mid.
   */
    bankMid: string | null = null;

  /**
   * The merchant's company name.
   */
    companyName: string | null = null;

  /**
   * The dba name of the merchant.
   */
    dbaName: string | null = null;

  /**
   * The name the merchant prefers on payment link invoices.
   */
    invoiceName: string | null = null;

  /**
   * The contact name for the merchant.
   */
    contactName: string | null = null;

  /**
   * The contact number for the merchant.
   */
    contactNumber: string | null = null;

  /**
   * The location name.
   */
    locationName: string | null = null;

  /**
   * The store number.
   */
    storeNumber: string | null = null;

  /**
   * The partner assigne reference for this merchant.
   */
    partnerRef: string | null = null;

  /**
   * The merchant's local time zone.
   */
    timeZone: string | null = null;

  /**
   * The batch close time in the merchant's time zone.
   */
    batchCloseTime: string | null = null;

  /**
   * The terminal firmware update time.
   */
    terminalUpdateTime: string | null = null;

  /**
   * Flag indicating whether or not the batch automatically closes.
   */
    autoBatchClose: boolean | null = null;

  /**
   * Flag indicating whether or not batch closure emails should be automatically sent.
   */
    disableBatchEmails: boolean | null = null;

  /**
   * Flag indicating whether or not pin entry is enabled.
   */
    pinEnabled: boolean | null = null;

  /**
   * Flag indicating whether or not cash back is enabled.
   */
    cashBackEnabled: boolean | null = null;

  /**
   * Flag indicating whether or not store and forward is enabled.
   */
    storeAndForwardEnabled: boolean | null = null;

  /**
   * Flag indicating whether or not partial authorizations are supported for this
   * merchant.
   */
    partialAuthEnabled: boolean | null = null;

  /**
   * Flag indicating whether or not this merchant support split settlement.
   */
    splitBankAccountsEnabled: boolean | null = null;

  /**
   * Floor limit for store and forward transactions.
   */
    storeAndForwardFloorLimit: string | null = null;

  /**
   * The blockchyp public key for this merchant.
   */
    publicKey: string | null = null;

  /**
   * The underwriting/processing status for the the merchant.
   */
    status: string | null = null;

  /**
   * Enables cash discount or surcharging.
   */
    cashDiscountEnabled: boolean | null = null;

  /**
   * The post transaction survey timeout in seconds.
   */
    surveyTimeout: number | null = null;

  /**
   * Time a transaction result is displayed on a terminal before the terminal is
   * automatically cleared in seconds.
   */
    cooldownTimeout: number | null = null;

  /**
   * That tips are enabled for a merchant account.
   */
    tipEnabled: boolean | null = null;

  /**
   * That tips should be automatically prompted for after charge and preauth
   * transactions.
   */
    promptForTip: boolean | null = null;

  /**
   * Three default values for tips. Can be provided as a percentage if a percent sign is
   * provided. Otherwise the values are assumed to be basis points.
   */
    tipDefaults: string[] | null = null;

  /**
   * Four default values for cashback prompts.
   */
    cashbackPresets: string[] | null = null;

  /**
   * That EBT cards are enabled.
   */
    ebtEnabled: boolean | null = null;

  /**
   * That refunds without transaction references are permitted.
   */
    freeRangeRefundsEnabled: boolean | null = null;

  /**
   * That pin bypass is enabled.
   */
    pinBypassEnabled: boolean | null = null;

  /**
   * That gift cards are disabled.
   */
    giftCardsDisabled: boolean | null = null;

  /**
   * Disables terms and conditions pages in the merchant UI.
   */
    tcDisabled: boolean | null = null;

  /**
   * That digital signature capture is enabled.
   */
    digitalSignaturesEnabled: boolean | null = null;

  /**
   * That transactions should auto-reverse when signatures are refused.
   */
    digitalSignatureReversal: boolean | null = null;

  /**
   * The address to be used for billing correspondence.
   */
    billingAddress: Address | null = null;

  /**
   * The address to be used for shipping.
   */
    shippingAddress: Address | null = null;

  /**
   * That Visa cards are supported.
   */
    visa: boolean | null = null;

  /**
   * That MasterCard is supported.
   */
    masterCard: boolean | null = null;

  /**
   * That American Express is supported.
   */
    amex: boolean | null = null;

  /**
   * That Discover cards are supported.
   */
    discover: boolean | null = null;

  /**
   * That JCB (Japan Card Bureau) cards are supported.
   */
    jcb: boolean | null = null;

  /**
   * That China Union Pay cards are supported.
   */
    unionPay: boolean | null = null;

  /**
   * That contactless EMV cards are supported.
   */
    contactlessEmv: boolean | null = null;

  /**
   * That manual card entry is enabled.
   */
    manualEntryEnabled: boolean | null = null;

  /**
   * Requires a zip code to be entered for manually entered transactions.
   */
    manualEntryPromptZip: boolean | null = null;

  /**
   * Requires a street number to be entered for manually entered transactions.
   */
    manualEntryPromptStreetNumber: boolean | null = null;

  /**
   * That this merchant is boarded on BlockChyp in gateway only mode.
   */
    gatewayOnly: boolean | null = null;

  /**
   * Bank accounts for split bank account merchants.
   */
    bankAccounts: BankAccount[] | null = null;

  /**
   * That a merchant is allowed to send a surcharge amount directly to the gateway.
   */
    passthroughSurchargeEnabled: boolean | null = null;

  /**
   * That CVV verification is enabled for manually entered transactions.
   */
    cvvVerificationEnabled: boolean | null = null;

  /**
   * That CVV mismatch (N) responses should be declined.
   */
    cvvVerificationNEnabled: boolean | null = null;

  /**
   * That CVV not processed (P) responses should be declined.
   */
    cvvVerificationPEnabled: boolean | null = null;

  /**
   * That CVV should be on card but is not indicated (S) responses should be declined.
   */
    cvvVerificationSEnabled: boolean | null = null;

  /**
   * That issuer not certified or has not provided encryption key (U) responses should be
   * declined.
   */
    cvvVerificationUEnabled: boolean | null = null;

  /**
   * That the merchant follows the partner's CVV settings.
   */
    followPartnerCvvSettings: boolean | null = null;

  /**
   * The AVS (Address Verification Service) rule to apply. Allowed values are
   * 'allow_all', 'require_full_match', 'require_zip_match',
   * 'require_address_match'. If avsRule is empty, then merchant follows partner
   * setting.
   */
    avsRule: string | null = null;

  /**
   * That the merchant follows the partner's AVS settings.
   */
    followPartnerAvsSettings: boolean | null = null;

  /**
   * Flag indicating whether or not account updater is enrolled. Note that only
   * merchant's whose partner is enrolled will be processed by the account updater.
   */
    accountUpdaterEnrolled: boolean | null = null;

  /**
   * Whether the merchant should bypass an auth with TSYS on Enrollment.
   */
    bypassEnrollAuthEnabled: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        test: boolean | null = null,
        merchantId: string | null = null,
        bankMid: string | null = null,
        companyName: string | null = null,
        dbaName: string | null = null,
        invoiceName: string | null = null,
        contactName: string | null = null,
        contactNumber: string | null = null,
        locationName: string | null = null,
        storeNumber: string | null = null,
        partnerRef: string | null = null,
        timeZone: string | null = null,
        batchCloseTime: string | null = null,
        terminalUpdateTime: string | null = null,
        autoBatchClose: boolean | null = null,
        disableBatchEmails: boolean | null = null,
        pinEnabled: boolean | null = null,
        cashBackEnabled: boolean | null = null,
        storeAndForwardEnabled: boolean | null = null,
        partialAuthEnabled: boolean | null = null,
        splitBankAccountsEnabled: boolean | null = null,
        storeAndForwardFloorLimit: string | null = null,
        publicKey: string | null = null,
        status: string | null = null,
        cashDiscountEnabled: boolean | null = null,
        surveyTimeout: number | null = null,
        cooldownTimeout: number | null = null,
        tipEnabled: boolean | null = null,
        promptForTip: boolean | null = null,
        tipDefaults: string[] | null = null,
        cashbackPresets: string[] | null = null,
        ebtEnabled: boolean | null = null,
        freeRangeRefundsEnabled: boolean | null = null,
        pinBypassEnabled: boolean | null = null,
        giftCardsDisabled: boolean | null = null,
        tcDisabled: boolean | null = null,
        digitalSignaturesEnabled: boolean | null = null,
        digitalSignatureReversal: boolean | null = null,
        billingAddress: Address | null = null,
        shippingAddress: Address | null = null,
        visa: boolean | null = null,
        masterCard: boolean | null = null,
        amex: boolean | null = null,
        discover: boolean | null = null,
        jcb: boolean | null = null,
        unionPay: boolean | null = null,
        contactlessEmv: boolean | null = null,
        manualEntryEnabled: boolean | null = null,
        manualEntryPromptZip: boolean | null = null,
        manualEntryPromptStreetNumber: boolean | null = null,
        gatewayOnly: boolean | null = null,
        bankAccounts: BankAccount[] | null = null,
        passthroughSurchargeEnabled: boolean | null = null,
        cvvVerificationEnabled: boolean | null = null,
        cvvVerificationNEnabled: boolean | null = null,
        cvvVerificationPEnabled: boolean | null = null,
        cvvVerificationSEnabled: boolean | null = null,
        cvvVerificationUEnabled: boolean | null = null,
        followPartnerCvvSettings: boolean | null = null,
        avsRule: string | null = null,
        followPartnerAvsSettings: boolean | null = null,
        accountUpdaterEnrolled: boolean | null = null,
        bypassEnrollAuthEnabled: boolean | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.test = test;
        this.merchantId = merchantId;
        this.bankMid = bankMid;
        this.companyName = companyName;
        this.dbaName = dbaName;
        this.invoiceName = invoiceName;
        this.contactName = contactName;
        this.contactNumber = contactNumber;
        this.locationName = locationName;
        this.storeNumber = storeNumber;
        this.partnerRef = partnerRef;
        this.timeZone = timeZone;
        this.batchCloseTime = batchCloseTime;
        this.terminalUpdateTime = terminalUpdateTime;
        this.autoBatchClose = autoBatchClose;
        this.disableBatchEmails = disableBatchEmails;
        this.pinEnabled = pinEnabled;
        this.cashBackEnabled = cashBackEnabled;
        this.storeAndForwardEnabled = storeAndForwardEnabled;
        this.partialAuthEnabled = partialAuthEnabled;
        this.splitBankAccountsEnabled = splitBankAccountsEnabled;
        this.storeAndForwardFloorLimit = storeAndForwardFloorLimit;
        this.publicKey = publicKey;
        this.status = status;
        this.cashDiscountEnabled = cashDiscountEnabled;
        this.surveyTimeout = surveyTimeout;
        this.cooldownTimeout = cooldownTimeout;
        this.tipEnabled = tipEnabled;
        this.promptForTip = promptForTip;
        this.tipDefaults = tipDefaults;
        this.cashbackPresets = cashbackPresets;
        this.ebtEnabled = ebtEnabled;
        this.freeRangeRefundsEnabled = freeRangeRefundsEnabled;
        this.pinBypassEnabled = pinBypassEnabled;
        this.giftCardsDisabled = giftCardsDisabled;
        this.tcDisabled = tcDisabled;
        this.digitalSignaturesEnabled = digitalSignaturesEnabled;
        this.digitalSignatureReversal = digitalSignatureReversal;
        this.billingAddress = billingAddress;
        this.shippingAddress = shippingAddress;
        this.visa = visa;
        this.masterCard = masterCard;
        this.amex = amex;
        this.discover = discover;
        this.jcb = jcb;
        this.unionPay = unionPay;
        this.contactlessEmv = contactlessEmv;
        this.manualEntryEnabled = manualEntryEnabled;
        this.manualEntryPromptZip = manualEntryPromptZip;
        this.manualEntryPromptStreetNumber = manualEntryPromptStreetNumber;
        this.gatewayOnly = gatewayOnly;
        this.bankAccounts = bankAccounts;
        this.passthroughSurchargeEnabled = passthroughSurchargeEnabled;
        this.cvvVerificationEnabled = cvvVerificationEnabled;
        this.cvvVerificationNEnabled = cvvVerificationNEnabled;
        this.cvvVerificationPEnabled = cvvVerificationPEnabled;
        this.cvvVerificationSEnabled = cvvVerificationSEnabled;
        this.cvvVerificationUEnabled = cvvVerificationUEnabled;
        this.followPartnerCvvSettings = followPartnerCvvSettings;
        this.avsRule = avsRule;
        this.followPartnerAvsSettings = followPartnerAvsSettings;
        this.accountUpdaterEnrolled = accountUpdaterEnrolled;
        this.bypassEnrollAuthEnabled = bypassEnrollAuthEnabled;
        }
}

  /**
   * Models meta data about a merchant bank account.
   */
export class BankAccount {

  /**
   * The account identifier to be used with authorization requests.
   */
    id: string | null = null;

  /**
   * The name of the account.
   */
    name: string | null = null;

  /**
   * The purpose of the account.
   */
    purpose: string | null = null;

  /**
   * The masked account number.
   */
    maskedAccountNumber: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        id: string | null = null,
        name: string | null = null,
        purpose: string | null = null,
        maskedAccountNumber: string | null = null,
        ) {
        this.id = id;
        this.name = name;
        this.purpose = purpose;
        this.maskedAccountNumber = maskedAccountNumber;
        }
}

  /**
   * Returns a list of queued transactions on a terminal.
   */
export class ListQueuedTransactionsRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        }
}

  /**
   * A list of queued transactions on a terminal.
   */
export class ListQueuedTransactionsResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * A list of queued transactions on the terminal.
   */
    transactionRefs: string[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        transactionRefs: string[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.transactionRefs = transactionRefs;
        }
}

  /**
   * Deletes one or all transactions from a terminal queue.
   */
export class DeleteQueuedTransactionRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

  /**
   * A transaction reference string of the transaction to delete. Passing `*` will clear
   * all queued transactions.
   */
    transactionRef: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        transactionRef: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        this.transactionRef = transactionRef;
        }
}

  /**
   * The response to a delete queued transaction request.
   */
export class DeleteQueuedTransactionResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        }
}

  /**
   * Deletes a customer record.
   */
export class DeleteCustomerRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The ID of the customer to delete.
   */
    customerId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        customerId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.customerId = customerId;
        }
}

  /**
   * The response to a delete customer request.
   */
export class DeleteCustomerResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        }
}

  /**
   * Deletes a payment token.
   */
export class DeleteTokenRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The token to delete.
   */
    token: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        token: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.token = token;
        }
}

  /**
   * The response to a delete token request.
   */
export class DeleteTokenResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        }
}

  /**
   * Links a payment token with a customer record.
   */
export class LinkTokenRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The token to delete.
   */
    token: string | null = null;

  /**
   * BlockChyp assigned customer id.
   */
    customerId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        token: string | null = null,
        customerId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.token = token;
        this.customerId = customerId;
        }
}

  /**
   * Removes a link between a payment token with a customer record, if one exists.
   */
export class UnlinkTokenRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

  /**
   * The token to delete.
   */
    token: string | null = null;

  /**
   * BlockChyp assigned customer id.
   */
    customerId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        token: string | null = null,
        customerId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        this.token = token;
        this.customerId = customerId;
        }
}

  /**
   * Fields for HSA/FSA transactions.
   */
export class HealthcareMetadata {

  /**
   * A list of healthcare categories in the transaction.
   */
    types: HealthcareGroup[] | null = null;

  /**
   * That the purchased items were verified against an Inventory Information Approval
   * System (IIAS).
   */
    iiasVerified: boolean | null = null;

  /**
   * That the transaction is exempt from IIAS verification.
   */
    iiasExempt: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        types: HealthcareGroup[] | null = null,
        iiasVerified: boolean | null = null,
        iiasExempt: boolean | null = null,
        ) {
        this.types = types;
        this.iiasVerified = iiasVerified;
        this.iiasExempt = iiasExempt;
        }
}

  /**
   * A group of fields for a specific type of healthcare.
   */
export class HealthcareGroup {

  /**
   * The type of healthcare cost.
   */
    type: HealthcareType | null = null;

  /**
   * The amount of this type.
   */
    amount: string | null = null;

  /**
   * The provider ID used for Mastercard and Discover IIAS requests.
   */
    providerId: string | null = null;

  /**
   * The service type code used for Mastercard and Discover IIAS requests.
   */
    serviceTypeCode: string | null = null;

  /**
   * Thr payer ID/carrier ID used for Mastercard and Discover IIAS requests.
   */
    payerOrCarrierId: string | null = null;

  /**
   * The approval or reject reason code used for Mastercard and Discover IIAS requests.
   */
    approvalRejectReasonCode: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        type: HealthcareType | null = null,
        amount: string | null = null,
        providerId: string | null = null,
        serviceTypeCode: string | null = null,
        payerOrCarrierId: string | null = null,
        approvalRejectReasonCode: string | null = null,
        ) {
        this.type = type;
        this.amount = amount;
        this.providerId = providerId;
        this.serviceTypeCode = serviceTypeCode;
        this.payerOrCarrierId = payerOrCarrierId;
        this.approvalRejectReasonCode = approvalRejectReasonCode;
        }
}

  /**
   * Models a request for merchant information.
   */
export class GetMerchantsRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to return test or live merchants.
   */
    test: boolean | null = null;

  /**
   * Max to be returned in a single page. Defaults to the system max of 250.
   */
    maxResults: number | null = null;

  /**
   * Starting index for paged results. Defaults to zero.
   */
    startIndex: number | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        maxResults: number | null = null,
        startIndex: number | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.maxResults = maxResults;
        this.startIndex = startIndex;
        }
}

  /**
   * The results for a merchant list request.
   */
export class GetMerchantsResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Whether or not these results are for test or live merchants.
   */
    test: boolean | null = null;

  /**
   * Max to be returned in a single page. Defaults to the system max of 250.
   */
    maxResults: number | null = null;

  /**
   * Starting index for paged results. Defaults to zero.
   */
    startIndex: number | null = null;

  /**
   * Total number of results accessible through paging.
   */
    resultCount: number | null = null;

  /**
   * Merchants in the current page of results.
   */
    merchants: MerchantProfileResponse[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        test: boolean | null = null,
        maxResults: number | null = null,
        startIndex: number | null = null,
        resultCount: number | null = null,
        merchants: MerchantProfileResponse[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.test = test;
        this.maxResults = maxResults;
        this.startIndex = startIndex;
        this.resultCount = resultCount;
        this.merchants = merchants;
        }
}

  /**
   * The results for a merchant users list.
   */
export class MerchantUsersResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Whether or not these results are for test or live merchants.
   */
    test: boolean | null = null;

  /**
   * Users and pending invites associated with the merchant.
   */
    results: MerchantUser[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        test: boolean | null = null,
        results: MerchantUser[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.test = test;
        this.results = results;
        }
}

  /**
   * Details about a merchant user.
   */
export class MerchantUser {

  /**
   * Whether or not these results are for test or live merchants.
   */
    test: boolean | null = null;

  /**
   * The user's primary key.
   */
    id: string | null = null;

  /**
   * The user's first name.
   */
    firstName: string | null = null;

  /**
   * The user's last name.
   */
    lastName: string | null = null;

  /**
   * The user's email address.
   */
    email: string | null = null;

  /**
   * The user account status.
   */
    status: string | null = null;

  /**
   * The type of user account.
   */
    type: string | null = null;

  /**
   * The role codes assigned to this user.
   */
    roles: string[] | null = null;

  /**
   * Whether or not this user account is locked.
   */
    locked: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        test: boolean | null = null,
        id: string | null = null,
        firstName: string | null = null,
        lastName: string | null = null,
        email: string | null = null,
        status: string | null = null,
        type: string | null = null,
        roles: string[] | null = null,
        locked: boolean | null = null,
        ) {
        this.test = test;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.status = status;
        this.type = type;
        this.roles = roles;
        this.locked = locked;
        }
}

  /**
   * The results for a merchant platforms inquiry.
   */
export class MerchantPlatformsResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Whether or not these results are for test or live merchants.
   */
    test: boolean | null = null;

  /**
   * Enumerates merchant platform settings.
   */
    results: MerchantPlatform[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        test: boolean | null = null,
        results: MerchantPlatform[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.test = test;
        this.results = results;
        }
}

  /**
   * Used to up platform configuration for gateway merchants.
   */
export class UpdateMerchantPlatformRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * The merchant platform configuration.
   */
    platform: MerchantPlatform | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        platform: MerchantPlatform | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.platform = platform;
        }
}

  /**
   * Echoes back the state of the current platform configuration after a change.
   */
export class UpdateMerchantPlatformResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The current platform configuration.
   */
    platform: MerchantPlatform | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        platform: MerchantPlatform | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.platform = platform;
        }
}

  /**
   * Details about a merchant board platform configuration.
   */
export class MerchantPlatform {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Primary identifier for a given platform configuration.
   */
    id: string | null = null;

  /**
   * That a platform configuration is disabled.
   */
    disabled: boolean | null = null;

  /**
   * BlockChyp's code for the boarding platform.
   */
    platformCode: string | null = null;

  /**
   * The platform's priority in a multi platform setup.
   */
    priority: number | null = null;

  /**
   * An optional field specifying the merchant's card brand registration record.
   */
    registrationId: string | null = null;

  /**
   * The merchant's primary identifier.
   */
    merchantId: string | null = null;

  /**
   * The merchant id assigned by the acquiring bank.
   */
    acquirerMid: string | null = null;

  /**
   * Free form notes description the purpose or intent behind the platform
   * configuration.
   */
    notes: string | null = null;

  /**
   * The optional entry method code if a platform should only be used for specific entry
   * methods. Leave blank for 'all'.
   */
    entryMethod: string | null = null;

  /**
   * The date the platform configuration was first created.
   */
    dateCreated: string | null = null;

  /**
   * The date the platform configuration was last modified.
   */
    lastChange: string | null = null;

  /**
   * A map of configuration values specific to the boarding platform. These are not
   * published. Contact your BlockChyp rep for supported values.
   */
    configMap?: {[key: string]: string};

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        id: string | null = null,
        disabled: boolean | null = null,
        platformCode: string | null = null,
        priority: number | null = null,
        registrationId: string | null = null,
        merchantId: string | null = null,
        acquirerMid: string | null = null,
        notes: string | null = null,
        entryMethod: string | null = null,
        dateCreated: string | null = null,
        lastChange: string | null = null,
        configMap: {[key: string]: string} | undefined = undefined,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.id = id;
        this.disabled = disabled;
        this.platformCode = platformCode;
        this.priority = priority;
        this.registrationId = registrationId;
        this.merchantId = merchantId;
        this.acquirerMid = acquirerMid;
        this.notes = notes;
        this.entryMethod = entryMethod;
        this.dateCreated = dateCreated;
        this.lastChange = lastChange;
        this.configMap = configMap;
        }
}

  /**
   * Models a terminal profile request.
   */
export class TerminalProfileRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        }
}

  /**
   * Models a terminal profile response.
   */
export class TerminalProfileResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Enumerates all terminal profiles in the response.
   */
    results: TerminalProfile[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        results: TerminalProfile[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.results = results;
        }
}

  /**
   * Models a terminal deactivation request.
   */
export class TerminalDeactivationRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * The terminal name assigned to the terminal.
   */
    terminalName: string | null = null;

  /**
   * The id assigned by BlockChyp to the terminal.
   */
    terminalId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        terminalName: string | null = null,
        terminalId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.terminalName = terminalName;
        this.terminalId = terminalId;
        }
}

  /**
   * Models a terminal activation request.
   */
export class TerminalActivationRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * The optional merchant id.
   */
    merchantId: string | null = null;

  /**
   * The terminal activation code displayed on the terminal.
   */
    activationCode: string | null = null;

  /**
   * The name to be assigned to the terminal. Must be unique for the merchant account.
   */
    terminalName: string | null = null;

  /**
   * That the terminal should be activated in cloud relay mode.
   */
    cloudRelay: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        merchantId: string | null = null,
        activationCode: string | null = null,
        terminalName: string | null = null,
        cloudRelay: boolean | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.merchantId = merchantId;
        this.activationCode = activationCode;
        this.terminalName = terminalName;
        this.cloudRelay = cloudRelay;
        }
}

  /**
   * Details about a merchant board platform configuration.
   */
export class TerminalProfile {

  /**
   * Primary identifier for a given terminal.
   */
    id: string | null = null;

  /**
   * The terminal's local IP address.
   */
    ipAddress: string | null = null;

  /**
   * The name assigned to the terminal during activation.
   */
    terminalName: string | null = null;

  /**
   * The terminal type.
   */
    terminalType: string | null = null;

  /**
   * The terminal type display string.
   */
    terminalTypeDisplayString: string | null = null;

  /**
   * The current firmware version deployed on the terminal.
   */
    blockChypFirmwareVersion: string | null = null;

  /**
   * Whether or not the terminal is configured for cloud relay.
   */
    cloudBased: boolean | null = null;

  /**
   * The terminal's elliptic curve public key.
   */
    publicKey: string | null = null;

  /**
   * The manufacturer's serial number.
   */
    serialNumber: string | null = null;

  /**
   * Whether or not the terminal is currently online.
   */
    online: boolean | null = null;

  /**
   * The date and time the terminal was first brought online.
   */
    since: string | null = null;

  /**
   * The total memory on the terminal.
   */
    totalMemory: number | null = null;

  /**
   * The storage on the terminal.
   */
    totalStorage: number | null = null;

  /**
   * The available (unused) memory on the terminal.
   */
    availableMemory: number | null = null;

  /**
   * The available (unused) storage on the terminal.
   */
    availableStorage: number | null = null;

  /**
   * The memory currently in use on the terminal.
   */
    usedMemory: number | null = null;

  /**
   * The storage currently in use on the terminal.
   */
    usedStorage: number | null = null;

  /**
   * The branding asset currently displayed on the terminal.
   */
    brandingPreview: string | null = null;

  /**
   * The id of the terminal group to which the terminal belongs, if any.
   */
    groupId: string | null = null;

  /**
   * The name of the terminal group to which the terminal belongs, if any.
   */
    groupName: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        id: string | null = null,
        ipAddress: string | null = null,
        terminalName: string | null = null,
        terminalType: string | null = null,
        terminalTypeDisplayString: string | null = null,
        blockChypFirmwareVersion: string | null = null,
        cloudBased: boolean | null = null,
        publicKey: string | null = null,
        serialNumber: string | null = null,
        online: boolean | null = null,
        since: string | null = null,
        totalMemory: number | null = null,
        totalStorage: number | null = null,
        availableMemory: number | null = null,
        availableStorage: number | null = null,
        usedMemory: number | null = null,
        usedStorage: number | null = null,
        brandingPreview: string | null = null,
        groupId: string | null = null,
        groupName: string | null = null,
        ) {
        this.id = id;
        this.ipAddress = ipAddress;
        this.terminalName = terminalName;
        this.terminalType = terminalType;
        this.terminalTypeDisplayString = terminalTypeDisplayString;
        this.blockChypFirmwareVersion = blockChypFirmwareVersion;
        this.cloudBased = cloudBased;
        this.publicKey = publicKey;
        this.serialNumber = serialNumber;
        this.online = online;
        this.since = since;
        this.totalMemory = totalMemory;
        this.totalStorage = totalStorage;
        this.availableMemory = availableMemory;
        this.availableStorage = availableStorage;
        this.usedMemory = usedMemory;
        this.usedStorage = usedStorage;
        this.brandingPreview = brandingPreview;
        this.groupId = groupId;
        this.groupName = groupName;
        }
}

  /**
   * Models a full terms and conditions template.
   */
export class TermsAndConditionsTemplate {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Primary identifier for a given template.
   */
    id: string | null = null;

  /**
   * An alias or code used to refer to a template.
   */
    alias: string | null = null;

  /**
   * The name of the template. Displayed as the agreement title on the terminal.
   */
    name: string | null = null;

  /**
   * The full text of the agreement template.
   */
    content: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        id: string | null = null,
        alias: string | null = null,
        name: string | null = null,
        content: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.id = id;
        this.alias = alias;
        this.name = name;
        this.content = content;
        }
}

  /**
   * Models a request to retrieve or manipulate terms and conditions data.
   */
export class TermsAndConditionsTemplateRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Id of a single template.
   */
    templateId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        templateId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.templateId = templateId;
        }
}

  /**
   * Models a set of templates responsive to a request.
   */
export class TermsAndConditionsTemplateResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Results responsive to a request.
   */
    results: TermsAndConditionsTemplate[] | null = null;

  /**
   * An optional timeout override.
   */
    timeout: number | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        results: TermsAndConditionsTemplate[] | null = null,
        timeout: number | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.results = results;
        this.timeout = timeout;
        }
}

  /**
   * Models a Terms and Conditions history request.
   */
export class TermsAndConditionsLogRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * The identifier of the log entry to be returned for single result requests.
   */
    logEntryId: string | null = null;

  /**
   * Optional transaction id if only log entries related to a transaction should be
   * returned.
   */
    transactionId: string | null = null;

  /**
   * Max to be returned in a single page. Defaults to the system max of 250.
   */
    maxResults: number | null = null;

  /**
   * Starting index for paged results. Defaults to zero.
   */
    startIndex: number | null = null;

  /**
   * An optional start date for filtering response data.
   */
    startDate: string | null = null;

  /**
   * An optional end date for filtering response data.
   */
    endDate: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        logEntryId: string | null = null,
        transactionId: string | null = null,
        maxResults: number | null = null,
        startIndex: number | null = null,
        startDate: string | null = null,
        endDate: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.logEntryId = logEntryId;
        this.transactionId = transactionId;
        this.maxResults = maxResults;
        this.startIndex = startIndex;
        this.startDate = startDate;
        this.endDate = endDate;
        }
}

  /**
   * Models a Terms and Conditions history request.
   */
export class TermsAndConditionsLogResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Optional transaction id if only log entries related to a transaction should be
   * returned.
   */
    transactionId: string | null = null;

  /**
   * Max to be returned in a single page. Defaults to the system max of 250.
   */
    maxResults: number | null = null;

  /**
   * Starting index for paged results. Defaults to zero.
   */
    startIndex: number | null = null;

  /**
   * Total number of results accessible through paging.
   */
    resultCount: number | null = null;

  /**
   * The full result set responsive to the original request, subject to pagination
   * limits.
   */
    results: TermsAndConditionsLogEntry[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        transactionId: string | null = null,
        maxResults: number | null = null,
        startIndex: number | null = null,
        resultCount: number | null = null,
        results: TermsAndConditionsLogEntry[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.transactionId = transactionId;
        this.maxResults = maxResults;
        this.startIndex = startIndex;
        this.resultCount = resultCount;
        this.results = results;
        }
}

  /**
   * Models a Terms and Conditions log entry.
   */
export class TermsAndConditionsLogEntry {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Internal id for a Terms and Conditions entry.
   */
    id: string | null = null;

  /**
   * Id of the terminal that captured this terms and conditions entry.
   */
    terminalId: string | null = null;

  /**
   * Name of the terminal that captured this terms and conditions entry.
   */
    terminalName: string | null = null;

  /**
   * A flag indicating whether or not the terminal was a test terminal.
   */
    test: boolean | null = null;

  /**
   * Date and time the terms and conditions acceptance occurred.
   */
    timestamp: string | null = null;

  /**
   * Optional transaction ref if the terms and conditions was associated with a
   * transaction.
   */
    transactionRef: string | null = null;

  /**
   * Optional transaction id if only log entries related to a transaction should be
   * returned.
   */
    transactionId: string | null = null;

  /**
   * Alias of the terms and conditions template used for this entry, if any.
   */
    alias: string | null = null;

  /**
   * Title of the document displayed on the terminal at the time of capture.
   */
    name: string | null = null;

  /**
   * Full text of the document agreed to at the time of signature capture.
   */
    content: string | null = null;

  /**
   * First 32 characters of the full text. Used to support user interfaces that show
   * summaries.
   */
    contentLeader: string | null = null;

  /**
   * A flag that indicates whether or not a signature has been captured.
   */
    hasSignature: boolean | null = null;

  /**
   * The image format to be used for returning signatures.
   */
    sigFormat?: SignatureFormat;

  /**
   * The base 64 encoded signature image if the format requested.
   */
    signature: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        id: string | null = null,
        terminalId: string | null = null,
        terminalName: string | null = null,
        test: boolean | null = null,
        timestamp: string | null = null,
        transactionRef: string | null = null,
        transactionId: string | null = null,
        alias: string | null = null,
        name: string | null = null,
        content: string | null = null,
        contentLeader: string | null = null,
        hasSignature: boolean | null = null,
        sigFormat: SignatureFormat | undefined = undefined,
        signature: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.id = id;
        this.terminalId = terminalId;
        this.terminalName = terminalName;
        this.test = test;
        this.timestamp = timestamp;
        this.transactionRef = transactionRef;
        this.transactionId = transactionId;
        this.alias = alias;
        this.name = name;
        this.content = content;
        this.contentLeader = contentLeader;
        this.hasSignature = hasSignature;
        this.sigFormat = sigFormat;
        this.signature = signature;
        }
}

  /**
   * Models a survey question.
   */
export class SurveyQuestion {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Internal id for a survey question.
   */
    id: string | null = null;

  /**
   * Ordinal number indicating the position of the survey question in the post
   * transaction sequence.
   */
    ordinal: number | null = null;

  /**
   * Determines whether or not the question will be presented post transaction.
   */
    enabled: boolean | null = null;

  /**
   * The full text of the transaction.
   */
    questionText: string | null = null;

  /**
   * The type of question. Valid values are 'yes_no' and 'scaled'.
   */
    questionType: string | null = null;

  /**
   * The total number of transactions processed during the query period if results are
   * requested.
   */
    transactionCount?: number;

  /**
   * The total number of responses during the query period if results are requested.
   */
    responseCount?: number;

  /**
   * The response rate, expressed as a ratio, if results are requested.
   */
    responseRate?: number;

  /**
   * The set of response data points.
   */
    responses: SurveyDataPoint[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        id: string | null = null,
        ordinal: number | null = null,
        enabled: boolean | null = null,
        questionText: string | null = null,
        questionType: string | null = null,
        transactionCount: number = 0,
        responseCount: number = 0,
        responseRate: number = 0,
        responses: SurveyDataPoint[] | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.id = id;
        this.ordinal = ordinal;
        this.enabled = enabled;
        this.questionText = questionText;
        this.questionType = questionType;
        this.transactionCount = transactionCount;
        this.responseCount = responseCount;
        this.responseRate = responseRate;
        this.responses = responses;
        }
}

  /**
   * Models a request to retrieve or manipulate survey questions.
   */
export class SurveyQuestionRequest {

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Id of a single question.
   */
    questionId: string | null = null;

  /**
   * An optional timeout override.
   */
    timeout: number | null = null;

    // Constructor with default values for optional fields
    constructor(
        test: boolean | null = null,
        questionId: string | null = null,
        timeout: number | null = null,
        ) {
        this.test = test;
        this.questionId = questionId;
        this.timeout = timeout;
        }
}

  /**
   * Models a survey question response.
   */
export class SurveyQuestionResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The full result set responsive to the original request.
   */
    results: SurveyQuestion[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        results: SurveyQuestion[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.results = results;
        }
}

  /**
   * Models a request to retrieve or manipulate survey questions.
   */
export class SurveyDataPoint {

  /**
   * A unique identifier for a specific answer type.
   */
    answerKey: string | null = null;

  /**
   * A narrative description of the answer.
   */
    answerDescription: string | null = null;

  /**
   * The number of responses.
   */
    responseCount: number | null = null;

  /**
   * Response rate as a percentage of total transactions.
   */
    responsePercentage: number | null = null;

  /**
   * The average transaction amount for a given answer.
   */
    averageTransaction: number | null = null;

    // Constructor with default values for optional fields
    constructor(
        answerKey: string | null = null,
        answerDescription: string | null = null,
        responseCount: number | null = null,
        responsePercentage: number | null = null,
        averageTransaction: number | null = null,
        ) {
        this.answerKey = answerKey;
        this.answerDescription = answerDescription;
        this.responseCount = responseCount;
        this.responsePercentage = responsePercentage;
        this.averageTransaction = averageTransaction;
        }
}

  /**
   * Models a request to retrieve survey results.
   */
export class SurveyResultsRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Id of a single question.
   */
    questionId: string | null = null;

  /**
   * An optional start date for filtering response data.
   */
    startDate: string | null = null;

  /**
   * An optional end date for filtering response data.
   */
    endDate: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        questionId: string | null = null,
        startDate: string | null = null,
        endDate: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.questionId = questionId;
        this.startDate = startDate;
        this.endDate = endDate;
        }
}

  /**
   * Models a request to retrieve survey results.
   */
export class MediaMetadata {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Id used to identify the media asset.
   */
    id: string | null = null;

  /**
   * The original filename assigned to the media asset.
   */
    originalFile: string | null = null;

  /**
   * The descriptive name of the media asset.
   */
    name: string | null = null;

  /**
   * A description of the media asset and its purpose.
   */
    description: string | null = null;

  /**
   * An array of tags associated with a media asset.
   */
    tags: string[] | null = null;

  /**
   * The url for the full resolution versio of the media file.
   */
    fileUrl: string | null = null;

  /**
   * The url for to the thumbnail of an image.
   */
    thumbnailUrl: string | null = null;

  /**
   * An identifier used to flag video files.
   */
    video: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        id: string | null = null,
        originalFile: string | null = null,
        name: string | null = null,
        description: string | null = null,
        tags: string[] | null = null,
        fileUrl: string | null = null,
        thumbnailUrl: string | null = null,
        video: boolean | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.id = id;
        this.originalFile = originalFile;
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.fileUrl = fileUrl;
        this.thumbnailUrl = thumbnailUrl;
        this.video = video;
        }
}

  /**
   * Models information needed to process a file upload.
   */
export class UploadMetadata {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Optional id used to track status and progress of an upload while in progress.
   */
    uploadId: string | null = null;

  /**
   * The size of the file to be uploaded in bytes.
   */
    fileSize: number | null = null;

  /**
   * The name of file to be uploaded.
   */
    fileName: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        uploadId: string | null = null,
        fileSize: number | null = null,
        fileName: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.uploadId = uploadId;
        this.fileSize = fileSize;
        this.fileName = fileName;
        }
}

  /**
   * Models the current status of a file upload.
   */
export class UploadStatus {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Id used to track status and progress of an upload while in progress.
   */
    id: string | null = null;

  /**
   * The media id assigned to the result.
   */
    mediaId: string | null = null;

  /**
   * The size of the file to be uploaded in bytes.
   */
    fileSize: number | null = null;

  /**
   * The amount of the file already uploaded.
   */
    uploadedAmount: number | null = null;

  /**
   * The current status of a file upload.
   */
    status: string | null = null;

  /**
   * Whether or not the upload and associated file processing is complete.
   */
    complete: boolean | null = null;

  /**
   * Whether or not the file is processing. This normally applied to video files
   * undergoing format transcoding.
   */
    processing: boolean | null = null;

  /**
   * Current upload progress rounded to the nearest integer.
   */
    percentage: number | null = null;

  /**
   * The url of a thumbnail for the file, if available.
   */
    thumbnailLocation: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        id: string | null = null,
        mediaId: string | null = null,
        fileSize: number | null = null,
        uploadedAmount: number | null = null,
        status: string | null = null,
        complete: boolean | null = null,
        processing: boolean | null = null,
        percentage: number | null = null,
        thumbnailLocation: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.id = id;
        this.mediaId = mediaId;
        this.fileSize = fileSize;
        this.uploadedAmount = uploadedAmount;
        this.status = status;
        this.complete = complete;
        this.processing = processing;
        this.percentage = percentage;
        this.thumbnailLocation = thumbnailLocation;
        }
}

  /**
   * Used to request the status of a file upload.
   */
export class UploadStatusRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Id used to track status and progress of an upload while in progress.
   */
    uploadId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        uploadId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.uploadId = uploadId;
        }
}

  /**
   * Models a request to retrieve or manipulate media assets.
   */
export class MediaRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Id used to track a media asset.
   */
    mediaId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        mediaId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.mediaId = mediaId;
        }
}

  /**
   * Models a media library response.
   */
export class MediaLibraryResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Max to be returned in a single page. Defaults to the system max of 250.
   */
    maxResults: number | null = null;

  /**
   * Starting index for paged results. Defaults to zero.
   */
    startIndex: number | null = null;

  /**
   * Total number of results accessible through paging.
   */
    resultCount: number | null = null;

  /**
   * Total number of pages.
   */
    pages: number | null = null;

  /**
   * Page currently selected through paging.
   */
    currentPage: number | null = null;

  /**
   * Enumerates all media assets available in the context.
   */
    results: MediaMetadata[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        maxResults: number | null = null,
        startIndex: number | null = null,
        resultCount: number | null = null,
        pages: number | null = null,
        currentPage: number | null = null,
        results: MediaMetadata[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.maxResults = maxResults;
        this.startIndex = startIndex;
        this.resultCount = resultCount;
        this.pages = pages;
        this.currentPage = currentPage;
        this.results = results;
        }
}

  /**
   * Models a slide within a slide show.
   */
export class Slide {

  /**
   * The id for the media asset to be used for this slide. Must be an image.
   */
    mediaId: string | null = null;

  /**
   * Position of the slide within the slide show.
   */
    ordinal: number | null = null;

  /**
   * The fully qualified thumbnail url for the slide.
   */
    thumbnailUrl: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        mediaId: string | null = null,
        ordinal: number | null = null,
        thumbnailUrl: string | null = null,
        ) {
        this.mediaId = mediaId;
        this.ordinal = ordinal;
        this.thumbnailUrl = thumbnailUrl;
        }
}

  /**
   * Models a media library response.
   */
export class SlideShow {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The primary id for the slide show.
   */
    id: string | null = null;

  /**
   * The name of the slide show.
   */
    name: string | null = null;

  /**
   * Time between slides in seconds.
   */
    delay: number | null = null;

  /**
   * Enumerates all slides in the display sequence.
   */
    slides: Slide[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        id: string | null = null,
        name: string | null = null,
        delay: number | null = null,
        slides: Slide[] | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.id = id;
        this.name = name;
        this.delay = delay;
        this.slides = slides;
        }
}

  /**
   * Models a slide show response.
   */
export class SlideShowResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Max to be returned in a single page. Defaults to the system max of 250.
   */
    maxResults: number | null = null;

  /**
   * Starting index for paged results. Defaults to zero.
   */
    startIndex: number | null = null;

  /**
   * Total number of results accessible through paging.
   */
    resultCount: number | null = null;

  /**
   * Enumerates all slide shows responsive to the original query.
   */
    results: SlideShow[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        maxResults: number | null = null,
        startIndex: number | null = null,
        resultCount: number | null = null,
        results: SlideShow[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.maxResults = maxResults;
        this.startIndex = startIndex;
        this.resultCount = resultCount;
        this.results = results;
        }
}

  /**
   * Models a request to retrieve or manipulate terminal slide shows.
   */
export class SlideShowRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Id used to track a slide show.
   */
    slideShowId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        slideShowId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.slideShowId = slideShowId;
        }
}

  /**
   * Models a request to retrieve or manipulate terminal slide shows.
   */
export class BrandingAssetRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Id used to track a branding asset.
   */
    assetId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        assetId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.assetId = assetId;
        }
}

  /**
   * Models the priority and display settings for terminal media.
   */
export class BrandingAsset {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Id used to track a branding asset.
   */
    id: string | null = null;

  /**
   * The id owner of the tenant who owns the branding asset.
   */
    ownerId: string | null = null;

  /**
   * The terminal id if this branding asset is specific to a single terminal.
   */
    terminalId: string | null = null;

  /**
   * The terminal group id if this branding asset is specific to a terminal group.
   */
    terminalGroupId: string | null = null;

  /**
   * The merchant id associated with this branding asset.
   */
    merchantId: string | null = null;

  /**
   * The organization id associated with this branding asset.
   */
    organizationId: string | null = null;

  /**
   * The partner id associated with this branding asset.
   */
    partnerId: string | null = null;

  /**
   * The slide show associated with this branding asset, if any. A branding asset can
   * reference a slide show or media asset, but not both.
   */
    slideShowId: string | null = null;

  /**
   * The media id associated with this branding asset, if any. A branding asset can
   * reference a slide show or media asset, but not both.
   */
    mediaId: string | null = null;

  /**
   * Applies standard margins to images displayed on terminals. Usually the best option
   * for logos.
   */
    padded: boolean | null = null;

  /**
   * The start date if this asset should be displayed based on a schedule. Format:
   * MM/DD/YYYY.
   */
    startDate: string | null = null;

  /**
   * The end date if this asset should be displayed based on a schedule. Format:
   * MM/DD/YYYY.
   */
    endDate: string | null = null;

  /**
   * An array of days of the week during which a branding asset should be enabled. Days of the
   * week are coded as integers starting with Sunday (0) and ending with Saturday (6).
   */
    daysOfWeek: number[] | null = null;

  /**
   * The start date if this asset should be displayed based on a schedule. Format:
   * MM/DD/YYYY.
   */
    startTime: string | null = null;

  /**
   * The end date if this asset should be displayed based on a schedule. Format:
   * MM/DD/YYYY.
   */
    endTime: string | null = null;

  /**
   * The ordinal number marking the position of this asset within the branding stack.
   */
    ordinal: number | null = null;

  /**
   * Enables the asset for display.
   */
    enabled: boolean | null = null;

  /**
   * If true, the asset will be displayed in the merchant portal, but not on merchant
   * terminal hardware. Developers will usually want this to always be false.
   */
    preview: boolean | null = null;

  /**
   * Id of the user who created this branding asset, if applicable.
   */
    userId: string | null = null;

  /**
   * Name of the user who created this branding asset, if applicable.
   */
    userName: string | null = null;

  /**
   * The fully qualified URL of the thumbnail image for this branding asset.
   */
    thumbnail: string | null = null;

  /**
   * The time and date this asset was last modified.
   */
    lastModified: string | null = null;

  /**
   * A field for notes related to a branding asset.
   */
    notes: string | null = null;

  /**
   * If true, the API credentials used to retrieve the branding asset record can be used to
   * update it.
   */
    editable: boolean | null = null;

  /**
   * The type of branding asset.
   */
    assetType: string | null = null;

  /**
   * The type of user or tenant that owns this asset.
   */
    ownerType: string | null = null;

  /**
   * A recommended caption for displaying the owner. Takes into account multiple
   * organization types.
   */
    ownerTypeCaption: string | null = null;

  /**
   * The name of the tenant or entity that owns the branding asset.
   */
    ownerName: string | null = null;

  /**
   * The recommended image to be displayed when rendering a preview of this branding
   * asset.
   */
    previewImage: string | null = null;

  /**
   * A compact narrative string explaining the effective date and time rules for a
   * branding asset.
   */
    narrativeEffectiveDates: string | null = null;

  /**
   * A compact narrative string explaining the display period for a branding asset.
   */
    narrativeDisplayPeriod: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        id: string | null = null,
        ownerId: string | null = null,
        terminalId: string | null = null,
        terminalGroupId: string | null = null,
        merchantId: string | null = null,
        organizationId: string | null = null,
        partnerId: string | null = null,
        slideShowId: string | null = null,
        mediaId: string | null = null,
        padded: boolean | null = null,
        startDate: string | null = null,
        endDate: string | null = null,
        daysOfWeek: number[] | null = null,
        startTime: string | null = null,
        endTime: string | null = null,
        ordinal: number | null = null,
        enabled: boolean | null = null,
        preview: boolean | null = null,
        userId: string | null = null,
        userName: string | null = null,
        thumbnail: string | null = null,
        lastModified: string | null = null,
        notes: string | null = null,
        editable: boolean | null = null,
        assetType: string | null = null,
        ownerType: string | null = null,
        ownerTypeCaption: string | null = null,
        ownerName: string | null = null,
        previewImage: string | null = null,
        narrativeEffectiveDates: string | null = null,
        narrativeDisplayPeriod: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.id = id;
        this.ownerId = ownerId;
        this.terminalId = terminalId;
        this.terminalGroupId = terminalGroupId;
        this.merchantId = merchantId;
        this.organizationId = organizationId;
        this.partnerId = partnerId;
        this.slideShowId = slideShowId;
        this.mediaId = mediaId;
        this.padded = padded;
        this.startDate = startDate;
        this.endDate = endDate;
        this.daysOfWeek = daysOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
        this.ordinal = ordinal;
        this.enabled = enabled;
        this.preview = preview;
        this.userId = userId;
        this.userName = userName;
        this.thumbnail = thumbnail;
        this.lastModified = lastModified;
        this.notes = notes;
        this.editable = editable;
        this.assetType = assetType;
        this.ownerType = ownerType;
        this.ownerTypeCaption = ownerTypeCaption;
        this.ownerName = ownerName;
        this.previewImage = previewImage;
        this.narrativeEffectiveDates = narrativeEffectiveDates;
        this.narrativeDisplayPeriod = narrativeDisplayPeriod;
        }
}

  /**
   * Models a branding asset response.
   */
export class BrandingAssetResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The id owner of this branding stack.
   */
    ownerId: string | null = null;

  /**
   * The type of user or tenant that owns this branding stack.
   */
    ownerType: string | null = null;

  /**
   * The name of the entity or tenant that owns this branding stack.
   */
    ownerName: string | null = null;

  /**
   * The owner level currently being displayed.
   */
    levelName: string | null = null;

  /**
   * A narrative description of the current simulate time.
   */
    narrativeTime: string | null = null;

  /**
   * The asset currently displayed on the terminal.
   */
    activeAsset: BrandingAsset | null = null;

  /**
   * Enumerates all branding assets in a given credential scope.
   */
    results: BrandingAsset[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        ownerId: string | null = null,
        ownerType: string | null = null,
        ownerName: string | null = null,
        levelName: string | null = null,
        narrativeTime: string | null = null,
        activeAsset: BrandingAsset | null = null,
        results: BrandingAsset[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.ownerId = ownerId;
        this.ownerType = ownerType;
        this.ownerName = ownerName;
        this.levelName = levelName;
        this.narrativeTime = narrativeTime;
        this.activeAsset = activeAsset;
        this.results = results;
        }
}

  /**
   * Models a request to retrieve pricing policy information. The default policy for the
   * merchant is returned if no idea is provided.
   */
export class PricingPolicyRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * An optional id used to retrieve a specific pricing policy.
   */
    id: string | null = null;

  /**
   * An optional merchant id if this request is submitted via partner credentials.
   */
    merchantId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        id: string | null = null,
        merchantId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.id = id;
        this.merchantId = merchantId;
        }
}

  /**
   * Models a single set of pricing values for a pricing policy.
   */
export class PricePoint {

  /**
   * The string representation of a per transaction minimum.
   */
    buyRate: string | null = null;

  /**
   * The string representation of the current fee per transaction.
   */
    current: string | null = null;

  /**
   * The string representation of a per transaction gouge limit.
   */
    limit: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        buyRate: string | null = null,
        current: string | null = null,
        limit: string | null = null,
        ) {
        this.buyRate = buyRate;
        this.current = current;
        this.limit = limit;
        }
}

  /**
   * Models a the response to a pricing policy request.
   */
export class PricingPolicyResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The id owner of the pricing policy.
   */
    id: string | null = null;

  /**
   * The id of the partner associated with this pricing policy.
   */
    partnerId: string | null = null;

  /**
   * The id of the merchant associated with this pricing policy.
   */
    merchantId: string | null = null;

  /**
   * Whether or not a pricing policy is enabled.
   */
    enabled: boolean | null = null;

  /**
   * The date and time when the pricing policy was created.
   */
    timestamp: string | null = null;

  /**
   * The description of the pricing policy.
   */
    description: string | null = null;

  /**
   * Type of pricing policy (flat vs interchange).
   */
    policyType: string | null = null;

  /**
   * The percentage split of the of buy rate markup with BlockChyp.
   */
    partnerMarkupSplit: string | null = null;

  /**
   * The flat rate percentage for standard card present transactions.
   */
    standardFlatRate: PricePoint | null = null;

  /**
   * The flat rate percentage for debit card transactions.
   */
    debitFlatRate: PricePoint | null = null;

  /**
   * The flat rate percentage for ecommerce transactions.
   */
    ecommerceFlatRate: PricePoint | null = null;

  /**
   * The flat rate percentage for keyed/manual transactions.
   */
    keyedFlatRate: PricePoint | null = null;

  /**
   * The flat rate percentage for premium (high rewards) card transactions.
   */
    premiumFlatRate: PricePoint | null = null;

  /**
   * The interchange markup percentage for standard card present transactions.
   */
    standardInterchangeMarkup: PricePoint | null = null;

  /**
   * The interchange markup percentage for debit card transactions.
   */
    debitInterchangeMarkup: PricePoint | null = null;

  /**
   * The interchange markup percentage for ecommerce transactions.
   */
    ecommerceInterchangeMarkup: PricePoint | null = null;

  /**
   * The interchange markup percentage for keyed/manual transactions.
   */
    keyedInterchangeMarkup: PricePoint | null = null;

  /**
   * The interchange markup percentage for premium (high rewards) card transactions.
   */
    premiumInterchangeMarkup: PricePoint | null = null;

  /**
   * The transaction fee for standard card present transactions.
   */
    standardTransactionFee: PricePoint | null = null;

  /**
   * The transaction fee for debit card transactions.
   */
    debitTransactionFee: PricePoint | null = null;

  /**
   * The transaction fee for ecommerce transactions.
   */
    ecommerceTransactionFee: PricePoint | null = null;

  /**
   * The transaction fee for keyed/manual transactions.
   */
    keyedTransactionFee: PricePoint | null = null;

  /**
   * The transaction fee for premium (high rewards) card transactions.
   */
    premiumTransactionFee: PricePoint | null = null;

  /**
   * The transaction fee for EBT card transactions.
   */
    ebtTransactionFee: PricePoint | null = null;

  /**
   * A flat fee charged per month.
   */
    monthlyFee: PricePoint | null = null;

  /**
   * A flat fee charged per year.
   */
    annualFee: PricePoint | null = null;

  /**
   * The fee per dispute or chargeback.
   */
    chargebackFee: PricePoint | null = null;

  /**
   * The fee per address verification operation.
   */
    avsFee: PricePoint | null = null;

  /**
   * The fee per batch.
   */
    batchFee: PricePoint | null = null;

  /**
   * The voice authorization fee.
   */
    voiceAuthFee: PricePoint | null = null;

  /**
   * The one time account setup fee.
   */
    accountSetupFee: PricePoint | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        id: string | null = null,
        partnerId: string | null = null,
        merchantId: string | null = null,
        enabled: boolean | null = null,
        timestamp: string | null = null,
        description: string | null = null,
        policyType: string | null = null,
        partnerMarkupSplit: string | null = null,
        standardFlatRate: PricePoint | null = null,
        debitFlatRate: PricePoint | null = null,
        ecommerceFlatRate: PricePoint | null = null,
        keyedFlatRate: PricePoint | null = null,
        premiumFlatRate: PricePoint | null = null,
        standardInterchangeMarkup: PricePoint | null = null,
        debitInterchangeMarkup: PricePoint | null = null,
        ecommerceInterchangeMarkup: PricePoint | null = null,
        keyedInterchangeMarkup: PricePoint | null = null,
        premiumInterchangeMarkup: PricePoint | null = null,
        standardTransactionFee: PricePoint | null = null,
        debitTransactionFee: PricePoint | null = null,
        ecommerceTransactionFee: PricePoint | null = null,
        keyedTransactionFee: PricePoint | null = null,
        premiumTransactionFee: PricePoint | null = null,
        ebtTransactionFee: PricePoint | null = null,
        monthlyFee: PricePoint | null = null,
        annualFee: PricePoint | null = null,
        chargebackFee: PricePoint | null = null,
        avsFee: PricePoint | null = null,
        batchFee: PricePoint | null = null,
        voiceAuthFee: PricePoint | null = null,
        accountSetupFee: PricePoint | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.id = id;
        this.partnerId = partnerId;
        this.merchantId = merchantId;
        this.enabled = enabled;
        this.timestamp = timestamp;
        this.description = description;
        this.policyType = policyType;
        this.partnerMarkupSplit = partnerMarkupSplit;
        this.standardFlatRate = standardFlatRate;
        this.debitFlatRate = debitFlatRate;
        this.ecommerceFlatRate = ecommerceFlatRate;
        this.keyedFlatRate = keyedFlatRate;
        this.premiumFlatRate = premiumFlatRate;
        this.standardInterchangeMarkup = standardInterchangeMarkup;
        this.debitInterchangeMarkup = debitInterchangeMarkup;
        this.ecommerceInterchangeMarkup = ecommerceInterchangeMarkup;
        this.keyedInterchangeMarkup = keyedInterchangeMarkup;
        this.premiumInterchangeMarkup = premiumInterchangeMarkup;
        this.standardTransactionFee = standardTransactionFee;
        this.debitTransactionFee = debitTransactionFee;
        this.ecommerceTransactionFee = ecommerceTransactionFee;
        this.keyedTransactionFee = keyedTransactionFee;
        this.premiumTransactionFee = premiumTransactionFee;
        this.ebtTransactionFee = ebtTransactionFee;
        this.monthlyFee = monthlyFee;
        this.annualFee = annualFee;
        this.chargebackFee = chargebackFee;
        this.avsFee = avsFee;
        this.batchFee = batchFee;
        this.voiceAuthFee = voiceAuthFee;
        this.accountSetupFee = accountSetupFee;
        }
}

  /**
   * Models a request to retrieve a list of partner statements.
   */
export class PartnerStatementListRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Optional start date filter for batch history.
   */
    startDate?: Date;

  /**
   * Optional end date filter for batch history.
   */
    endDate?: Date;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        startDate: Date | undefined = undefined,
        endDate: Date | undefined = undefined,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.startDate = startDate;
        this.endDate = endDate;
        }
}

  /**
   * Models a basic information about partner statements for use in list or search
   * results.
   */
export class PartnerStatementSummary {

  /**
   * The id owner of the pricing policy.
   */
    id: string | null = null;

  /**
   * The date the statement was generated.
   */
    statementDate: Date | null = null;

  /**
   * Total volume in numeric format.
   */
    totalVolume: number | null = null;

  /**
   * The string formatted total volume on the statement.
   */
    totalVolumeFormatted: string | null = null;

  /**
   * The total volume on the statement.
   */
    transactionCount: number | null = null;

  /**
   * The commission earned on the portfolio during the statement period.
   */
    partnerCommission: number | null = null;

  /**
   * The string formatted total volume on the statement.
   */
    partnerCommissionFormatted: string | null = null;

  /**
   * The status of the statement.
   */
    status: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        id: string | null = null,
        statementDate: Date | null = null,
        totalVolume: number | null = null,
        totalVolumeFormatted: string | null = null,
        transactionCount: number | null = null,
        partnerCommission: number | null = null,
        partnerCommissionFormatted: string | null = null,
        status: string | null = null,
        ) {
        this.id = id;
        this.statementDate = statementDate;
        this.totalVolume = totalVolume;
        this.totalVolumeFormatted = totalVolumeFormatted;
        this.transactionCount = transactionCount;
        this.partnerCommission = partnerCommission;
        this.partnerCommissionFormatted = partnerCommissionFormatted;
        this.status = status;
        }
}

  /**
   * Models results to a partner statement list inquiry.
   */
export class PartnerStatementListResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The list of statements summaries.
   */
    statements: PartnerStatementSummary[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        statements: PartnerStatementSummary[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.statements = statements;
        }
}

  /**
   * Models a request to retrieve detailed partner statement information.
   */
export class PartnerStatementDetailRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Optional start date filter for batch history.
   */
    id: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        id: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.id = id;
        }
}

  /**
   * Models a response to retrieve detailed partner statement information.
   */
export class PartnerStatementDetailResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Optional start date filter for batch history.
   */
    id: string | null = null;

  /**
   * The id of the partner associated with the statement.
   */
    partnerId: string | null = null;

  /**
   * The name of the partner associated with the statement.
   */
    partnerName: string | null = null;

  /**
   * The date the statement was generated.
   */
    statementDate: Date | null = null;

  /**
   * Total volume in numeric format.
   */
    totalVolume: number | null = null;

  /**
   * The string formatted total volume on the statement.
   */
    totalVolumeFormatted: string | null = null;

  /**
   * The total volume on the statement.
   */
    transactionCount: number | null = null;

  /**
   * The commission earned on the portfolio during the statement period.
   */
    partnerCommission: number | null = null;

  /**
   * The string formatted partner commission on the statement.
   */
    partnerCommissionFormatted: string | null = null;

  /**
   * The partner commission earned on the portfolio during the statement period as a ratio
   * against volume.
   */
    partnerCommissionsOnVolume: number | null = null;

  /**
   * The string formatted version of partner commissions as a percentage of volume.
   */
    partnerCommissionsOnVolumeFormatted: string | null = null;

  /**
   * The status of the statement.
   */
    status: string | null = null;

  /**
   * The line item detail associated with the statement.
   */
    lineItems: PartnerStatementLineItem[] | null = null;

  /**
   * The list of adjustments made against the statement, if any.
   */
    adjustments: PartnerStatementAdjustment[] | null = null;

  /**
   * The list of partner disbursements made against the partner statement.
   */
    disbursements: PartnerStatementDisbursement[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        id: string | null = null,
        partnerId: string | null = null,
        partnerName: string | null = null,
        statementDate: Date | null = null,
        totalVolume: number | null = null,
        totalVolumeFormatted: string | null = null,
        transactionCount: number | null = null,
        partnerCommission: number | null = null,
        partnerCommissionFormatted: string | null = null,
        partnerCommissionsOnVolume: number | null = null,
        partnerCommissionsOnVolumeFormatted: string | null = null,
        status: string | null = null,
        lineItems: PartnerStatementLineItem[] | null = null,
        adjustments: PartnerStatementAdjustment[] | null = null,
        disbursements: PartnerStatementDisbursement[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.id = id;
        this.partnerId = partnerId;
        this.partnerName = partnerName;
        this.statementDate = statementDate;
        this.totalVolume = totalVolume;
        this.totalVolumeFormatted = totalVolumeFormatted;
        this.transactionCount = transactionCount;
        this.partnerCommission = partnerCommission;
        this.partnerCommissionFormatted = partnerCommissionFormatted;
        this.partnerCommissionsOnVolume = partnerCommissionsOnVolume;
        this.partnerCommissionsOnVolumeFormatted = partnerCommissionsOnVolumeFormatted;
        this.status = status;
        this.lineItems = lineItems;
        this.adjustments = adjustments;
        this.disbursements = disbursements;
        }
}

  /**
   * Models line item level data for a partner statement.
   */
export class PartnerStatementLineItem {

  /**
   * The line item id.
   */
    id: string | null = null;

  /**
   * The invoice id for the underlying merchant statement.
   */
    invoiceId: string | null = null;

  /**
   * The total fees charged to the merchant.
   */
    totalFees: number | null = null;

  /**
   * The total fees charge formatted as a currency string.
   */
    totalFeesFormatted: string | null = null;

  /**
   * The total fees charged to the merchant as ratio of volume.
   */
    totalFeesOnVolume: number | null = null;

  /**
   * The total fees charged to the merchant as percentage of volume.
   */
    totalFeesOnVolumeFormatted: string | null = null;

  /**
   * The id of the merchant.
   */
    merchantId: string | null = null;

  /**
   * The corporate name of the merchant.
   */
    merchantName: string | null = null;

  /**
   * The dba name of the merchant.
   */
    dbaName: string | null = null;

  /**
   * The date the statement was generated.
   */
    statementDate: Date | null = null;

  /**
   * Volume in numeric format.
   */
    volume: number | null = null;

  /**
   * The string formatted total volume on the statement.
   */
    volumeFormatted: string | null = null;

  /**
   * The total volume on the statement.
   */
    transactionCount: number | null = null;

  /**
   * The total interchange fees incurred this period.
   */
    interchange: number | null = null;

  /**
   * The currency formatted form of interchange.
   */
    interchangeFormatted: string | null = null;

  /**
   * The total interchange as a ratio on volume incurred this period.
   */
    interchangeOnVolume: number | null = null;

  /**
   * The total interchange as a percentage of volume.
   */
    interchangeOnVolumeFormatted: string | null = null;

  /**
   * The total card brand assessments fees incurred this period.
   */
    assessments: number | null = null;

  /**
   * The currency formatted form of card brand assessments.
   */
    assessmentsFormatted: string | null = null;

  /**
   * The total card brand assessments as a ratio on volume incurred this period.
   */
    assessmentsOnVolume: number | null = null;

  /**
   * The total card brand assessments as a percentage of volume.
   */
    assessmentsOnVolumeFormatted: string | null = null;

  /**
   * The commission earned on the portfolio during the statement period.
   */
    partnerCommission: number | null = null;

  /**
   * The string formatted total volume on the statement.
   */
    partnerCommissionFormatted: string | null = null;

  /**
   * The total fees charge to the partner due to buy rates.
   */
    buyRate: number | null = null;

  /**
   * The currency formatted form of partner buy rate.
   */
    buyRateFormatted: string | null = null;

  /**
   * Refers to card brand fees shared between BlockChyp and the partner.
   */
    hardCosts: number | null = null;

  /**
   * The currency formatted form of hard costs.
   */
    hardCostsFormatted: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        id: string | null = null,
        invoiceId: string | null = null,
        totalFees: number | null = null,
        totalFeesFormatted: string | null = null,
        totalFeesOnVolume: number | null = null,
        totalFeesOnVolumeFormatted: string | null = null,
        merchantId: string | null = null,
        merchantName: string | null = null,
        dbaName: string | null = null,
        statementDate: Date | null = null,
        volume: number | null = null,
        volumeFormatted: string | null = null,
        transactionCount: number | null = null,
        interchange: number | null = null,
        interchangeFormatted: string | null = null,
        interchangeOnVolume: number | null = null,
        interchangeOnVolumeFormatted: string | null = null,
        assessments: number | null = null,
        assessmentsFormatted: string | null = null,
        assessmentsOnVolume: number | null = null,
        assessmentsOnVolumeFormatted: string | null = null,
        partnerCommission: number | null = null,
        partnerCommissionFormatted: string | null = null,
        buyRate: number | null = null,
        buyRateFormatted: string | null = null,
        hardCosts: number | null = null,
        hardCostsFormatted: string | null = null,
        ) {
        this.id = id;
        this.invoiceId = invoiceId;
        this.totalFees = totalFees;
        this.totalFeesFormatted = totalFeesFormatted;
        this.totalFeesOnVolume = totalFeesOnVolume;
        this.totalFeesOnVolumeFormatted = totalFeesOnVolumeFormatted;
        this.merchantId = merchantId;
        this.merchantName = merchantName;
        this.dbaName = dbaName;
        this.statementDate = statementDate;
        this.volume = volume;
        this.volumeFormatted = volumeFormatted;
        this.transactionCount = transactionCount;
        this.interchange = interchange;
        this.interchangeFormatted = interchangeFormatted;
        this.interchangeOnVolume = interchangeOnVolume;
        this.interchangeOnVolumeFormatted = interchangeOnVolumeFormatted;
        this.assessments = assessments;
        this.assessmentsFormatted = assessmentsFormatted;
        this.assessmentsOnVolume = assessmentsOnVolume;
        this.assessmentsOnVolumeFormatted = assessmentsOnVolumeFormatted;
        this.partnerCommission = partnerCommission;
        this.partnerCommissionFormatted = partnerCommissionFormatted;
        this.buyRate = buyRate;
        this.buyRateFormatted = buyRateFormatted;
        this.hardCosts = hardCosts;
        this.hardCostsFormatted = hardCostsFormatted;
        }
}

  /**
   * Models details about disbursements related to partner statements.
   */
export class PartnerStatementDisbursement {

  /**
   * The disbursement id.
   */
    id: string | null = null;

  /**
   * Date and time the disbursement was processed.
   */
    timestamp: Date | null = null;

  /**
   * The type of disbursement transaction.
   */
    transactionType: string | null = null;

  /**
   * The payment method used to fund the disbursement.
   */
    paymentType: string | null = null;

  /**
   * The masked account number into which funds were deposited.
   */
    maskedPan: string | null = null;

  /**
   * That payment is still pending.
   */
    pending: boolean | null = null;

  /**
   * That payment is approved.
   */
    approved: boolean | null = null;

  /**
   * A response description from the disbursement payment platform, in any.
   */
    responseDescription: string | null = null;

  /**
   * The amount disbursed in floating point format.
   */
    amount: number | null = null;

  /**
   * The currency formatted form of amount.
   */
    amountFormatted: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        id: string | null = null,
        timestamp: Date | null = null,
        transactionType: string | null = null,
        paymentType: string | null = null,
        maskedPan: string | null = null,
        pending: boolean | null = null,
        approved: boolean | null = null,
        responseDescription: string | null = null,
        amount: number | null = null,
        amountFormatted: string | null = null,
        ) {
        this.id = id;
        this.timestamp = timestamp;
        this.transactionType = transactionType;
        this.paymentType = paymentType;
        this.maskedPan = maskedPan;
        this.pending = pending;
        this.approved = approved;
        this.responseDescription = responseDescription;
        this.amount = amount;
        this.amountFormatted = amountFormatted;
        }
}

  /**
   * Models partner statement adjustments.
   */
export class PartnerStatementAdjustment {

  /**
   * The adjustment id.
   */
    id: string | null = null;

  /**
   * The date and time the disbursement was posted to the account.
   */
    timestamp: Date | null = null;

  /**
   * A description of the adjustment.
   */
    description: string | null = null;

  /**
   * The amount in floating point format.
   */
    amount: number | null = null;

  /**
   * The currency formatted form of amount.
   */
    amountFormatted: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        id: string | null = null,
        timestamp: Date | null = null,
        description: string | null = null,
        amount: number | null = null,
        amountFormatted: string | null = null,
        ) {
        this.id = id;
        this.timestamp = timestamp;
        this.description = description;
        this.amount = amount;
        this.amountFormatted = amountFormatted;
        }
}

  /**
   * Models a request to retrieve a list of partner statements.
   */
export class MerchantInvoiceListRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * Optional merchant id for partner scoped requests.
   */
    merchantId?: string;

  /**
   * Optional type to filter normal invoices vs statements.
   */
    invoiceType?: string;

  /**
   * Optional start date filter for batch history.
   */
    startDate?: Date;

  /**
   * Optional end date filter for batch history.
   */
    endDate?: Date;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        merchantId: string | undefined = undefined,
        invoiceType: string | undefined = undefined,
        startDate: Date | undefined = undefined,
        endDate: Date | undefined = undefined,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.merchantId = merchantId;
        this.invoiceType = invoiceType;
        this.startDate = startDate;
        this.endDate = endDate;
        }
}

  /**
   * Models a response to an invoice list request.
   */
export class MerchantInvoiceListResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The list of invoices returned by the request.
   */
    invoices: MerchantInvoiceSummary[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        invoices: MerchantInvoiceSummary[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.invoices = invoices;
        }
}

  /**
   * Models basic information about a merchant invoice for use in list or search results.
   */
export class MerchantInvoiceSummary {

  /**
   * The id owner of the invoice.
   */
    id: string | null = null;

  /**
   * The date the statement was generated.
   */
    dateCreated: Date | null = null;

  /**
   * The grand total.
   */
    grandTotal: number | null = null;

  /**
   * The string formatted grand total.
   */
    grandTotalFormatted: string | null = null;

  /**
   * The status of the statement.
   */
    status: string | null = null;

  /**
   * Identifies the invoice type.
   */
    invoiceType: string | null = null;

  /**
   * Whether or not the invoice had been paid.
   */
    paid: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(
        id: string | null = null,
        dateCreated: Date | null = null,
        grandTotal: number | null = null,
        grandTotalFormatted: string | null = null,
        status: string | null = null,
        invoiceType: string | null = null,
        paid: boolean | null = null,
        ) {
        this.id = id;
        this.dateCreated = dateCreated;
        this.grandTotal = grandTotal;
        this.grandTotalFormatted = grandTotalFormatted;
        this.status = status;
        this.invoiceType = invoiceType;
        this.paid = paid;
        }
}

  /**
   * Models a request to retrieve detailed merchant invoice information.
   */
export class MerchantInvoiceDetailRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * The invoice id.
   */
    id: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        id: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.id = id;
        }
}

  /**
   * Models detailed merchant invoice or statement information.
   */
export class MerchantInvoiceDetailResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * Optional start date filter for batch history.
   */
    id: string | null = null;

  /**
   * The id of the merchant associated with the statement.
   */
    merchantId: string | null = null;

  /**
   * The corporate name of the merchant associated with the statement.
   */
    corporateName: string | null = null;

  /**
   * The dba name of the merchant associated with the statement.
   */
    dbaName: string | null = null;

  /**
   * The date the statement was generated.
   */
    dateCreated: Date | null = null;

  /**
   * The current status of the invoice.
   */
    status: string | null = null;

  /**
   * The type of invoice (statement or invoice).
   */
    invoiceType: string | null = null;

  /**
   * The type of pricing used for the invoice (typically flat rate or or interchange plus).
   */
    pricingType: string | null = null;

  /**
   * Whether or not the invoice has been paid.
   */
    paid: boolean | null = null;

  /**
   * The grand total.
   */
    grandTotal: number | null = null;

  /**
   * The string formatted grand total.
   */
    grandTotalFormatted: string | null = null;

  /**
   * The subtotal before shipping and tax.
   */
    subtotal: number | null = null;

  /**
   * The string formatted subtotal before shipping and tax.
   */
    subotalFormatted: string | null = null;

  /**
   * The total sales tax.
   */
    taxTotal: number | null = null;

  /**
   * The string formatted total sales tax.
   */
    taxTotalFormatted: string | null = null;

  /**
   * The total cost of shipping.
   */
    shippingCost: number | null = null;

  /**
   * The string formatted total cost of shipping.
   */
    shippingCostFormatted: string | null = null;

  /**
   * The total unpaid balance on the invoice.
   */
    balanceDue: number | null = null;

  /**
   * The string formatted unpaid balance on the invoice.
   */
    balanceDueFormatted: string | null = null;

  /**
   * The shipping or physical address associated with the invoice.
   */
    shippingAddress?: Address;

  /**
   * The billing or mailing address associated with the invoice.
   */
    billingAddress?: Address;

  /**
   * The list of line item details associated with the invoice.
   */
    lineItems: InvoiceLineItem[] | null = null;

  /**
   * The list of payments collected against the invoice.
   */
    payments: InvoicePayment[] | null = null;

  /**
   * The list of merchant settlements disbursed during the statement period.
   */
    deposits: StatementDeposit[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        id: string | null = null,
        merchantId: string | null = null,
        corporateName: string | null = null,
        dbaName: string | null = null,
        dateCreated: Date | null = null,
        status: string | null = null,
        invoiceType: string | null = null,
        pricingType: string | null = null,
        paid: boolean | null = null,
        grandTotal: number | null = null,
        grandTotalFormatted: string | null = null,
        subtotal: number | null = null,
        subotalFormatted: string | null = null,
        taxTotal: number | null = null,
        taxTotalFormatted: string | null = null,
        shippingCost: number | null = null,
        shippingCostFormatted: string | null = null,
        balanceDue: number | null = null,
        balanceDueFormatted: string | null = null,
        shippingAddress: Address | undefined = undefined,
        billingAddress: Address | undefined = undefined,
        lineItems: InvoiceLineItem[] | null = null,
        payments: InvoicePayment[] | null = null,
        deposits: StatementDeposit[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.id = id;
        this.merchantId = merchantId;
        this.corporateName = corporateName;
        this.dbaName = dbaName;
        this.dateCreated = dateCreated;
        this.status = status;
        this.invoiceType = invoiceType;
        this.pricingType = pricingType;
        this.paid = paid;
        this.grandTotal = grandTotal;
        this.grandTotalFormatted = grandTotalFormatted;
        this.subtotal = subtotal;
        this.subotalFormatted = subotalFormatted;
        this.taxTotal = taxTotal;
        this.taxTotalFormatted = taxTotalFormatted;
        this.shippingCost = shippingCost;
        this.shippingCostFormatted = shippingCostFormatted;
        this.balanceDue = balanceDue;
        this.balanceDueFormatted = balanceDueFormatted;
        this.shippingAddress = shippingAddress;
        this.billingAddress = billingAddress;
        this.lineItems = lineItems;
        this.payments = payments;
        this.deposits = deposits;
        }
}

  /**
   * Models a single invoice or merchant statement line item.
   */
export class InvoiceLineItem {

  /**
   * The line item id.
   */
    id: string | null = null;

  /**
   * The type of line item.
   */
    lineType: string | null = null;

  /**
   * The product id for standard invoices.
   */
    productId: string | null = null;

  /**
   * The quantity associated with the line item.
   */
    quantity: number | null = null;

  /**
   * The description associated with the line item.
   */
    description: string | null = null;

  /**
   * An alternate explanation.
   */
    explanation: string | null = null;

  /**
   * The transaction count associated with any transaction based fees.
   */
    transactionCount: number | null = null;

  /**
   * The transaction volume associated with any fees.
   */
    volume: number | null = null;

  /**
   * The string formatted volume.
   */
    volumeFormatted: string | null = null;

  /**
   * The per transaction fee.
   */
    perTransactionFee: number | null = null;

  /**
   * The string formatted per transaction fee.
   */
    perTransactionFeeFormatted: string | null = null;

  /**
   * The percentage (as floating point ratio) fee assessed on volume.
   */
    transactionPercentage: number | null = null;

  /**
   * The string formatted transaction fee percentage.
   */
    transactionPercentageFormatted: string | null = null;

  /**
   * The quantity price associated.
   */
    price: number | null = null;

  /**
   * The string formatted price associated with a conventional line item.
   */
    priceFormatted: string | null = null;

  /**
   * The extended price .
   */
    priceExtended: number | null = null;

  /**
   * The string formatted extended price.
   */
    priceExtendedFormatted: string | null = null;

  /**
   * The list of nested line items, if any.
   */
    lineItems: InvoiceLineItem[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        id: string | null = null,
        lineType: string | null = null,
        productId: string | null = null,
        quantity: number | null = null,
        description: string | null = null,
        explanation: string | null = null,
        transactionCount: number | null = null,
        volume: number | null = null,
        volumeFormatted: string | null = null,
        perTransactionFee: number | null = null,
        perTransactionFeeFormatted: string | null = null,
        transactionPercentage: number | null = null,
        transactionPercentageFormatted: string | null = null,
        price: number | null = null,
        priceFormatted: string | null = null,
        priceExtended: number | null = null,
        priceExtendedFormatted: string | null = null,
        lineItems: InvoiceLineItem[] | null = null,
        ) {
        this.id = id;
        this.lineType = lineType;
        this.productId = productId;
        this.quantity = quantity;
        this.description = description;
        this.explanation = explanation;
        this.transactionCount = transactionCount;
        this.volume = volume;
        this.volumeFormatted = volumeFormatted;
        this.perTransactionFee = perTransactionFee;
        this.perTransactionFeeFormatted = perTransactionFeeFormatted;
        this.transactionPercentage = transactionPercentage;
        this.transactionPercentageFormatted = transactionPercentageFormatted;
        this.price = price;
        this.priceFormatted = priceFormatted;
        this.priceExtended = priceExtended;
        this.priceExtendedFormatted = priceExtendedFormatted;
        this.lineItems = lineItems;
        }
}

  /**
   * Models information about payments against an invoice.
   */
export class InvoicePayment {

  /**
   * The line item id.
   */
    id: string | null = null;

  /**
   * Timestamp the payment was authorized.
   */
    timestamp: Date | null = null;

  /**
   * The type of disbursement transaction.
   */
    transactionType: string | null = null;

  /**
   * The payment method used to fund the disbursement.
   */
    paymentType: string | null = null;

  /**
   * The auth code associated with credit card payment methods.
   */
    authCode: string | null = null;

  /**
   * The masked account number into which funds were deposited.
   */
    maskedPan: string | null = null;

  /**
   * That payment is still pending.
   */
    pending: boolean | null = null;

  /**
   * That payment is approved.
   */
    approved: boolean | null = null;

  /**
   * A response description from the disbursement payment platform, in any.
   */
    responseDescription: string | null = null;

  /**
   * The amount disbursed in floating point format.
   */
    amount: number | null = null;

  /**
   * The currency formatted form of amount.
   */
    amountFormatted: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        id: string | null = null,
        timestamp: Date | null = null,
        transactionType: string | null = null,
        paymentType: string | null = null,
        authCode: string | null = null,
        maskedPan: string | null = null,
        pending: boolean | null = null,
        approved: boolean | null = null,
        responseDescription: string | null = null,
        amount: number | null = null,
        amountFormatted: string | null = null,
        ) {
        this.id = id;
        this.timestamp = timestamp;
        this.transactionType = transactionType;
        this.paymentType = paymentType;
        this.authCode = authCode;
        this.maskedPan = maskedPan;
        this.pending = pending;
        this.approved = approved;
        this.responseDescription = responseDescription;
        this.amount = amount;
        this.amountFormatted = amountFormatted;
        }
}

  /**
   * Models information about merchant deposits during a statement period.
   */
export class StatementDeposit {

  /**
   * The line item id.
   */
    id: string | null = null;

  /**
   * The number of transactions in the batch for which funds were deposited.
   */
    transactionCount: number | null = null;

  /**
   * The batch id associated with the deposit.
   */
    batchId: string | null = null;

  /**
   * The prepaid fees associated with the batch.
   */
    feesPaid: number | null = null;

  /**
   * The currency formatted form of prepaid fees.
   */
    feesPaidFormatted: string | null = null;

  /**
   * The net deposit released to the merchant.
   */
    netDeposit: number | null = null;

  /**
   * The currency formatted net deposit released to the merchant.
   */
    netDepositFormatted: string | null = null;

  /**
   * The total sales in the batch.
   */
    totalSales: number | null = null;

  /**
   * The currency formatted total sales in the batch.
   */
    totalSalesFormatted: string | null = null;

  /**
   * The total refunds in the batch.
   */
    totalRefunds: number | null = null;

  /**
   * The currency formatted total refunds in the batch.
   */
    totalRefundsFormatted: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        id: string | null = null,
        transactionCount: number | null = null,
        batchId: string | null = null,
        feesPaid: number | null = null,
        feesPaidFormatted: string | null = null,
        netDeposit: number | null = null,
        netDepositFormatted: string | null = null,
        totalSales: number | null = null,
        totalSalesFormatted: string | null = null,
        totalRefunds: number | null = null,
        totalRefundsFormatted: string | null = null,
        ) {
        this.id = id;
        this.transactionCount = transactionCount;
        this.batchId = batchId;
        this.feesPaid = feesPaid;
        this.feesPaidFormatted = feesPaidFormatted;
        this.netDeposit = netDeposit;
        this.netDepositFormatted = netDepositFormatted;
        this.totalSales = totalSales;
        this.totalSalesFormatted = totalSalesFormatted;
        this.totalRefunds = totalRefunds;
        this.totalRefundsFormatted = totalRefundsFormatted;
        }
}

  /**
   * Models a request to retrieve detailed merchant invoice information.
   */
export class PartnerCommissionBreakdownRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * The invoice or statement id.
   */
    statementId: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        statementId: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.statementId = statementId;
        }
}

  /**
   * Models detailed information about how partner commissions were calculated for a
   * statement.
   */
export class PartnerCommissionBreakdownResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The invoice (statement id) for which the commissions were calculated.
   */
    invoiceId: string | null = null;

  /**
   * The partner name.
   */
    partnerName: string | null = null;

  /**
   * The partner statement id.
   */
    partnerStatementId: string | null = null;

  /**
   * The partner statement date.
   */
    partnerStatementDate: Date | null = null;

  /**
   * The merchant id.
   */
    merchantId: string | null = null;

  /**
   * The merchant's corporate name.
   */
    merchantCompanyName: string | null = null;

  /**
   * The merchant's dba name.
   */
    merchantDbaName: string | null = null;

  /**
   * The grand total.
   */
    grandTotal: number | null = null;

  /**
   * The currency formatted grand total.
   */
    grandTotalFormatted: string | null = null;

  /**
   * The total fees.
   */
    totalFees: number | null = null;

  /**
   * The currency formatted total fees.
   */
    totalFeesFormatted: string | null = null;

  /**
   * The total due the partner for this merchant statement.
   */
    totalDue: number | null = null;

  /**
   * The currency formatted total due the partner for this merchant statement.
   */
    totalDueFormatted: string | null = null;

  /**
   * The total volume during the statement period.
   */
    totalVolume: number | null = null;

  /**
   * The currency formatted total volume during the statement period.
   */
    totalVolumeFormatted: string | null = null;

  /**
   * The total number of transactions processed during the statement period.
   */
    totalTransactions: number | null = null;

  /**
   * The residual earned by the partner.
   */
    partnerResidual: number | null = null;

  /**
   * The currency formatted residual earned by the partner.
   */
    partnerResidualFormatted: string | null = null;

  /**
   * The total interchange charged during the statement period.
   */
    interchange: number | null = null;

  /**
   * The currency formatted total interchange charged during the statement period.
   */
    interchangeFormatted: string | null = null;

  /**
   * The total assessments charged during the statement period.
   */
    assessments: number | null = null;

  /**
   * The currency formatted assessments charged during the statement period.
   */
    assessmentsFormatted: string | null = null;

  /**
   * The total of passthrough costs.
   */
    totalPassthrough: number | null = null;

  /**
   * The currency formatted total of passthrough costs.
   */
    totalPassthroughFormatted: string | null = null;

  /**
   * The total of non passthrough costs.
   */
    totalNonPassthrough: number | null = null;

  /**
   * The currency formatted total of non passthrough costs.
   */
    totalNonPassthroughFormatted: string | null = null;

  /**
   * The total of all card brand fees.
   */
    totalCardBrandFees: number | null = null;

  /**
   * The currency formatted total of all card brand fees.
   */
    totalCardBrandFeesFormatted: string | null = null;

  /**
   * The total buy rate.
   */
    totalBuyRate: number | null = null;

  /**
   * The currency formatted total buy rate.
   */
    totalBuyRateFormatted: string | null = null;

  /**
   * The total buy rate before passthrough costs.
   */
    buyRateBeforePassthrough: number | null = null;

  /**
   * The currency formatted total buy rate before passthrough costs.
   */
    buyRateBeforePassthroughFormatted: string | null = null;

  /**
   * The net markup split between BlockChyp and the partner.
   */
    netMarkup: number | null = null;

  /**
   * The currency formatted net markup split between BlockChyp and the partner.
   */
    netMarkupFormatted: string | null = null;

  /**
   * The partner's total share of non passthrough hard costs.
   */
    partnerNonPassthroughShare: number | null = null;

  /**
   * The currency formatted partner's total share of non passthrough hard costs.
   */
    partnerNonPassthroughShareFormatted: string | null = null;

  /**
   * The total of chargeback fees assessed during the statement period.
   */
    chargebackFees: number | null = null;

  /**
   * The currency formatted total of chargeback fees assessed during the statement
   * period.
   */
    chargebackFeesFormatted: string | null = null;

  /**
   * The total number of chargebacks during the period.
   */
    chargebackCount: number | null = null;

  /**
   * The partner's share of markup.
   */
    partnerPercentage: number | null = null;

  /**
   * The currency formatted partner's share of markup.
   */
    partnerPercentageFormatted: string | null = null;

  /**
   * The list of line items documenting how the total buy rate was calculated.
   */
    buyRateLineItems: BuyRateLineItem[] | null = null;

  /**
   * The list of detail lines describing how revenue was calculated and collected by the
   * sponsor bank.
   */
    revenueDetails: AggregateBillingLineItem[] | null = null;

  /**
   * The nested list of costs levied by the card brands, grouped by card brand and type.
   */
    cardBrandCostDetails: AggregateBillingLineItem[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        invoiceId: string | null = null,
        partnerName: string | null = null,
        partnerStatementId: string | null = null,
        partnerStatementDate: Date | null = null,
        merchantId: string | null = null,
        merchantCompanyName: string | null = null,
        merchantDbaName: string | null = null,
        grandTotal: number | null = null,
        grandTotalFormatted: string | null = null,
        totalFees: number | null = null,
        totalFeesFormatted: string | null = null,
        totalDue: number | null = null,
        totalDueFormatted: string | null = null,
        totalVolume: number | null = null,
        totalVolumeFormatted: string | null = null,
        totalTransactions: number | null = null,
        partnerResidual: number | null = null,
        partnerResidualFormatted: string | null = null,
        interchange: number | null = null,
        interchangeFormatted: string | null = null,
        assessments: number | null = null,
        assessmentsFormatted: string | null = null,
        totalPassthrough: number | null = null,
        totalPassthroughFormatted: string | null = null,
        totalNonPassthrough: number | null = null,
        totalNonPassthroughFormatted: string | null = null,
        totalCardBrandFees: number | null = null,
        totalCardBrandFeesFormatted: string | null = null,
        totalBuyRate: number | null = null,
        totalBuyRateFormatted: string | null = null,
        buyRateBeforePassthrough: number | null = null,
        buyRateBeforePassthroughFormatted: string | null = null,
        netMarkup: number | null = null,
        netMarkupFormatted: string | null = null,
        partnerNonPassthroughShare: number | null = null,
        partnerNonPassthroughShareFormatted: string | null = null,
        chargebackFees: number | null = null,
        chargebackFeesFormatted: string | null = null,
        chargebackCount: number | null = null,
        partnerPercentage: number | null = null,
        partnerPercentageFormatted: string | null = null,
        buyRateLineItems: BuyRateLineItem[] | null = null,
        revenueDetails: AggregateBillingLineItem[] | null = null,
        cardBrandCostDetails: AggregateBillingLineItem[] | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.invoiceId = invoiceId;
        this.partnerName = partnerName;
        this.partnerStatementId = partnerStatementId;
        this.partnerStatementDate = partnerStatementDate;
        this.merchantId = merchantId;
        this.merchantCompanyName = merchantCompanyName;
        this.merchantDbaName = merchantDbaName;
        this.grandTotal = grandTotal;
        this.grandTotalFormatted = grandTotalFormatted;
        this.totalFees = totalFees;
        this.totalFeesFormatted = totalFeesFormatted;
        this.totalDue = totalDue;
        this.totalDueFormatted = totalDueFormatted;
        this.totalVolume = totalVolume;
        this.totalVolumeFormatted = totalVolumeFormatted;
        this.totalTransactions = totalTransactions;
        this.partnerResidual = partnerResidual;
        this.partnerResidualFormatted = partnerResidualFormatted;
        this.interchange = interchange;
        this.interchangeFormatted = interchangeFormatted;
        this.assessments = assessments;
        this.assessmentsFormatted = assessmentsFormatted;
        this.totalPassthrough = totalPassthrough;
        this.totalPassthroughFormatted = totalPassthroughFormatted;
        this.totalNonPassthrough = totalNonPassthrough;
        this.totalNonPassthroughFormatted = totalNonPassthroughFormatted;
        this.totalCardBrandFees = totalCardBrandFees;
        this.totalCardBrandFeesFormatted = totalCardBrandFeesFormatted;
        this.totalBuyRate = totalBuyRate;
        this.totalBuyRateFormatted = totalBuyRateFormatted;
        this.buyRateBeforePassthrough = buyRateBeforePassthrough;
        this.buyRateBeforePassthroughFormatted = buyRateBeforePassthroughFormatted;
        this.netMarkup = netMarkup;
        this.netMarkupFormatted = netMarkupFormatted;
        this.partnerNonPassthroughShare = partnerNonPassthroughShare;
        this.partnerNonPassthroughShareFormatted = partnerNonPassthroughShareFormatted;
        this.chargebackFees = chargebackFees;
        this.chargebackFeesFormatted = chargebackFeesFormatted;
        this.chargebackCount = chargebackCount;
        this.partnerPercentage = partnerPercentage;
        this.partnerPercentageFormatted = partnerPercentageFormatted;
        this.buyRateLineItems = buyRateLineItems;
        this.revenueDetails = revenueDetails;
        this.cardBrandCostDetails = cardBrandCostDetails;
        }
}

  /**
   * Models a request to generate merchant api credentials.
   */
export class MerchantCredentialGenerationRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * The merchant id.
   */
    merchantId: string | null = null;

  /**
   * Protects the credentials from deletion.
   */
    deleteProtected: boolean | null = null;

  /**
   * An optional array of role codes that will be assigned to the credentials.
   */
    roles: string[] | null = null;

  /**
   * Free form description of the purpose or intent behind the credentials.
   */
    notes: string | null = null;

  /**
   * Type of credentials to generate, either API or TOKENIZING. Defaults to API.
   */
    credentialType: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        merchantId: string | null = null,
        deleteProtected: boolean | null = null,
        roles: string[] | null = null,
        notes: string | null = null,
        credentialType: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.merchantId = merchantId;
        this.deleteProtected = deleteProtected;
        this.roles = roles;
        this.notes = notes;
        this.credentialType = credentialType;
        }
}

  /**
   * Merchant api credential data.
   */
export class MerchantCredentialGenerationResponse {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

  /**
   * The merchant api key.
   */
    apiKey: string | null = null;

  /**
   * The merchant bearer token.
   */
    bearerToken: string | null = null;

  /**
   * The merchant signing key.
   */
    signingKey: string | null = null;

  /**
   * The tokenizing key.
   */
    tokenizingKey: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        apiKey: string | null = null,
        bearerToken: string | null = null,
        signingKey: string | null = null,
        tokenizingKey: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        this.apiKey = apiKey;
        this.bearerToken = bearerToken;
        this.signingKey = signingKey;
        this.tokenizingKey = tokenizingKey;
        }
}

  /**
   * Models a single buy rate calculation line item.
   */
export class BuyRateLineItem {

  /**
   * Provides a basic description of the line item.
   */
    description: string | null = null;

  /**
   * The volume related to this line item.
   */
    volume: number | null = null;

  /**
   * The currency formatted volume related to this line item.
   */
    volumeFormatted: string | null = null;

  /**
   * The rate on volume charged for this line item.
   */
    volumeRate: number | null = null;

  /**
   * The string formatted rate on volume charged for this line item.
   */
    volumeRateFormatted: string | null = null;

  /**
   * The count associated with this line item.
   */
    count: number | null = null;

  /**
   * The rate per item charged for this line item.
   */
    countRate: number | null = null;

  /**
   * The string formatted rate per item charged for this line item.
   */
    countRateFormatted: string | null = null;

  /**
   * Provides a narrative description of the rate.
   */
    rateSummary: string | null = null;

  /**
   * The total amount for the line item.
   */
    total: number | null = null;

  /**
   * The string formatted total for the line item.
   */
    totalFormatted: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        description: string | null = null,
        volume: number | null = null,
        volumeFormatted: string | null = null,
        volumeRate: number | null = null,
        volumeRateFormatted: string | null = null,
        count: number | null = null,
        countRate: number | null = null,
        countRateFormatted: string | null = null,
        rateSummary: string | null = null,
        total: number | null = null,
        totalFormatted: string | null = null,
        ) {
        this.description = description;
        this.volume = volume;
        this.volumeFormatted = volumeFormatted;
        this.volumeRate = volumeRate;
        this.volumeRateFormatted = volumeRateFormatted;
        this.count = count;
        this.countRate = countRate;
        this.countRateFormatted = countRateFormatted;
        this.rateSummary = rateSummary;
        this.total = total;
        this.totalFormatted = totalFormatted;
        }
}

  /**
   * Models low level aggregated and nested data line items.
   */
export class AggregateBillingLineItem {

  /**
   * The line item identifier.
   */
    id: string | null = null;

  /**
   * Provides a basic description of the line item.
   */
    description: string | null = null;

  /**
   * That a line item has nested information.
   */
    expandable: boolean | null = null;

  /**
   * The total is a negative number.
   */
    negative: boolean | null = null;

  /**
   * The total for the line item.
   */
    total: number | null = null;

  /**
   * The currency formatted total for the line item.
   */
    totalFormatted: string | null = null;

  /**
   * The range of count based fees charged for the given line item.
   */
    perTranFeeRange?: AggregateBillingLineItemStats;

  /**
   * The range of percentage based fees charged for the given line item.
   */
    transactionPercentageRange?: AggregateBillingLineItemStats;

  /**
   * Encapsulated drill down or detail lines.
   */
    detailLines: AggregateBillingLineItem[] | null = null;

    // Constructor with default values for optional fields
    constructor(
        id: string | null = null,
        description: string | null = null,
        expandable: boolean | null = null,
        negative: boolean | null = null,
        total: number | null = null,
        totalFormatted: string | null = null,
        perTranFeeRange: AggregateBillingLineItemStats | undefined = undefined,
        transactionPercentageRange: AggregateBillingLineItemStats | undefined = undefined,
        detailLines: AggregateBillingLineItem[] | null = null,
        ) {
        this.id = id;
        this.description = description;
        this.expandable = expandable;
        this.negative = negative;
        this.total = total;
        this.totalFormatted = totalFormatted;
        this.perTranFeeRange = perTranFeeRange;
        this.transactionPercentageRange = transactionPercentageRange;
        this.detailLines = detailLines;
        }
}

  /**
   * Models statistics for low level aggregation line items.
   */
export class AggregateBillingLineItemStats {

  /**
   * The min value in the set.
   */
    min: string | null = null;

  /**
   * The avg value in the set.
   */
    avg: string | null = null;

  /**
   * The max value in the set.
   */
    max: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        min: string | null = null,
        avg: string | null = null,
        max: string | null = null,
        ) {
        this.min = min;
        this.avg = avg;
        this.max = max;
        }
}

  /**
   * Models an individual with 25% or more ownership interest in a company.
   */
export class Owner {

  /**
   * The first name of the owner.
   */
    firstName: string | null = null;

  /**
   * The last name of the owner.
   */
    lastName: string | null = null;

  /**
   * The job title of the owner.
   */
    jobTitle: string | null = null;

  /**
   * The tax identification number (SSN) of the owner.
   */
    taxIdNumber: string | null = null;

  /**
   * The phone number of the owner.
   */
    phoneNumber: string | null = null;

  /**
   * The date of birth of the owner in mm/dd/yyyy format.
   */
    dob: string | null = null;

  /**
   * The percentage of ownership.
   */
    ownership: string | null = null;

  /**
   * The address of the owner.
   */
    address: Address | null = null;

  /**
   * The email address of the owner.
   */
    email: string | null = null;

  /**
   * A single line representation of the owner's address.
   */
    singleLineAddress: string | null = null;

  /**
   * The type of entity this owner represents.
   */
    entityType: string | null = null;

  /**
   * The driver's license number of the owner.
   */
    dlNumber: string | null = null;

  /**
   * The state that issued the owner's driver's license.
   */
    dlStateOrProvince: string | null = null;

  /**
   * The expiration date of the owner's driver's license.
   */
    dlExpiration: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        firstName: string | null = null,
        lastName: string | null = null,
        jobTitle: string | null = null,
        taxIdNumber: string | null = null,
        phoneNumber: string | null = null,
        dob: string | null = null,
        ownership: string | null = null,
        address: Address | null = null,
        email: string | null = null,
        singleLineAddress: string | null = null,
        entityType: string | null = null,
        dlNumber: string | null = null,
        dlStateOrProvince: string | null = null,
        dlExpiration: string | null = null,
        ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.taxIdNumber = taxIdNumber;
        this.phoneNumber = phoneNumber;
        this.dob = dob;
        this.ownership = ownership;
        this.address = address;
        this.email = email;
        this.singleLineAddress = singleLineAddress;
        this.entityType = entityType;
        this.dlNumber = dlNumber;
        this.dlStateOrProvince = dlStateOrProvince;
        this.dlExpiration = dlExpiration;
        }
}

  /**
   * Models a bank account associated with an application.
   */
export class ApplicationAccount {

  /**
   * The name of the bank account.
   */
    name: string | null = null;

  /**
   * The name of the bank.
   */
    bank: string | null = null;

  /**
   * The name of the account holder.
   */
    accountHolderName: string | null = null;

  /**
   * The routing number of the bank.
   */
    routingNumber: string | null = null;

  /**
   * The account number.
   */
    accountNumber: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        name: string | null = null,
        bank: string | null = null,
        accountHolderName: string | null = null,
        routingNumber: string | null = null,
        accountNumber: string | null = null,
        ) {
        this.name = name;
        this.bank = bank;
        this.accountHolderName = accountHolderName;
        this.routingNumber = routingNumber;
        this.accountNumber = accountNumber;
        }
}

  /**
   * Models a merchant application form to add a merchant account.
   */
export class MerchantApplication {

  /**
   * The invite code for the merchant.
   */
    inviteCode: string | null = null;

  /**
   * The business name your customers know you by (DBA Name).
   */
    dbaName: string | null = null;

  /**
   * The name of the legal entity you file your taxes under.
   */
    corporateName: string | null = null;

  /**
   * The business website.
   */
    webSite: string | null = null;

  /**
   * The business tax identification number (EIN).
   */
    taxIdNumber: string | null = null;

  /**
   * The type of business entity.
   */
    entityType: string | null = null;

  /**
   * The state where the business is incorporated.
   */
    stateOfIncorporation: string | null = null;

  /**
   * The primary type of business (e.g., Retail, Service, etc.).
   */
    merchantType: string | null = null;

  /**
   * A short description of the products and services sold.
   */
    businessDescription: string | null = null;

  /**
   * The number of years the business has been operating.
   */
    yearsInBusiness: string | null = null;

  /**
   * The business telephone number.
   */
    businessPhoneNumber: string | null = null;

  /**
   * The physical address of the business.
   */
    physicalAddress: Address | null = null;

  /**
   * The mailing address of the business.
   */
    mailingAddress: Address | null = null;

  /**
   * The first name of the primary contact.
   */
    contactFirstName: string | null = null;

  /**
   * The last name of the primary contact.
   */
    contactLastName: string | null = null;

  /**
   * The phone number of the primary contact.
   */
    contactPhoneNumber: string | null = null;

  /**
   * The email address of the primary contact.
   */
    contactEmail: string | null = null;

  /**
   * The job title of the primary contact.
   */
    contactTitle: string | null = null;

  /**
   * The tax identification number (SSN) of the primary contact.
   */
    contactTaxIdNumber: string | null = null;

  /**
   * The date of birth of the primary contact.
   */
    contactDOB: string | null = null;

  /**
   * The driver's license number of the primary contact.
   */
    contactDlNumber: string | null = null;

  /**
   * The state that issued the primary contact's driver's license.
   */
    contactDlStateOrProvince: string | null = null;

  /**
   * The expiration date of the primary contact's driver's license.
   */
    contactDlExpiration: string | null = null;

  /**
   * The home address of the primary contact.
   */
    contactHomeAddress: Address | null = null;

  /**
   * The role of the primary contact in the business.
   */
    contactRole: string | null = null;

  /**
   * List of individuals with 25% or more ownership in the company.
   */
    owners: Owner[] | null = null;

  /**
   * The bank account information for the business.
   */
    manualAccount: ApplicationAccount | null = null;

  /**
   * The average transaction amount.
   */
    averageTransaction: string | null = null;

  /**
   * The highest expected transaction amount.
   */
    highTransaction: string | null = null;

  /**
   * The average monthly transaction volume.
   */
    averageMonth: string | null = null;

  /**
   * The highest expected monthly transaction volume.
   */
    highMonth: string | null = null;

  /**
   * The refund policy of the business.
   */
    refundPolicy: string | null = null;

  /**
   * The number of days after purchase that refunds can be issued.
   */
    refundDays: string | null = null;

  /**
   * The time zone of the business.
   */
    timeZone: string | null = null;

  /**
   * The time when the daily batch should close.
   */
    batchCloseTime: string | null = null;

  /**
   * Indicates if the business has multiple locations.
   */
    multipleLocations: string | null = null;

  /**
   * The name of this specific business location.
   */
    locationName: string | null = null;

  /**
   * The store number for this location.
   */
    storeNumber: string | null = null;

  /**
   * Indicates if the business wants to accept EBT cards.
   */
    ebtRequested: string | null = null;

  /**
   * The FNS number issued by the USDA for EBT processing.
   */
    fnsNumber: string | null = null;

  /**
   * Indicates if the business plans to accept payments through a website.
   */
    ecommerce: string | null = null;

  /**
   * Indicates if suppliers ship products directly to customers.
   */
    dropShipping: boolean | null = null;

  /**
   * The percentage of transactions that will be chip or swipe.
   */
    cardPresentPercentage: string | null = null;

  /**
   * The percentage of transactions that will be phone orders.
   */
    phoneOrderPercentage: string | null = null;

  /**
   * The percentage of transactions that will be e-commerce.
   */
    ecomPercentage: string | null = null;

  /**
   * The number of days before shipment that customers are charged.
   */
    billBeforeShipmentDays: string | null = null;

  /**
   * Indicates if the business plans to process recurring payments.
   */
    subscriptionsSupported: string | null = null;

  /**
   * The frequency of recurring payments (if applicable).
   */
    subscriptionFrequency: string | null = null;

  /**
   * The full legal name of the person signing the application.
   */
    signerName: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        inviteCode: string | null = null,
        dbaName: string | null = null,
        corporateName: string | null = null,
        webSite: string | null = null,
        taxIdNumber: string | null = null,
        entityType: string | null = null,
        stateOfIncorporation: string | null = null,
        merchantType: string | null = null,
        businessDescription: string | null = null,
        yearsInBusiness: string | null = null,
        businessPhoneNumber: string | null = null,
        physicalAddress: Address | null = null,
        mailingAddress: Address | null = null,
        contactFirstName: string | null = null,
        contactLastName: string | null = null,
        contactPhoneNumber: string | null = null,
        contactEmail: string | null = null,
        contactTitle: string | null = null,
        contactTaxIdNumber: string | null = null,
        contactDOB: string | null = null,
        contactDlNumber: string | null = null,
        contactDlStateOrProvince: string | null = null,
        contactDlExpiration: string | null = null,
        contactHomeAddress: Address | null = null,
        contactRole: string | null = null,
        owners: Owner[] | null = null,
        manualAccount: ApplicationAccount | null = null,
        averageTransaction: string | null = null,
        highTransaction: string | null = null,
        averageMonth: string | null = null,
        highMonth: string | null = null,
        refundPolicy: string | null = null,
        refundDays: string | null = null,
        timeZone: string | null = null,
        batchCloseTime: string | null = null,
        multipleLocations: string | null = null,
        locationName: string | null = null,
        storeNumber: string | null = null,
        ebtRequested: string | null = null,
        fnsNumber: string | null = null,
        ecommerce: string | null = null,
        dropShipping: boolean | null = null,
        cardPresentPercentage: string | null = null,
        phoneOrderPercentage: string | null = null,
        ecomPercentage: string | null = null,
        billBeforeShipmentDays: string | null = null,
        subscriptionsSupported: string | null = null,
        subscriptionFrequency: string | null = null,
        signerName: string | null = null,
        ) {
        this.inviteCode = inviteCode;
        this.dbaName = dbaName;
        this.corporateName = corporateName;
        this.webSite = webSite;
        this.taxIdNumber = taxIdNumber;
        this.entityType = entityType;
        this.stateOfIncorporation = stateOfIncorporation;
        this.merchantType = merchantType;
        this.businessDescription = businessDescription;
        this.yearsInBusiness = yearsInBusiness;
        this.businessPhoneNumber = businessPhoneNumber;
        this.physicalAddress = physicalAddress;
        this.mailingAddress = mailingAddress;
        this.contactFirstName = contactFirstName;
        this.contactLastName = contactLastName;
        this.contactPhoneNumber = contactPhoneNumber;
        this.contactEmail = contactEmail;
        this.contactTitle = contactTitle;
        this.contactTaxIdNumber = contactTaxIdNumber;
        this.contactDOB = contactDOB;
        this.contactDlNumber = contactDlNumber;
        this.contactDlStateOrProvince = contactDlStateOrProvince;
        this.contactDlExpiration = contactDlExpiration;
        this.contactHomeAddress = contactHomeAddress;
        this.contactRole = contactRole;
        this.owners = owners;
        this.manualAccount = manualAccount;
        this.averageTransaction = averageTransaction;
        this.highTransaction = highTransaction;
        this.averageMonth = averageMonth;
        this.highMonth = highMonth;
        this.refundPolicy = refundPolicy;
        this.refundDays = refundDays;
        this.timeZone = timeZone;
        this.batchCloseTime = batchCloseTime;
        this.multipleLocations = multipleLocations;
        this.locationName = locationName;
        this.storeNumber = storeNumber;
        this.ebtRequested = ebtRequested;
        this.fnsNumber = fnsNumber;
        this.ecommerce = ecommerce;
        this.dropShipping = dropShipping;
        this.cardPresentPercentage = cardPresentPercentage;
        this.phoneOrderPercentage = phoneOrderPercentage;
        this.ecomPercentage = ecomPercentage;
        this.billBeforeShipmentDays = billBeforeShipmentDays;
        this.subscriptionsSupported = subscriptionsSupported;
        this.subscriptionFrequency = subscriptionFrequency;
        this.signerName = signerName;
        }
}

  /**
   * Models a merchant application submission request to add a new merchant account.
   */
export class SubmitApplicationRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

  /**
   * The invite code for the merchant.
   */
    inviteCode: string | null = null;

  /**
   * The business name your customers know you by (DBA Name).
   */
    dbaName: string | null = null;

  /**
   * The name of the legal entity you file your taxes under.
   */
    corporateName: string | null = null;

  /**
   * The business website.
   */
    webSite: string | null = null;

  /**
   * The business tax identification number (EIN).
   */
    taxIdNumber: string | null = null;

  /**
   * The type of business entity.
   */
    entityType: string | null = null;

  /**
   * The state where the business is incorporated.
   */
    stateOfIncorporation: string | null = null;

  /**
   * The primary type of business (e.g., Retail, Service, etc.).
   */
    merchantType: string | null = null;

  /**
   * A short description of the products and services sold.
   */
    businessDescription: string | null = null;

  /**
   * The number of years the business has been operating.
   */
    yearsInBusiness: string | null = null;

  /**
   * The business telephone number.
   */
    businessPhoneNumber: string | null = null;

  /**
   * The physical address of the business.
   */
    physicalAddress: Address | null = null;

  /**
   * The mailing address of the business.
   */
    mailingAddress: Address | null = null;

  /**
   * The first name of the primary contact.
   */
    contactFirstName: string | null = null;

  /**
   * The last name of the primary contact.
   */
    contactLastName: string | null = null;

  /**
   * The phone number of the primary contact.
   */
    contactPhoneNumber: string | null = null;

  /**
   * The email address of the primary contact.
   */
    contactEmail: string | null = null;

  /**
   * The job title of the primary contact.
   */
    contactTitle: string | null = null;

  /**
   * The tax identification number (SSN) of the primary contact.
   */
    contactTaxIdNumber: string | null = null;

  /**
   * The date of birth of the primary contact.
   */
    contactDOB: string | null = null;

  /**
   * The driver's license number of the primary contact.
   */
    contactDlNumber: string | null = null;

  /**
   * The state that issued the primary contact's driver's license.
   */
    contactDlStateOrProvince: string | null = null;

  /**
   * The expiration date of the primary contact's driver's license.
   */
    contactDlExpiration: string | null = null;

  /**
   * The home address of the primary contact.
   */
    contactHomeAddress: Address | null = null;

  /**
   * The role of the primary contact in the business.
   */
    contactRole: string | null = null;

  /**
   * List of individuals with 25% or more ownership in the company.
   */
    owners: Owner[] | null = null;

  /**
   * The bank account information for the business.
   */
    manualAccount: ApplicationAccount | null = null;

  /**
   * The average transaction amount.
   */
    averageTransaction: string | null = null;

  /**
   * The highest expected transaction amount.
   */
    highTransaction: string | null = null;

  /**
   * The average monthly transaction volume.
   */
    averageMonth: string | null = null;

  /**
   * The highest expected monthly transaction volume.
   */
    highMonth: string | null = null;

  /**
   * The refund policy of the business.
   */
    refundPolicy: string | null = null;

  /**
   * The number of days after purchase that refunds can be issued.
   */
    refundDays: string | null = null;

  /**
   * The time zone of the business.
   */
    timeZone: string | null = null;

  /**
   * The time when the daily batch should close.
   */
    batchCloseTime: string | null = null;

  /**
   * Indicates if the business has multiple locations.
   */
    multipleLocations: string | null = null;

  /**
   * The name of this specific business location.
   */
    locationName: string | null = null;

  /**
   * The store number for this location.
   */
    storeNumber: string | null = null;

  /**
   * Indicates if the business wants to accept EBT cards.
   */
    ebtRequested: string | null = null;

  /**
   * The FNS number issued by the USDA for EBT processing.
   */
    fnsNumber: string | null = null;

  /**
   * Indicates if the business plans to accept payments through a website.
   */
    ecommerce: string | null = null;

  /**
   * Indicates if suppliers ship products directly to customers.
   */
    dropShipping: boolean | null = null;

  /**
   * The percentage of transactions that will be chip or swipe.
   */
    cardPresentPercentage: string | null = null;

  /**
   * The percentage of transactions that will be phone orders.
   */
    phoneOrderPercentage: string | null = null;

  /**
   * The percentage of transactions that will be e-commerce.
   */
    ecomPercentage: string | null = null;

  /**
   * The number of days before shipment that customers are charged.
   */
    billBeforeShipmentDays: string | null = null;

  /**
   * Indicates if the business plans to process recurring payments.
   */
    subscriptionsSupported: string | null = null;

  /**
   * The frequency of recurring payments (if applicable).
   */
    subscriptionFrequency: string | null = null;

  /**
   * The full legal name of the person signing the application.
   */
    signerName: string | null = null;

    // Constructor with default values for optional fields
    constructor(
        timeout: number | null = null,
        test: boolean | null = null,
        inviteCode: string | null = null,
        dbaName: string | null = null,
        corporateName: string | null = null,
        webSite: string | null = null,
        taxIdNumber: string | null = null,
        entityType: string | null = null,
        stateOfIncorporation: string | null = null,
        merchantType: string | null = null,
        businessDescription: string | null = null,
        yearsInBusiness: string | null = null,
        businessPhoneNumber: string | null = null,
        physicalAddress: Address | null = null,
        mailingAddress: Address | null = null,
        contactFirstName: string | null = null,
        contactLastName: string | null = null,
        contactPhoneNumber: string | null = null,
        contactEmail: string | null = null,
        contactTitle: string | null = null,
        contactTaxIdNumber: string | null = null,
        contactDOB: string | null = null,
        contactDlNumber: string | null = null,
        contactDlStateOrProvince: string | null = null,
        contactDlExpiration: string | null = null,
        contactHomeAddress: Address | null = null,
        contactRole: string | null = null,
        owners: Owner[] | null = null,
        manualAccount: ApplicationAccount | null = null,
        averageTransaction: string | null = null,
        highTransaction: string | null = null,
        averageMonth: string | null = null,
        highMonth: string | null = null,
        refundPolicy: string | null = null,
        refundDays: string | null = null,
        timeZone: string | null = null,
        batchCloseTime: string | null = null,
        multipleLocations: string | null = null,
        locationName: string | null = null,
        storeNumber: string | null = null,
        ebtRequested: string | null = null,
        fnsNumber: string | null = null,
        ecommerce: string | null = null,
        dropShipping: boolean | null = null,
        cardPresentPercentage: string | null = null,
        phoneOrderPercentage: string | null = null,
        ecomPercentage: string | null = null,
        billBeforeShipmentDays: string | null = null,
        subscriptionsSupported: string | null = null,
        subscriptionFrequency: string | null = null,
        signerName: string | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        this.inviteCode = inviteCode;
        this.dbaName = dbaName;
        this.corporateName = corporateName;
        this.webSite = webSite;
        this.taxIdNumber = taxIdNumber;
        this.entityType = entityType;
        this.stateOfIncorporation = stateOfIncorporation;
        this.merchantType = merchantType;
        this.businessDescription = businessDescription;
        this.yearsInBusiness = yearsInBusiness;
        this.businessPhoneNumber = businessPhoneNumber;
        this.physicalAddress = physicalAddress;
        this.mailingAddress = mailingAddress;
        this.contactFirstName = contactFirstName;
        this.contactLastName = contactLastName;
        this.contactPhoneNumber = contactPhoneNumber;
        this.contactEmail = contactEmail;
        this.contactTitle = contactTitle;
        this.contactTaxIdNumber = contactTaxIdNumber;
        this.contactDOB = contactDOB;
        this.contactDlNumber = contactDlNumber;
        this.contactDlStateOrProvince = contactDlStateOrProvince;
        this.contactDlExpiration = contactDlExpiration;
        this.contactHomeAddress = contactHomeAddress;
        this.contactRole = contactRole;
        this.owners = owners;
        this.manualAccount = manualAccount;
        this.averageTransaction = averageTransaction;
        this.highTransaction = highTransaction;
        this.averageMonth = averageMonth;
        this.highMonth = highMonth;
        this.refundPolicy = refundPolicy;
        this.refundDays = refundDays;
        this.timeZone = timeZone;
        this.batchCloseTime = batchCloseTime;
        this.multipleLocations = multipleLocations;
        this.locationName = locationName;
        this.storeNumber = storeNumber;
        this.ebtRequested = ebtRequested;
        this.fnsNumber = fnsNumber;
        this.ecommerce = ecommerce;
        this.dropShipping = dropShipping;
        this.cardPresentPercentage = cardPresentPercentage;
        this.phoneOrderPercentage = phoneOrderPercentage;
        this.ecomPercentage = ecomPercentage;
        this.billBeforeShipmentDays = billBeforeShipmentDays;
        this.subscriptionsSupported = subscriptionsSupported;
        this.subscriptionFrequency = subscriptionFrequency;
        this.signerName = signerName;
        }
}




  /**
   * A request for customer signature data.
   */
export class TerminalCaptureSignatureRequest {
    APICredentials: APICredentials;
    request: CaptureSignatureRequest;

    constructor(APICredentials: APICredentials, request: CaptureSignatureRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * Information needed to test connectivity with a terminal.
   */
export class TerminalPingRequest {
    APICredentials: APICredentials;
    request: PingRequest;

    constructor(APICredentials: APICredentials, request: PingRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * Information needed to retrieve location information for a terminal.
   */
export class TerminalLocateRequest {
    APICredentials: APICredentials;
    request: LocateRequest;

    constructor(APICredentials: APICredentials, request: LocateRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * A message to be displayed on the terminal screen.
   */
export class TerminalMessageRequest {
    APICredentials: APICredentials;
    request: MessageRequest;

    constructor(APICredentials: APICredentials, request: MessageRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * A simple yes no prompt request.
   */
export class TerminalBooleanPromptRequest {
    APICredentials: APICredentials;
    request: BooleanPromptRequest;

    constructor(APICredentials: APICredentials, request: BooleanPromptRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * A text prompt request.
   */
export class TerminalTextPromptRequest {
    APICredentials: APICredentials;
    request: TextPromptRequest;

    constructor(APICredentials: APICredentials, request: TextPromptRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * An authorization request for a charge, preauth, or reverse transaction.
   */
export class TerminalAuthorizationRequest {
    APICredentials: APICredentials;
    request: AuthorizationRequest;

    constructor(APICredentials: APICredentials, request: AuthorizationRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * Retrieves card metadata.
   */
export class TerminalCardMetadataRequest {
    APICredentials: APICredentials;
    request: CardMetadataRequest;

    constructor(APICredentials: APICredentials, request: CardMetadataRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * A request for the remaining balance on a payment type.
   */
export class TerminalBalanceRequest {
    APICredentials: APICredentials;
    request: BalanceRequest;

    constructor(APICredentials: APICredentials, request: BalanceRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * A refund request.
   */
export class TerminalRefundRequest {
    APICredentials: APICredentials;
    request: RefundRequest;

    constructor(APICredentials: APICredentials, request: RefundRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * The information needed to enroll a new payment method in the token vault.
   */
export class TerminalEnrollRequest {
    APICredentials: APICredentials;
    request: EnrollRequest;

    constructor(APICredentials: APICredentials, request: EnrollRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * The information needed to enroll a new payment method in the token vault.
   */
export class TerminalClearTerminalRequest {
    APICredentials: APICredentials;
    request: ClearTerminalRequest;

    constructor(APICredentials: APICredentials, request: ClearTerminalRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * The information needed to activate or recharge a gift card.
   */
export class TerminalGiftActivateRequest {
    APICredentials: APICredentials;
    request: GiftActivateRequest;

    constructor(APICredentials: APICredentials, request: GiftActivateRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * The fields needed for custom Terms and Conditions prompts.
   */
export class TerminalTermsAndConditionsRequest {
    APICredentials: APICredentials;
    request: TermsAndConditionsRequest;

    constructor(APICredentials: APICredentials, request: TermsAndConditionsRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * A signature capture response for Terms and Conditions.
   */
export class TerminalTermsAndConditionsResponse {
    APICredentials: APICredentials;
    request: TermsAndConditionsResponse;

    constructor(APICredentials: APICredentials, request: TermsAndConditionsResponse) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * Used to start or update a transaction line item display on a terminal.
   */
export class TerminalTransactionDisplayRequest {
    APICredentials: APICredentials;
    request: TransactionDisplayRequest;

    constructor(APICredentials: APICredentials, request: TransactionDisplayRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * A request for the status of a terminal.
   */
export class TerminalTerminalStatusRequest {
    APICredentials: APICredentials;
    request: TerminalStatusRequest;

    constructor(APICredentials: APICredentials, request: TerminalStatusRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * Returns a list of queued transactions on a terminal.
   */
export class TerminalListQueuedTransactionsRequest {
    APICredentials: APICredentials;
    request: ListQueuedTransactionsRequest;

    constructor(APICredentials: APICredentials, request: ListQueuedTransactionsRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}


  /**
   * Deletes one or all transactions from a terminal queue.
   */
export class TerminalDeleteQueuedTransactionRequest {
    APICredentials: APICredentials;
    request: DeleteQueuedTransactionRequest;

    constructor(APICredentials: APICredentials, request: DeleteQueuedTransactionRequest) {
        this.APICredentials = APICredentials;
        this.request = request;
    }
}



  /**
   * Fields which should be returned with standard requests.
   */
export class AbstractAcknowledgement {

  /**
   * Whether or not the request succeeded.
   */
    success: boolean | null = null;

  /**
   * The error, if an error occurred.
   */
    error: string | null = null;

  /**
   * A narrative description of the transaction result.
   */
    responseDescription: string | null = null;

    // Constructor with default values for optional fields
    constructor(success: boolean | null = null,
        error: string | null = null,
        responseDescription: string | null = null,
        ) {
        this.success = success;
        this.error = error;
        this.responseDescription = responseDescription;
        }
}

  /**
   * A reference to a terminal name.
   */
export class TerminalReference {

  /**
   * The name of the target payment terminal.
   */
    terminalName?: string;

  /**
   * Forces the terminal cloud connection to be reset while a transactions is in flight.
   * This is a diagnostic settings that can be used only for test transactions.
   */
    resetConnection: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(terminalName: string | undefined = undefined,
        resetConnection: boolean | null = null,
        ) {
        this.terminalName = terminalName;
        this.resetConnection = resetConnection;
        }
}

  /**
   * Customer signature data.
   */
export class SignatureResponse {

  /**
   * The hex encoded signature data.
   */
    sigFile?: string;

    // Constructor with default values for optional fields
    constructor(sigFile: string | undefined = undefined,
        ) {
        this.sigFile = sigFile;
        }
}

  /**
   * A request for customer signature data.
   */
export class SignatureRequest {

  /**
   * A location on the filesystem which a customer signature should be written to.
   */
    sigFile?: string;

  /**
   * The image format to be used for returning signatures.
   */
    sigFormat?: SignatureFormat;

  /**
   * The width that the signature image should be scaled to, preserving the aspect ratio.
   * If not provided, the signature is returned in the terminal's max resolution.
   */
    sigWidth?: number;

  /**
   * Whether or not signature prompt should be skipped on the terminal. The terminal will
   * indicate whether or not a signature is required by the card in the receipt suggestions
   * response.
   */
    disableSignature?: boolean;

    // Constructor with default values for optional fields
    constructor(sigFile: string | undefined = undefined,
        sigFormat: SignatureFormat | undefined = undefined,
        sigWidth: number = 0,
        disableSignature: boolean = false,
        ) {
        this.sigFile = sigFile;
        this.sigFormat = sigFormat;
        this.sigWidth = sigWidth;
        this.disableSignature = disableSignature;
        }
}

  /**
   * Response fields for an approved transaction.
   */
export class ApprovalResponse {

  /**
   * That the transaction was approved.
   */
    approved: boolean | null = null;

  /**
   * The auth code from the payment network.
   */
    authCode?: string;

  /**
   * The code returned by the terminal or the card issuer to indicate the disposition of the
   * message.
   */
    authResponseCode?: string;

    // Constructor with default values for optional fields
    constructor(approved: boolean | null = null,
        authCode: string | undefined = undefined,
        authResponseCode: string | undefined = undefined,
        ) {
        this.approved = approved;
        this.authCode = authCode;
        this.authResponseCode = authResponseCode;
        }
}

  /**
   * Models a low level request with a timeout and test flag.
   */
export class TimeoutRequest {

  /**
   * The request timeout in seconds.
   */
    timeout: number | null = null;

  /**
   * Whether or not to route transaction to the test gateway.
   */
    test: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(timeout: number | null = null,
        test: boolean | null = null,
        ) {
        this.timeout = timeout;
        this.test = test;
        }
}

  /**
   * Core request fields for a transaction.
   */
export class CoreRequest {

  /**
   * A user-assigned reference that can be used to recall or reverse transactions.
   */
    transactionRef?: string;

  /**
   * That the transaction reference was autogenerated and should be ignored for the
   * purposes of duplicate detection.
   */
    autogeneratedRef: boolean | null = null;

  /**
   * Defers the response to the transaction and returns immediately. Callers should
   * retrive the transaction result using the Transaction Status API.
   */
    async: boolean | null = null;

  /**
   * Adds the transaction to the queue and returns immediately. Callers should retrive
   * the transaction result using the Transaction Status API.
   */
    queue: boolean | null = null;

  /**
   * Whether or not the request should block until all cards have been removed from the card
   * reader.
   */
    waitForRemovedCard?: boolean;

  /**
   * Override any in-progress transactions.
   */
    force?: boolean;

  /**
   * An identifier from an external point of sale system.
   */
    orderRef?: string;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * Can include a code used to trigger simulated conditions for the purposes of testing
   * and certification. Valid for test merchant accounts only.
   */
    testCase?: string;

    // Constructor with default values for optional fields
    constructor(transactionRef: string | undefined = undefined,
        autogeneratedRef: boolean | null = null,
        async: boolean | null = null,
        queue: boolean | null = null,
        waitForRemovedCard: boolean = false,
        force: boolean = false,
        orderRef: string | undefined = undefined,
        destinationAccount: string | undefined = undefined,
        testCase: string | undefined = undefined,
        ) {
        this.transactionRef = transactionRef;
        this.autogeneratedRef = autogeneratedRef;
        this.async = async;
        this.queue = queue;
        this.waitForRemovedCard = waitForRemovedCard;
        this.force = force;
        this.orderRef = orderRef;
        this.destinationAccount = destinationAccount;
        this.testCase = testCase;
        }
}

  /**
   * Response details about a payment method.
   */
export class PaymentMethodResponse {

  /**
   * The payment token, if the payment was enrolled in the vault.
   */
    token?: string;

  /**
   * The entry method for the transaction (CHIP, MSR, KEYED, etc).
   */
    entryMethod?: string;

  /**
   * The card brand (VISA, MC, AMEX, DEBIT, etc).
   */
    paymentType?: string;

  /**
   * Provides network level detail on how a transaction was routed, especially for debit
   * transactions.
   */
    network?: string;

  /**
   * Identifies the card association based on bin number. Used primarily used to indicate
   * the major logo on a card, even when debit transactions are routed on a different
   * network.
   */
    logo?: string;

  /**
   * The masked primary account number.
   */
    maskedPan?: string;

  /**
   * The BlockChyp public key if the user presented a BlockChyp payment card.
   */
    publicKey?: string;

  /**
   * That the transaction did something that would put the system in PCI scope.
   */
    ScopeAlert?: boolean;

  /**
   * The cardholder name.
   */
    cardHolder?: string;

  /**
   * The card expiration month in MM format.
   */
    expMonth?: string;

  /**
   * The card expiration year in YY format.
   */
    expYear?: string;

  /**
   * Address verification results if address information was submitted.
   */
    avsResponse: AVSResponse | null = null;

  /**
   * The CVV verification result if CVV was submitted.
   */
    cvvResponse?: string;

  /**
   * Suggested receipt fields.
   */
    receiptSuggestions: ReceiptSuggestions | null = null;

  /**
   * Customer data, if any. Preserved for reverse compatibility.
   */
    customer?: Customer;

  /**
   * Customer data, if any.
   */
    customers: Customer[] | null = null;

    // Constructor with default values for optional fields
    constructor(token: string | undefined = undefined,
        entryMethod: string | undefined = undefined,
        paymentType: string | undefined = undefined,
        network: string | undefined = undefined,
        logo: string | undefined = undefined,
        maskedPan: string | undefined = undefined,
        publicKey: string | undefined = undefined,
        ScopeAlert: boolean = false,
        cardHolder: string | undefined = undefined,
        expMonth: string | undefined = undefined,
        expYear: string | undefined = undefined,
        avsResponse: AVSResponse | null = null,
        cvvResponse: string | undefined = undefined,
        receiptSuggestions: ReceiptSuggestions | null = null,
        customer: Customer | undefined = undefined,
        customers: Customer[] | null = null,
        ) {
        this.token = token;
        this.entryMethod = entryMethod;
        this.paymentType = paymentType;
        this.network = network;
        this.logo = logo;
        this.maskedPan = maskedPan;
        this.publicKey = publicKey;
        this.ScopeAlert = ScopeAlert;
        this.cardHolder = cardHolder;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.avsResponse = avsResponse;
        this.cvvResponse = cvvResponse;
        this.receiptSuggestions = receiptSuggestions;
        this.customer = customer;
        this.customers = customers;
        }
}

  /**
   * Response details for a cryptocurrency transaction.
   */
export class CryptocurrencyResponse {

  /**
   * That the transaction has met the standard criteria for confirmation on the network.
   * (For example, 6 confirmations for level one bitcoin.)
   */
    confirmed: boolean | null = null;

  /**
   * The amount submitted to the blockchain.
   */
    cryptoAuthorizedAmount: string | null = null;

  /**
   * The network level fee assessed for the transaction denominated in cryptocurrency.
   * This fee goes to channel operators and crypto miners, not BlockChyp.
   */
    cryptoNetworkFee: string | null = null;

  /**
   * The three letter cryptocurrency code used for the transactions.
   */
    cryptocurrency: string | null = null;

  /**
   * Whether or not the transaction was processed on the level one or level two network.
   */
    cryptoNetwork: string | null = null;

  /**
   * The address on the crypto network the transaction was sent to.
   */
    cryptoReceiveAddress: string | null = null;

  /**
   * Hash or other identifier that identifies the block on the cryptocurrency network, if
   * available or relevant.
   */
    cryptoBlock: string | null = null;

  /**
   * Hash or other transaction identifier that identifies the transaction on the
   * cryptocurrency network, if available or relevant.
   */
    cryptoTransactionId: string | null = null;

  /**
   * The payment request URI used for the transaction, if available.
   */
    cryptoPaymentRequest: string | null = null;

  /**
   * Used for additional status information related to crypto transactions.
   */
    cryptoStatus: string | null = null;

    // Constructor with default values for optional fields
    constructor(confirmed: boolean | null = null,
        cryptoAuthorizedAmount: string | null = null,
        cryptoNetworkFee: string | null = null,
        cryptocurrency: string | null = null,
        cryptoNetwork: string | null = null,
        cryptoReceiveAddress: string | null = null,
        cryptoBlock: string | null = null,
        cryptoTransactionId: string | null = null,
        cryptoPaymentRequest: string | null = null,
        cryptoStatus: string | null = null,
        ) {
        this.confirmed = confirmed;
        this.cryptoAuthorizedAmount = cryptoAuthorizedAmount;
        this.cryptoNetworkFee = cryptoNetworkFee;
        this.cryptocurrency = cryptocurrency;
        this.cryptoNetwork = cryptoNetwork;
        this.cryptoReceiveAddress = cryptoReceiveAddress;
        this.cryptoBlock = cryptoBlock;
        this.cryptoTransactionId = cryptoTransactionId;
        this.cryptoPaymentRequest = cryptoPaymentRequest;
        this.cryptoStatus = cryptoStatus;
        }
}

  /**
   * Response details about tender amounts.
   */
export class PaymentAmounts {

  /**
   * Whether or not the transaction was approved for a partial amount.
   */
    partialAuth: boolean | null = null;

  /**
   * Whether or not an alternate currency was used.
   */
    altCurrency: boolean | null = null;

  /**
   * Whether or not a request was settled on an FSA card.
   */
    fsaAuth: boolean | null = null;

  /**
   * The currency code used for the transaction.
   */
    currencyCode: string | null = null;

  /**
   * The requested amount.
   */
    requestedAmount: string | null = null;

  /**
   * The authorized amount. May not match the requested amount in the event of a partial
   * auth.
   */
    authorizedAmount: string | null = null;

  /**
   * The remaining balance on the payment method.
   */
    remainingBalance: string | null = null;

  /**
   * The tip amount.
   */
    tipAmount: string | null = null;

  /**
   * The tax amount.
   */
    taxAmount: string | null = null;

  /**
   * The cash back amount the customer requested during the transaction.
   */
    requestedCashBackAmount: string | null = null;

  /**
   * The amount of cash back authorized by the gateway. This amount will be the entire
   * amount requested, or zero.
   */
    authorizedCashBackAmount: string | null = null;

    // Constructor with default values for optional fields
    constructor(partialAuth: boolean | null = null,
        altCurrency: boolean | null = null,
        fsaAuth: boolean | null = null,
        currencyCode: string | null = null,
        requestedAmount: string | null = null,
        authorizedAmount: string | null = null,
        remainingBalance: string | null = null,
        tipAmount: string | null = null,
        taxAmount: string | null = null,
        requestedCashBackAmount: string | null = null,
        authorizedCashBackAmount: string | null = null,
        ) {
        this.partialAuth = partialAuth;
        this.altCurrency = altCurrency;
        this.fsaAuth = fsaAuth;
        this.currencyCode = currencyCode;
        this.requestedAmount = requestedAmount;
        this.authorizedAmount = authorizedAmount;
        this.remainingBalance = remainingBalance;
        this.tipAmount = tipAmount;
        this.taxAmount = taxAmount;
        this.requestedCashBackAmount = requestedCashBackAmount;
        this.authorizedCashBackAmount = authorizedCashBackAmount;
        }
}

  /**
   * Request details about a payment method.
   */
export class PaymentMethod {

  /**
   * The payment token to be used for this transaction. This should be used for recurring
   * transactions.
   */
    token?: string;

  /**
   * Track 1 magnetic stripe data.
   */
    track1?: string;

  /**
   * Track 2 magnetic stripe data.
   */
    track2?: string;

  /**
   * The primary account number. We recommend using the terminal or e-commerce
   * tokenization libraries instead of passing account numbers in directly, as this
   * would put your application in PCI scope.
   */
    pan?: string;

  /**
   * The ACH routing number for ACH transactions.
   */
    routingNumber?: string;

  /**
   * The cardholder name. Only required if the request includes a primary account number
   * or track data.
   */
    cardholderName?: string;

  /**
   * The card expiration month for use with PAN based transactions.
   */
    expMonth?: string;

  /**
   * The card expiration year for use with PAN based transactions.
   */
    expYear?: string;

  /**
   * The card CVV for use with PAN based transactions.
   */
    cvv?: string;

  /**
   * The cardholder address for use with address verification.
   */
    address?: string;

  /**
   * The cardholder postal code for use with address verification.
   */
    postalCode?: string;

  /**
   * That the payment entry method is a manual keyed transaction. If this is true, no other
   * payment method will be accepted.
   */
    manualEntry?: boolean;

  /**
   * The key serial number used for DUKPT encryption.
   */
    ksn?: string;

  /**
   * The encrypted pin block.
   */
    pinBlock?: string;

  /**
   * Designates categories of cards: credit, debit, EBT.
   */
    cardType?: CardType;

  /**
   * Designates brands of payment methods: Visa, Discover, etc.
   */
    paymentType?: string;

    // Constructor with default values for optional fields
    constructor(token: string | undefined = undefined,
        track1: string | undefined = undefined,
        track2: string | undefined = undefined,
        pan: string | undefined = undefined,
        routingNumber: string | undefined = undefined,
        cardholderName: string | undefined = undefined,
        expMonth: string | undefined = undefined,
        expYear: string | undefined = undefined,
        cvv: string | undefined = undefined,
        address: string | undefined = undefined,
        postalCode: string | undefined = undefined,
        manualEntry: boolean = false,
        ksn: string | undefined = undefined,
        pinBlock: string | undefined = undefined,
        cardType: CardType | undefined = undefined,
        paymentType: string | undefined = undefined,
        ) {
        this.token = token;
        this.track1 = track1;
        this.track2 = track2;
        this.pan = pan;
        this.routingNumber = routingNumber;
        this.cardholderName = cardholderName;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.cvv = cvv;
        this.address = address;
        this.postalCode = postalCode;
        this.manualEntry = manualEntry;
        this.ksn = ksn;
        this.pinBlock = pinBlock;
        this.cardType = cardType;
        this.paymentType = paymentType;
        }
}

  /**
   * Request details about tender amounts.
   */
export class RequestAmount {

  /**
   * The transaction currency code.
   */
    currencyCode: string | null = null;

  /**
   * The requested amount.
   */
    amount: string | null = null;

  /**
   * That the request is tax exempt. Only required for tax exempt level 2 processing.
   */
    taxExempt: boolean | null = null;

  /**
   * A flag to add a surcharge to the transaction to cover credit card fees, if permitted.
   */
    surcharge: boolean | null = null;

  /**
   * A flag that applies a discount to negate the surcharge for debit transactions or other
   * surcharge ineligible payment methods.
   */
    cashDiscount: boolean | null = null;

    // Constructor with default values for optional fields
    constructor(currencyCode: string | null = null,
        amount: string | null = null,
        taxExempt: boolean | null = null,
        surcharge: boolean | null = null,
        cashDiscount: boolean | null = null,
        ) {
        this.currencyCode = currencyCode;
        this.amount = amount;
        this.taxExempt = taxExempt;
        this.surcharge = surcharge;
        this.cashDiscount = cashDiscount;
        }
}

  /**
   * Request subtotals.
   */
export class Subtotals {

  /**
   * The tip amount.
   */
    tipAmount?: string;

  /**
   * The tax amount.
   */
    taxAmount?: string;

    // Constructor with default values for optional fields
    constructor(tipAmount: string | undefined = undefined,
        taxAmount: string | undefined = undefined,
        ) {
        this.tipAmount = tipAmount;
        this.taxAmount = taxAmount;
        }
}

  /**
   * A reference to a previous transaction.
   */
export class PreviousTransaction {

  /**
   * The ID of the previous transaction being referenced.
   */
    transactionId: string | null = null;

    // Constructor with default values for optional fields
    constructor(transactionId: string | null = null,
        ) {
        this.transactionId = transactionId;
        }
}

  /**
   * Core response fields for a transaction.
   */
export class CoreResponse {

  /**
   * The ID assigned to the transaction.
   */
    transactionId: string | null = null;

  /**
   * The ID assigned to the batch.
   */
    batchId?: string;

  /**
   * The transaction reference string assigned to the transaction request. If no
   * transaction ref was assiged on the request, then the gateway will randomly generate
   * one.
   */
    transactionRef?: string;

  /**
   * The type of transaction.
   */
    transactionType: string | null = null;

  /**
   * The timestamp of the transaction.
   */
    timestamp: string | null = null;

  /**
   * The hash of the last tick block.
   */
    tickBlock: string | null = null;

  /**
   * That the transaction was processed on the test gateway.
   */
    test: boolean | null = null;

  /**
   * The settlement account for merchants with split settlements.
   */
    destinationAccount?: string;

  /**
   * The ECC signature of the response. Can be used to ensure that it was signed by the
   * terminal and detect man-in-the middle attacks.
   */
    sig?: string;

    // Constructor with default values for optional fields
    constructor(transactionId: string | null = null,
        batchId: string | undefined = undefined,
        transactionRef: string | undefined = undefined,
        transactionType: string | null = null,
        timestamp: string | null = null,
        tickBlock: string | null = null,
        test: boolean | null = null,
        destinationAccount: string | undefined = undefined,
        sig: string | undefined = undefined,
        ) {
        this.transactionId = transactionId;
        this.batchId = batchId;
        this.transactionRef = transactionRef;
        this.transactionType = transactionType;
        this.timestamp = timestamp;
        this.tickBlock = tickBlock;
        this.test = test;
        this.destinationAccount = destinationAccount;
        this.sig = sig;
        }
}
