import { SDKException } from "../../core/com/zoho/crm/api/exception/sdk_exception.ts";
import { Choice, CommonAPIHandler } from "../../zohocrmsdk.ts";
import { Constants } from "./constants.ts";

/**
 * This class handles module field details.
 */
class Utility {
  static async assertNotNull(value: any, errorCode: any, errorMessage: any) {
    if (value == null) {
      throw new SDKException(errorCode, errorMessage);
    }
  }

  static async getJSONObject(json: { [key: string]: any }, key: string) {
    let keyArray = Array.from(Object.keys(json));
    for (let keyInJSON of keyArray) {
      if (key.toLowerCase() == keyInJSON.toLowerCase()) {
        return json[keyInJSON];
      }
    }
    return null;
  }

  async getUserName(token: string | null): Promise<string | null> {
    const HeaderMap = (await import("../../routes/header_map.ts")).HeaderMap;
    const Header = (await import("../../routes/header.ts")).Header;
    const ParameterMap = (await import("../../routes/parameter_map.ts"))
      .ParameterMap;
    let ResponseWrapper = (
      await import("../../core/com/zoho/crm/api/users/response_wrapper.ts")
    ).ResponseWrapper;
    let APIException = (
      await import("../../core/com/zoho/crm/api/users/api_exception.ts")
    ).APIException;
    const GetUsersParam = (
      await import("../../core/com/zoho/crm/api/users/users_operations.ts")
    ).GetUsersParam;
    let userName: string | null = null;
    let paramInstance = new ParameterMap();
    await paramInstance.add(
      GetUsersParam.TYPE,
      new Choice(Constants.CURRENTUSER)
    );
    let headerInstance = new HeaderMap();
    var handlerInstance = new CommonAPIHandler();
    var apiPath = "";
    apiPath = apiPath.concat("/crm/v8/users");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    await headerInstance.add(
      await new Header(Constants.AUTHORIZATION, Constants.STRING_NAMESPACE),
      Constants.OAUTH_HEADER_PREFIX + token
    );
    handlerInstance.setHeader(headerInstance);
    let ResponseHandler = require.resolve(
      "../../core/com/zoho/crm/api/users/response_handler.ts"
    );
    let response = await handlerInstance
      .apiCall(ResponseHandler, "application/json")
      .catch((err) => {
        throw err;
      });
    if (response != null) {
      if ([204, 304].includes(response.getStatusCode())) {
        return null;
      }
      //Get object from response
      let responseObject = response.getObject();
      if (responseObject != null) {
        if (responseObject instanceof ResponseWrapper) {
          let users = responseObject.getUsers();
          for (let user of users) {
            userName = user.getEmail();
            break;
          }
        } else if (responseObject instanceof APIException) {
          let errorResponse: { [key: string]: any } = {};
          errorResponse[Constants.CODE] = responseObject.getCode().getValue();
          errorResponse[Constants.STATUS] = responseObject
            .getStatus()
            .getValue();
          errorResponse[Constants.MESSAGE] = responseObject.getMessage();
          throw new SDKException(
            Constants.API_EXCEPTION,
            null,
            errorResponse,
            null
          );
        }
      }
    }
    let orgID = await this.getUserOrgID(token);
    if (userName == null || orgID == null) {
      return null;
    }
    return userName + ":" + orgID;
  }

  async getUserOrgID(token: string | null): Promise<string | null> {
    const HeaderMap = (await import("../../routes/header_map.ts")).HeaderMap;
    const Header = (await import("../../routes/header.ts")).Header;
    let ResponseWrapper = (
      await import("../../core/com/zoho/crm/api/org/response_wrapper.ts")
    ).ResponseWrapper;
    let APIException = (
      await import("../../core/com/zoho/crm/api/org/api_exception.ts")
    ).APIException;
    var handlerInstance = new CommonAPIHandler();
    var apiPath = "";
    apiPath = apiPath.concat("/crm/v8/org");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    let headerInstance = new HeaderMap();
    await headerInstance.add(
      await new Header(Constants.AUTHORIZATION, Constants.STRING_NAMESPACE),
      Constants.OAUTH_HEADER_PREFIX + token
    );
    handlerInstance.setHeader(headerInstance);
    let ResponseHandler = require.resolve(
      "../../core/com/zoho/crm/api/org/response_handler.ts"
    );
    let response = await handlerInstance
      .apiCall(ResponseHandler, "application/json")
      .catch((err) => {
        throw err;
      });
    if (response != null) {
      let responseObject = response.getObject();
      if (responseObject != null) {
        if (responseObject instanceof ResponseWrapper) {
          let orgs = responseObject.getOrg();
          for (let org of orgs) {
            return org.getZgid();
          }
        } else if (responseObject instanceof APIException) {
          let errorResponse: { [key: string]: any } = {};
          errorResponse[Constants.CODE] = responseObject.getCode().getValue();
          errorResponse[Constants.STATUS] = responseObject
            .getStatus()
            .getValue();
          errorResponse[Constants.MESSAGE] = responseObject.getMessage();
          throw new SDKException(
            Constants.API_EXCEPTION,
            null,
            errorResponse,
            null
          );
        }
      }
    }
    return null;
  }
}

export { Utility as MasterModel, Utility as Utility };
