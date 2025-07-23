import {
  EndpointStep,
  FunctionStep,
  ResponseStep,
  Workflow,
} from '@useparagon/core';
import { IContext } from '@useparagon/core/execution';
import { IPersona } from '@useparagon/core/persona';
import { ConditionalInput } from '@useparagon/core/steps/library/conditional';
import { IConnectUser, IPermissionContext } from '@useparagon/core/user';
import {
  createInputs,
  IGoogleCalendarIntegration,
  InputResultMap,
} from '@useparagon/integrations/googleCalendar';

import personaMeta from '../../../persona.meta';
import sharedInputs from '../inputs';

/**
 * test wf 1 Workflow implementation
 */
export default class extends Workflow<
  IGoogleCalendarIntegration,
  IPersona<typeof personaMeta>,
  InputResultMap
> {
  /**
   * Define workflow steps and orchestration.
   */
  define(
    integration: IGoogleCalendarIntegration,
    context: IContext<InputResultMap>,
    connectUser: IConnectUser<IPersona<typeof personaMeta>>,
  ) {
    const triggerStep = new EndpointStep({
      allowArbitraryPayload: false,
      paramValidations: [
        {
          key: 'key',
          required: true,
        },
      ] as const,
      headerValidations: [] as const,
      bodyValidations: [] as const,
    });

    const responseStep = new ResponseStep({
      description: 'description',
      statusCode: 200,
      responseType: 'JSON',
      body: {
        body_key: triggerStep.output.request.params,
        body_key_2: context.getInput(sharedInputs.demo),
      },
    });

    const functionStep = new FunctionStep({
      autoRetry: false,
      description: 'description',
      code: function yourFunction(parameters, libraries) {
        return typeof parameters.p1;
      },
      parameters: { p1: '' },
    });

    triggerStep.nextStep(responseStep).nextStep(functionStep);

    /**
     * Pass all steps used in the workflow to the `.register()`
     * function. The keys used in this function must remain stable.
     */
    return this.register({ triggerStep, responseStep, functionStep });
  }

  /**
   * The name of the workflow, used in the Dashboard and Connect Portal.
   */
  name: string = 'test wf 1';

  /**
   * A user-facing description of the workflow shown in the Connect Portal.
   */
  description: string = 'Add a user-facing description of this workflow';

  /**
   * Define workflow-level User Settings. For integration-level User
   * Settings, see ../config.ts.
   * https://docs.useparagon.com/connect-portal/workflow-user-settings
   */
  inputs = createInputs({});

  /**
   * If set to true, the workflow will appear as enabled by default once
   * a user connects their account to the integration.
   * https://docs.useparagon.com/connect-portal/displaying-workflows#default-to-enabled
   */
  defaultEnabled: boolean = false;

  /**
   * If set to true, the workflow will be hidden from all users from the
   * Connect Portal.
   * https://docs.useparagon.com/connect-portal/displaying-workflows#hide-workflow-from-portal-for-all-users
   */
  hidden: boolean = false;

  /**
   * You can restrict the visibility of this workflow to specific users
   * with Workflow Permissions.
   * https://docs.useparagon.com/connect-portal/workflow-permissions
   */
  definePermissions(
    connectUser: IPermissionContext<IPersona<typeof personaMeta>>,
  ): ConditionalInput | undefined {
    return undefined;
  }

  /**
   * This property is maintained by Paragon. Do not edit this property.
   */
  readonly id: string = '77121b89-1a93-4f9e-a952-a3cfb7b2d4d7';
}
