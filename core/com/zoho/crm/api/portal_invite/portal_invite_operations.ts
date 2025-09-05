import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Choice } from "../../../../../../utils/util/choice.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";

class PortalInviteOperations {
  private module: string;
  /**
   * Creates an instance of PortalInviteOperations with the given parameters
   * @param module A String representing the module
   */
  constructor(module: string) {
    this.module = module;
  }

  /**
   * The method to invite users
   * @param record A BigInt representing the record
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async inviteUsers(
    record: bigint,
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.module.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(record.toString());
    apiPath = apiPath.concat("/actions/portal_invite");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
    handlerInstance.setParam(paramInstance);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }
}
class InviteUsersParam {
  public static USER_TYPE_ID: Param<bigint> = new Param<bigint>(
    "user_type_id",
    "com.zoho.crm.api.PortalInvite.InviteUsersParam"
  );
  public static TYPE: Param<Choice<string>> = new Param<Choice<string>>(
    "type",
    "com.zoho.crm.api.PortalInvite.InviteUsersParam"
  );
  public static LANGUAGE: Param<Choice<string>> = new Param<Choice<string>>(
    "language",
    "com.zoho.crm.api.PortalInvite.InviteUsersParam"
  );
}

export {
  InviteUsersParam as InviteUsersParam,
  PortalInviteOperations as MasterModel,
  PortalInviteOperations as PortalInviteOperations,
};
