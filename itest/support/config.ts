import fs from 'fs';
import path from 'path';
import isWindows from 'is-windows';

interface ITestConfigData {
  defaultTerminalAddress: string;
  defaultTerminalName: string;
  gatewayHost: string;
  dashboardHost: string;
  testGatewayHost: string;
  apiKey: string;
  bearerToken: string;
  signingKey: string;
  profiles: {
    [key: string]: {
      apiKey: string;
      bearerToken: string;
      signingKey: string;
    };
  };
}

interface ITestConfigFunctions {
  load: () => void;
  getTerminalAddress: () => string;
  getTerminalName: () => string;
  getGatewayHost: () => string;
  getDashboardHost: () => string;
  getTestGatewayHost: () => string;
  getApiKey: () => string;
  getBearerToken: () => string;
  getSigningKey: () => string;
  getCreds: (profile?: string) => { apiKey: string; bearerToken: string; signingKey: string };
}

type ITestConfig = ITestConfigData & ITestConfigFunctions;

const ITestConfig: ITestConfig = {
  defaultTerminalAddress: '',
  defaultTerminalName: '',
  gatewayHost: '',
  dashboardHost: '',
  testGatewayHost: '',
  apiKey: '',
  bearerToken: '',
  signingKey: '',
  profiles: {},

  load: function () {
    let configHome = '';
    if (isWindows()) {
      configHome = process.env.userprofile || '';
    } else {
      configHome = process.env.XDG_CONFIG_HOME || path.join(require('os').homedir(), '/.config');
    }

    const fileLocation = path.join(configHome, 'blockchyp', 'sdk-itest-config.json');
    const data = fs.readFileSync(fileLocation, 'utf-8');
    Object.assign(ITestConfig, JSON.parse(data));
  },

  getTerminalAddress: function () {
    return ITestConfig.defaultTerminalAddress;
  },

  getTerminalName: function () {
    return ITestConfig.defaultTerminalName;
  },

  getGatewayHost: function () {
    return ITestConfig.gatewayHost;
  },

  getDashboardHost: function () {
    return ITestConfig.dashboardHost;
  },

  getTestGatewayHost: function () {
    return ITestConfig.testGatewayHost;
  },

  getApiKey: function () {
    return ITestConfig.apiKey;
  },

  getBearerToken: function () {
    return ITestConfig.bearerToken;
  },

  getSigningKey: function () {
    return ITestConfig.signingKey;
  },

  getCreds: function (profile?: string) {
    if (profile) {
      return ITestConfig.profiles[profile];
    }
    return {
      apiKey: ITestConfig.apiKey,
      bearerToken: ITestConfig.bearerToken,
      signingKey: ITestConfig.signingKey,
    };
  },
};

export const Config: ITestConfig = ITestConfig;