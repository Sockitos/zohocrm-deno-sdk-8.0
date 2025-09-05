import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionResponse } from "./action_response.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { StatusResponseHandler } from "./status_response_handler.ts";

class MassDeleteTagsOperations {
  /**
   * The method to mass delete tags
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionResponse>
   * @throws SDKException
   */
  public async massDeleteTags(
    request: BodyWrapper
  ): Promise<APIResponse<ActionResponse>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/tags/actions/mass_delete");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    let ActionResponse = import.meta.resolve("./action_response.ts");
    return handlerInstance.apiCall<ActionResponse>(
      ActionResponse,
      "application/json"
    );
  }

  /**
   * The method to get status
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<StatusResponseHandler>
   * @throws SDKException
   */
  public async getStatus(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<StatusResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/tags/actions/mass_delete");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    let StatusResponseHandler = import.meta.resolve(
      "./status_response_handler.ts"
    );
    return handlerInstance.apiCall<StatusResponseHandler>(
      StatusResponseHandler,
      "application/json"
    );
  }
}
class GetStatusParam {
  public static JOB_ID: Param<string> = new Param<string>(
    "job_id",
    "com.zoho.crm.api.MassDeleteTags.GetStatusParam"
  );
}

export {
  GetStatusParam as GetStatusParam,
  MassDeleteTagsOperations as MassDeleteTagsOperations,
  MassDeleteTagsOperations as MasterModel,
};
