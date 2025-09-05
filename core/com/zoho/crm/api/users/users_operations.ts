import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { Header } from "../../../../../../routes/header.ts";
import { HeaderMap } from "../../../../../../routes/header_map.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Choice } from "../../../../../../utils/util/choice.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { CountHandler } from "./count_handler.ts";
import { ResponseHandler } from "./response_handler.ts";

class UsersOperations {
  /**
   * The method to get users
   * @param paramInstance An instance of ParameterMap
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getUsers(
    paramInstance?: ParameterMap,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/users");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    handlerInstance.setHeader(headerInstance);
    let ResponseHandler = import.meta.resolve("./response_handler.ts");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to create users
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async createUsers(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/users");
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
   * The method to update users
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateUsers(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/users");
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
   * The method to get user
   * @param user A BigInt representing the user
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getUser(
    user: bigint,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/users/");
    apiPath = apiPath.concat(user.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setHeader(headerInstance);
    let ResponseHandler = import.meta.resolve("./response_handler.ts");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to update user
   * @param user A BigInt representing the user
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateUser(
    user: bigint,
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/users/");
    apiPath = apiPath.concat(user.toString());
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
   * The method to delete user
   * @param user A BigInt representing the user
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async deleteUser(user: bigint): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/users/");
    apiPath = apiPath.concat(user.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to get associated groups
   * @param user A BigInt representing the user
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getAssociatedGroups(
    user: bigint,
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/users/");
    apiPath = apiPath.concat(user.toString());
    apiPath = apiPath.concat("/actions/associated_groups");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    let ResponseHandler = import.meta.resolve("./response_handler.ts");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to users count
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<CountHandler>
   * @throws SDKException
   */
  public async usersCount(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<CountHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/users/actions/count");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    let CountHandler = import.meta.resolve("./count_handler.ts");
    return handlerInstance.apiCall<CountHandler>(
      CountHandler,
      "application/json"
    );
  }
}
class GetUsersParam {
  public static TYPE: Param<Choice<string>> = new Param<Choice<string>>(
    "type",
    "com.zoho.crm.api.Users.GetUsersParam"
  );
  public static PAGE: Param<number> = new Param<number>(
    "page",
    "com.zoho.crm.api.Users.GetUsersParam"
  );
  public static PER_PAGE: Param<number> = new Param<number>(
    "per_page",
    "com.zoho.crm.api.Users.GetUsersParam"
  );
  public static IDS: Param<string> = new Param<string>(
    "ids",
    "com.zoho.crm.api.Users.GetUsersParam"
  );
}

class GetUsersHeader {
  public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>(
    "If-Modified-Since",
    "com.zoho.crm.api.Users.GetUsersHeader"
  );
}

class GetUserHeader {
  public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>(
    "If-Modified-Since",
    "com.zoho.crm.api.Users.GetUserHeader"
  );
}

class GetAssociatedGroupsParam {
  public static INCLUDE: Param<string> = new Param<string>(
    "include",
    "com.zoho.crm.api.Users.GetAssociatedGroupsParam"
  );
}

class UsersCountParam {
  public static TYPE: Param<Choice<string>> = new Param<Choice<string>>(
    "type",
    "com.zoho.crm.api.Users.UsersCountParam"
  );
}

export {
  GetAssociatedGroupsParam as GetAssociatedGroupsParam,
  GetUserHeader as GetUserHeader,
  GetUsersHeader as GetUsersHeader,
  GetUsersParam as GetUsersParam,
  UsersOperations as MasterModel,
  UsersCountParam as UsersCountParam,
  UsersOperations as UsersOperations,
};
