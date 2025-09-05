import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { ResponseHandler } from "./response_handler.ts";

class CustomViewsOperations {
  /**
   * The method to get custom views
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getCustomViews(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/custom_views");
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
   * The method to get custom view
   * @param id A BigInt representing the id
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getCustomView(
    id: bigint,
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/custom_views/");
    apiPath = apiPath.concat(id.toString());
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
   * The method to change sort order of custom views
   * @param request An instance of BodyWrapper
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async changeSortOrderOfCustomViews(
    request: BodyWrapper,
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat(
      "/crm/v8/settings/custom_views/actions/change_sort"
    );
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    handlerInstance.setParam(paramInstance);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to change sort order of custom view
   * @param id A BigInt representing the id
   * @param request An instance of BodyWrapper
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async changeSortOrderOfCustomView(
    id: bigint,
    request: BodyWrapper,
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/custom_views/");
    apiPath = apiPath.concat(id.toString());
    apiPath = apiPath.concat("/actions/change_sort");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setParam(paramInstance);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }
}
class GetCustomViewsParam {
  public static MODULE: Param<string> = new Param<string>(
    "module",
    "com.zoho.crm.api.CustomViews.GetCustomViewsParam"
  );
  public static PAGE: Param<number> = new Param<number>(
    "page",
    "com.zoho.crm.api.CustomViews.GetCustomViewsParam"
  );
  public static PER_PAGE: Param<number> = new Param<number>(
    "per_page",
    "com.zoho.crm.api.CustomViews.GetCustomViewsParam"
  );
}

class GetCustomViewParam {
  public static MODULE: Param<string> = new Param<string>(
    "module",
    "com.zoho.crm.api.CustomViews.GetCustomViewParam"
  );
}

class ChangeSortOrderOfCustomViewsParam {
  public static MODULE: Param<string> = new Param<string>(
    "module",
    "com.zoho.crm.api.CustomViews.ChangeSortOrderOfCustomViewsParam"
  );
}

class ChangeSortOrderOfCustomViewParam {
  public static MODULE: Param<string> = new Param<string>(
    "module",
    "com.zoho.crm.api.CustomViews.ChangeSortOrderOfCustomViewParam"
  );
}

export {
  ChangeSortOrderOfCustomViewParam as ChangeSortOrderOfCustomViewParam,
  ChangeSortOrderOfCustomViewsParam as ChangeSortOrderOfCustomViewsParam,
  CustomViewsOperations as CustomViewsOperations,
  GetCustomViewParam as GetCustomViewParam,
  GetCustomViewsParam as GetCustomViewsParam,
  CustomViewsOperations as MasterModel,
};
