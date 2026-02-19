import {
  EventStep,
  FunctionStep,
  RequestStep,
  Workflow,
} from '@useparagon/core';
import { IContext } from '@useparagon/core/execution';
import { IPersona } from '@useparagon/core/persona';
import { ConditionalInput } from '@useparagon/core/steps/library/conditional';
import { IConnectUser, IPermissionContext } from '@useparagon/core/user';
import {
  createInputs,
  IKlaviyoIntegration,
  InputResultMap,
} from '@useparagon/integrations/klaviyo';

import event from '../../../events/newTask';
import personaMeta from '../../../persona.meta';

/**
 * wf2 Workflow implementation
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
    const triggerStep = new EventStep(event);

    const functionStepStep = new FunctionStep({
      autoRetry: false,
      description: 'Function Step',
      code: function yourFunction(parameters, libraries) {
        return 'hello world';
      },
      parameters: {},
    });

    const requestStep = new RequestStep({
      autoRetry: false,
      continueWorkflowOnError: false,
      description: 'variable testing',
      url: `https://webhook.site/d5f30f01-04e7-4bba-a360-f94e3fbe54a5`,
      method: 'POST',
      params: {},
      bodyType: 'json',
      headers: {},
      body: {
        prop1: `${functionStepStep.output.result}`,
        props3and4: `[{"prop3":"${functionStepStep.output.result}","prop4":"${functionStepStep.output.result}"}]`,
      },
    });

    triggerStep.nextStep(functionStepStep).nextStep(requestStep);

    /**
     * Pass all steps used in the workflow to the `.register()`
     * function. The keys used in this function must remain stable.
     */
    return this.register({ triggerStep, functionStepStep, requestStep });
  }

  /**
   * The name of the workflow, used in the Dashboard and Connect Portal.
   */
  name: string = 'wf2';

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
  readonly id: string = '17737fd0-09cf-42dd-a660-2ac2cac9b54a';
}
