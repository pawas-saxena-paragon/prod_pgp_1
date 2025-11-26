import {
  ICustomIntegrationConfig,
  createConfigInputs,
} from '@useparagon/core/integration';

/**
 * define inputs here which are used in custom integration config
 */
export const inputs = createConfigInputs({});

/**
 * custom integration config
 */
const config: ICustomIntegrationConfig = {
  name: 'googlecalendarcustom',
  active: false,
  description: 'googlecalendarcustom description',
  accentColor: '#000000',
  overviewText: '',
  workflowDisplayOrder: [],
  userProfileConfig: {
    strategy: 'HTTP',
    url: ``,
    method: 'POST',
    params: {},
    headers: {},
    body: {},
    bodyType: 'json',
    requireSuccess: false,
  },
  authenticationType: 'oauth',
  authorizationUrl: `https://accounts.google.com/o/oauth2/v2/auth`,
  accessTokenUrl: `https://oauth2.googleapis.com/token`,
  scopes:
    'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/contacts.readonly https://www.googleapis.com/auth/contacts.other.readonly https://www.googleapis.com/auth/directory.readonly',
  includeClientIdAndSecrets: true,
  usePKCEInCodeExchange: false,
  apiBaseUrl: `https://www.googleapis.com/calendar/v3`,
  testEndpointPath: `/users/me/calendarList`,
  authorization: {
    type: 'bearer',
    token: `{{settings.oauthAccessToken}}`,
  },
};
export default config;
