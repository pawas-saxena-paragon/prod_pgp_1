import { createInputs } from '@useparagon/integrations/hubspot';

/**
 * define inputs here which can be used across workflows
 */
const integrationInputs = createInputs({
  field_title: {
    id: '9cfd6e31-3b60-420b-b8a2-ab04bfce92db',
    title: 'fieldTitle',
    tooltip: 'sdsd',
    required: true,
    type: 'field_mapping',
    useDynamicMapper: false,
    fieldMappings: [
      {
        label: 'prop1 label',
      },
    ],
  },
});

export default integrationInputs;
