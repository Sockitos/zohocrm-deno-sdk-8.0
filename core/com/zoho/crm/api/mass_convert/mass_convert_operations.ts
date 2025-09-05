import { createRequire } from "node:module";
import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionResponse } from "./action_response.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { ResponseHandler } from "./response_handler.ts";

const require = createRequire(import.meta.url);
class MassConvertOperations {
  /**
   * The method to mass convert
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionResponse>
   * @throws SDKException
   */
  public async massConvert(
    request: BodyWrapper
  ): Promise<APIResponse<ActionResponse>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/Leads/actions/mass_convert");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    handlerInstance.setModuleAPIName("Deals");
    let ActionResponse = require.resolve("./action_response");
    return handlerInstance.apiCall<ActionResponse>(
      ActionResponse,
      "application/json"
    );
  }

  /**
   * The method to get job status
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getJobStatus(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/Leads/actions/mass_convert");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
    handlerInstance.setParam(paramInstance);
    let ResponseHandler = require.resolve("./response_handler");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }
}
class GetJobStatusParam {
  public static JOB_ID: Param<bigint> = new Param<bigint>(
    "job_id",
    "com.zoho.crm.api.MassConvert.GetJobStatusParam"
  );
}

export {
  GetJobStatusParam as GetJobStatusParam,
  MassConvertOperations as MassConvertOperations,
  MassConvertOperations as MasterModel,
};
