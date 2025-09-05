import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { ResponseHandler } from "./response_handler.ts";

class UsersTerritoriesOperations {
  private user: bigint;
  /**
   * Creates an instance of UsersTerritoriesOperations with the given parameters
   * @param user A BigInt representing the user
   */
  constructor(user: bigint) {
    this.user = user;
  }

  /**
   * The method to get territories of user
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getTerritoriesOfUser(): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/users/");
    apiPath = apiPath.concat(this.user.toString());
    apiPath = apiPath.concat("/territories");
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
   * The method to associate territories to user
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async associateTerritoriesToUser(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/users/");
    apiPath = apiPath.concat(this.user.toString());
    apiPath = apiPath.concat("/territories");
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
   * The method to remove territories from user
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async removeTerritoriesFromUser(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/users/");
    apiPath = apiPath.concat(this.user.toString());
    apiPath = apiPath.concat("/territories");
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

  /**
   * The method to get territory of user
   * @param territory A BigInt representing the territory
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getTerritoryOfUser(
    territory: bigint
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/users/");
    apiPath = apiPath.concat(this.user.toString());
    apiPath = apiPath.concat("/territories/");
    apiPath = apiPath.concat(territory.toString());
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
   * The method to remove territory from user
   * @param territory A BigInt representing the territory
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async removeTerritoryFromUser(
    territory: bigint
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/users/");
    apiPath = apiPath.concat(this.user.toString());
    apiPath = apiPath.concat("/territories/");
    apiPath = apiPath.concat(territory.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }
}
class RemoveTerritoriesFromUserParam {
  public static IDS: Param<string> = new Param<string>(
    "ids",
    "com.zoho.crm.api.UsersTerritories.RemoveTerritoriesFromUserParam"
  );
}

export {
  UsersTerritoriesOperations as MasterModel,
  RemoveTerritoriesFromUserParam as RemoveTerritoriesFromUserParam,
  UsersTerritoriesOperations as UsersTerritoriesOperations,
};
