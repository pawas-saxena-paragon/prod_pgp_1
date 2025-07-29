import { IIntegrationConfig } from '@useparagon/core/integration';

import { default as NewWorkflow } from './workflows/newWorkflow';
import { default as TestWf1 } from './workflows/testWf 1';

/**
 * configuration for a googleCalendar
 */
const config: IIntegrationConfig = {
  description: 'Sync events with Google Calendar',
  overviewText: `Connect your Google account and sync events with your Google Calendar. Increase your productivity by ensuring your schedule is always up to date - without manual data entry.
 
Our Google Calendar integration enables you to:
 
• Automatically add new events to your Google Calendar
• Sync events from your Google Calendar`,
  showWatermark: true,
  workflowDisplayOrder: [TestWf1, NewWorkflow],
};

export default config;
