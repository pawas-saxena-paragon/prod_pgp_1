import { IIntegrationConfig } from '@useparagon/core/integration';

import { default as TestingWf } from './workflows/testingWf';

/**
 * configuration for a klaviyo
 */
const config: IIntegrationConfig = {
  description: 'Sync list subscribers to Klaviyo',
  overviewText: `Connect your Klaviyo account to add new subscribers to your Klaviyo lists or campaigns. Grow your business and reach more customers by automating your email marketing with our Klaviyo integration.
   

Our Klaviyo integration enables you to:
   

• Automatically add new subscribers to lists or campaigns in Klaviyo
• Create or manage lists or campaigns in Klaviyo
• Sync subscribers from Klaviyo lists`,
  showWatermark: true,
  workflowDisplayOrder: [TestingWf],
};

export default config;
