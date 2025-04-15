/**
 * Copyright 2019-2025 BlockChyp, Inc. All rights reserved. Use of this code is governed
 * by a license that can be found in the LICENSE file.
 *
 * This file was generated automatically by the BlockChyp SDK Generator. Changes to this
 * file will be lost every time the code is regenerated.
 */

import { v4 as uuidv4 } from 'uuid';
import { Config } from './support/config';
import * as BlockChyp from '../index';

describe('SubmitApplication', function () {
  let originalTimeout: number;
  let client: typeof BlockChyp.BlockChypClient;
  Config.load();

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  it('can submit an application to add a new merchant', function (done) {
    client = BlockChyp.newClient(Config.getCreds("partner"));
    client.setGatewayHost(Config.getGatewayHost());
    client.setTestGatewayHost(Config.getTestGatewayHost());
    client.setDashboardHost(Config.getDashboardHost());

    const testDelay = process.env.BC_TEST_DELAY;
    let testDelayInt = 0;
    if (testDelay) {
      testDelayInt = parseInt(testDelay);
    }

    console.log('Running submitApplication...');

    setTimeout(async function () {
      try {
        // setup request object
        const request = new BlockChyp.SubmitApplicationRequest();
        request.test = true;
        request.inviteCode = 'asdf';
        request.dbaName = 'BlockChyp';
        request.corporateName = 'BlockChyp Inc.';
        request.webSite = 'https://www.blockchyp.com';
        request.taxIdNumber = '123456789';
        request.entityType = 'CORPORATION';
        request.stateOfIncorporation = 'UT';
        request.merchantType = 'RETAIL';
        request.businessDescription = 'Payment processing solutions';
        request.yearsInBusiness = '5';
        request.businessPhoneNumber = '5555551234';

        const physicalAddress = new BlockChyp.Address();
        physicalAddress.address1 = '355 S 520 W';
        physicalAddress.city = 'Lindon';
        physicalAddress.stateOrProvince = 'UT';
        physicalAddress.postalCode = '84042';
        physicalAddress.countryCode = 'US';
        request.physicalAddress = physicalAddress;

        const mailingAddress = new BlockChyp.Address();
        mailingAddress.address1 = '355 S 520 W';
        mailingAddress.city = 'Lindon';
        mailingAddress.stateOrProvince = 'UT';
        mailingAddress.postalCode = '84042';
        mailingAddress.countryCode = 'US';
        request.mailingAddress = mailingAddress;
        request.contactFirstName = 'John';
        request.contactLastName = 'Doe';
        request.contactPhoneNumber = '5555555678';
        request.contactEmail = 'john.doe@example.com';
        request.contactTitle = 'CEO';
        request.contactTaxIdNumber = '987654321';
        request.contactDOB = '1980-01-01';
        request.contactDlNumber = 'D1234567';
        request.contactDlStateOrProvince = 'NY';
        request.contactDlExpiration = '2025-12-31';

        const contactHomeAddress = new BlockChyp.Address();
        contactHomeAddress.address1 = '355 S 520 W';
        contactHomeAddress.city = 'Lindon';
        contactHomeAddress.stateOrProvince = 'UT';
        contactHomeAddress.postalCode = '84042';
        contactHomeAddress.countryCode = 'US';
        request.contactHomeAddress = contactHomeAddress;
        request.contactRole = 'OWNER';

        const owners = new BlockChyp.Owner();
        owners.firstName = 'John';
        owners.lastName = 'Doe';
        owners.jobTitle = 'CEO';
        owners.taxIdNumber = '876543210';
        owners.phoneNumber = '5555559876';
        owners.dob = '1981-02-02';
        owners.ownership = '50';
        owners.email = 'john.doe@example.com';
        owners.dlNumber = 'D7654321';
        owners.dlStateOrProvince = 'UT';
        owners.dlExpiration = '2024-12-31';

        const address = new BlockChyp.Address();
        address.address1 = '355 S 520 W';
        address.city = 'Lindon';
        address.stateOrProvince = 'UT';
        address.postalCode = '84042';
        address.countryCode = 'US';
        owners.address = address;

        request.owners = [owners];

        const manualAccount = new BlockChyp.ApplicationAccount();
        manualAccount.name = 'Business Checking';
        manualAccount.bank = 'Test Bank';
        manualAccount.accountHolderName = 'BlockChyp Inc.';
        manualAccount.routingNumber = '124001545';
        manualAccount.accountNumber = '987654321';
        request.manualAccount = manualAccount;
        request.averageTransaction = '100.00';
        request.highTransaction = '1000.00';
        request.averageMonth = '10000.00';
        request.highMonth = '20000.00';
        request.refundPolicy = '30_DAYS';
        request.refundDays = '30';
        request.timeZone = 'America/Denver';
        request.batchCloseTime = '23:59';
        request.multipleLocations = 'false';
        request.ebtRequested = 'false';
        request.ecommerce = 'true';
        request.cardPresentPercentage = '70';
        request.phoneOrderPercentage = '10';
        request.ecomPercentage = '20';
        request.signerName = 'John Doe';

        const httpResponse = await client.submitApplication(request)
        const response: BlockChyp.Acknowledgement = httpResponse.data;
        // response assertions
        expect(response.success).toBe(true);

      } catch (error) {
        console.log('Error:', error);
        fail(error);
      } finally {
        done();
      }
    }, testDelayInt * 1000);
  });
});
