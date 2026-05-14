import {
  IResourceContext,
  UserLevelAPIResource,
  UserLevelResourceAuthorizationConfig,
  UserLevelResourceRequestConfig,
  UserLevelResourceTestRequestConfig,
  UserProfileUIConfig,
} from '@useparagon/core';

/**
 * klaviyores Resource implementation
 */
export default class extends UserLevelAPIResource {
  /**
   * This property is maintained by Paragon. Do not edit this property.
   */
  readonly id: string = 'c194bf4b-68b8-4f94-baad-b89c520e95e2';

  /**
   * The name of the resource
   */
  name: string = 'klaviyores';

  /**
   * defines config for http request
   */
  getRequestConfig(context: IResourceContext): UserLevelResourceRequestConfig {
    return {
      apiBaseUrl: `https://a.klaviyo.com/api`,
      authentication: {
        type: 'auth_header',
        headers: {
          Authorization: `Klaviyo-API-Key ${context.getInput(
            'klavioy-api-key',
          )}`,
          Revision: `2024-07-15`,
        },
      },
    };
  }

  /**
   * define test request config
   */
  getTestRequestConfig(
    context: IResourceContext,
  ): UserLevelResourceTestRequestConfig {
    return {
      url: `lists`,
      method: 'GET',
      params: {},
      headers: {
        Authorization: `Klaviyo-API-Key ${context.getInput('klavioy-api-key')}`,
        Revision: `2024-07-15`,
      },
      bodyType: 'json',
    };
  }

  /**
   * define authorization config for resource connection
   */
  getAuthorizationConfig(
    context: IResourceContext,
  ): UserLevelResourceAuthorizationConfig {
    return { type: 'api_key', userInputs: ['klavioy-api-key'] };
  }

  /**
   * define user profile config
   */
  getUserProfileConfig(
    context: IResourceContext,
  ): UserProfileUIConfig | undefined {
    return {
      strategy: 'HTTP',
      url: `lists`,
      method: 'GET',
      params: {},
      headers: {
        Authorization: `Klaviyo-API-Key ${context.getInput('klavioy-api-key')}`,
      },
      bodyType: 'json',
      requireSuccess: true,
    };
  }
}
