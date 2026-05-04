import { createInputs } from '@useparagon/integrations/hubspot';

/**
 * define inputs here which can be used across workflows
 */
const integrationInputs = createInputs({
  field_title: {
    id: '9cfd6e31-3b60-420b-b8a2-ab04bfce92db',
    title: 'fieldTitle',
    tooltip: '',
    required: false,
    type: 'custom_dropdown',
    key: 'fieldtitle',
    customDropdownOptions: [
      {
        label: 'Example Field 1',
        value: 'field-1',
      },
      {
        label: 'Example Field 2',
        value: 'field-2',
      },
    ],
  },
});

export default integrationInputs;
