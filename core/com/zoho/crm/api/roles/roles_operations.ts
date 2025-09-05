import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { ResponseHandler } from "./response_handler.ts";

class RolesOperations {
  /**
   * The method to get roles
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getRoles(): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/roles");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    let ResponseHandler = import.meta.resolve("./response_handler.ts");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to create roles
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async createRoles(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/roles");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to update roles
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateRoles(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/roles");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to get role
   * @param roleId A BigInt representing the roleId
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getRole(roleId: bigint): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/roles/");
    apiPath = apiPath.concat(roleId.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    let ResponseHandler = import.meta.resolve("./response_handler.ts");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to update role
   * @param roleId A BigInt representing the roleId
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateRole(
    roleId: bigint,
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/roles/");
    apiPath = apiPath.concat(roleId.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to delete role
   * @param roleId A BigInt representing the roleId
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async deleteRole(
    roleId: bigint,
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/roles/");
    apiPath = apiPath.concat(roleId.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setParam(paramInstance);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }
}
class DeleteRoleParam {
  public static TRANSFER_TO_ID: Param<bigint> = new Param<bigint>(
    "transfer_to_id",
    "com.zoho.crm.api.Roles.DeleteRoleParam"
  );
}

export {
  DeleteRoleParam as DeleteRoleParam,
  RolesOperations as MasterModel,
  RolesOperations as RolesOperations,
};
