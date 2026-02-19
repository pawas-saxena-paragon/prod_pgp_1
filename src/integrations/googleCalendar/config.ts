import { IIntegrationConfig } from '@useparagon/core/integration';

import { default as DeployTest1 } from './workflows/deployTest 1';
import { default as DeployTest3 } from './workflows/deployTest 3';
import { default as Deploytest1 } from './workflows/deploytest1';
import { default as Deploytest2 } from './workflows/deploytest2';

/**
 * configuration for a googleCalendar
 */
const config: IIntegrationConfig = {
  active: true,
  description: 'Sync events with Google Calendar',
  overviewText: `Connect your Google account and sync events with your Google Calendar. Increase your productivity by ensuring your schedule is always up to date - without manual data entry.
 
Our Google Calendar integration enables you to:
 
• Automatically add new events to your Google Calendar
• Sync events from your Google Calendar`,
  showWatermark: true,
  workflowDisplayOrder: [Deploytest1, Deploytest2, DeployTest1, DeployTest3],
};

export default config;
