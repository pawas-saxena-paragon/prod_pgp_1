import {
  AppLevelAPIResource,
  AppLevelResourceAuthorizationConfig,
  AppLevelResourceRequestConfig,
  AppLevelResourceTestRequestConfig,
  IResourceContext,
} from '@useparagon/core';

/**
 * sfdsf Resource implementation
 */
export default class extends AppLevelAPIResource {
  /**
   * This property is maintained by Paragon. Do not edit this property.
   */
  readonly id: string = '3b3062a7-6e26-4b7f-827e-eb0e455ad320';

  /**
   * The name of the resource
   */
  name: string = 'sfdsf';

  /**
   * defines config for http request
   */
  getRequestConfig(context: IResourceContext): AppLevelResourceRequestConfig {
    return {
      apiBaseUrl: `sdfdsf`,
      authentication: { type: 'bearer', token: `sdfdsfsf` },
    };
  }

  /**
   * define test request config
   */
  getTestRequestConfig(
    context: IResourceContext,
  ): AppLevelResourceTestRequestConfig {
    return {
      url: `dsfdsf`,
      method: 'GET',
      params: { dsfdsf: `sdfdsf` },
      headers: { sdsf: `sdfsdf` },
      bodyType: 'json',
    };
  }

  /**
   * define authorization config for resource connection
   */
  getAuthorizationConfig(
    context: IResourceContext,
  ): AppLevelResourceAuthorizationConfig {
    return {
      type: 'oauth_client_credential',
      accessTokenUrl: `sfdsf`,
      userInputs: [],
      includeClientIdClientSecretInExchange: true,
      audience: ``,
    };
  }
}
