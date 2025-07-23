import { createInputs } from '@useparagon/integrations/googleCalendar';

/**
 * define inputs here which can be used across workflows
 */
const integrationInputs = createInputs({
  demo: {
    id: 'bbbb052f-e26a-4c04-97d5-01738c964d37',
    title: 'demo',
    tooltip: 'tooltipValue',
    required: false,
    type: 'custom_dropdown',
    key: 'demo',
    customDropdownOptions: [
      {
        label: 'Example Field 1',
        value: 1,
      },
    ],
  },
});

export default integrationInputs;
