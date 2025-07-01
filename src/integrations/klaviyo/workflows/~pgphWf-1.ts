import { EventStep, FunctionStep, UnselectedStep, Workflow } from '@useparagon/core';
import { IContext } from '@useparagon/core/execution';
import { IPersona } from '@useparagon/core/persona';
import { ConditionalInput } from '@useparagon/core/steps/library/conditional';
import { IConnectUser, IPermissionContext } from '@useparagon/core/user';
import {
  createInputs,
  IKlaviyoIntegration,
  InputResultMap,
} from '@useparagon/integrations/klaviyo';

import personaMeta from '../../../persona.meta';


/**
 * pgph-wf-1 Workflow implementation
 */
export default class extends Workflow<
  IKlaviyoIntegration,
  IPersona<typeof personaMeta>,
  InputResultMap
> {
  /**
   * Define workflow steps and orchestration.
   */
  define(
    integration: IKlaviyoIntegration,
    context: IContext<InputResultMap>,
    connectUser: IConnectUser<IPersona<typeof personaMeta>>,
  ) {
    const triggerStep = new EventStep({
      name: 'New Task', 
      schema: {"a": "b"}
    });

    const functionStepStep = new FunctionStep({
      autoRetry: false,
      description: 'Function Step',
      code: function yourFunction(parameters, libraries) {
        return 'hello world';
      },
      parameters: {},
    });

    triggerStep.nextStep(functionStepStep);

    /**
     * Pass all steps used in the workflow to the `.register()`
     * function. The keys used in this function must remain stable.
     */
    return this.register({ triggerStep, functionStepStep });
  }

  /**
   * The name of the workflow, used in the Dashboard and Connect Portal.
   */
  name: string = 'pgph-wf-1';

  /**
   * A user-facing description of the workflow shown in the Connect Portal.
   */
  description: string = '';

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
  readonly id: string = '5080566e-24fe-49a8-b058-d63dfce20aa5';
}
