import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { ResponseHandler } from "./response_handler.ts";

class BulkReadOperations {
  /**
   * The method to create bulk read job
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async createBulkReadJob(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/bulk/v8/read");
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
   * The method to get bulk read job details
   * @param jobId A BigInt representing the jobId
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getBulkReadJobDetails(
    jobId: bigint
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/bulk/v8/read/");
    apiPath = apiPath.concat(jobId.toString());
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
   * The method to download result
   * @param jobId A BigInt representing the jobId
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async downloadResult(
    jobId: bigint
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/bulk/v8/read/");
    apiPath = apiPath.concat(jobId.toString());
    apiPath = apiPath.concat("/result");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    let ResponseHandler = import.meta.resolve("./response_handler.ts");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/x-download"
    );
  }
}
export {
  BulkReadOperations as BulkReadOperations,
  BulkReadOperations as MasterModel,
};
