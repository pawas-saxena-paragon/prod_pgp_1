import {
  ICustomIntegrationConfig,
  createConfigInputs,
  credentials,
} from '@useparagon/core/integration';

/**
 * define inputs here which are used in custom integration config
 */
export const inputs = createConfigInputs({
  organization_id: {
    id: '81a46ec7-6076-40ad-b90e-8e8214d9722c',
    type: 'text',
    title: 'OrganizationID',
    subtitle: '',
    placeholder: '',
    suffixLabel: '',
  },
  developer_key: {
    id: 'b50f05c5-7767-4ee0-9c67-b92ce9854441',
    type: 'text',
    title: 'DeveloperKey',
    subtitle: '',
    placeholder: '',
    suffixLabel: '',
  },
});

/**
 * custom integration config
 */
const config: ICustomIntegrationConfig = {
  name: 'bill.com demo',
  active: false,
  description: 'bill.com demo',
  accentColor: '#000000',
  overviewText: '',
  workflowDisplayOrder: [],

  authenticationType: 'ropc_app',
  accessTokenUrl: `https://gateway.stage.bill.com/connect/v3/login`,

  apiBaseUrl: `https://gateway.stage.bill.com/connect/v3`,
  testEndpointPath: `customers`,
  authorization: {
    type: 'auth_header',
    headers: {
      sessionId: `${credentials.savedCredentials.sessionId}`,
      devKey: `${credentials.savedCredentials.devKey}`,
    },
  },

  requestOptions: {
    accessTokenOptions: {
      enabled: true,
      configuration: {
        bodyType: 'json',
        headers: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
        },
        body: {
          grant_type: 'password',
          username: `${credentials.username}`,
          password: `${credentials.password}`,
          organizationId: `${inputs.organization_id}`,
          devKey: `${inputs.developer_key}`,
        },
      },
    },
    saveCredentialsOptions: {
      credentialSchema: {
        sessionId: `${credentials.tokenRequest.response.sessionId}`,
        organizationId: `${credentials.tokenRequest.response.organizationId}`,
        userId: `${credentials.tokenRequest.response.userId}`,
        devKey: `${inputs.developer_key}`,
      },
      tokenType: {
        devKey: 'encryptedToken',
        userId: 'providerData',
        organizationId: 'providerData',
        sessionId: 'encryptedToken',
      },
    },
  },
};
export default config;
