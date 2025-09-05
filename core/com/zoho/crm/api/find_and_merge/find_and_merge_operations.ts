import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { ResponseHandler } from "./response_handler.ts";

class FindAndMergeOperations {
  private masterrecordid: bigint;
  private module: string;
  /**
   * Creates an instance of FindAndMergeOperations with the given parameters
   * @param module A String representing the module
   * @param masterrecordid A BigInt representing the masterrecordid
   */
  constructor(module: string, masterrecordid: bigint) {
    this.module = module;
    this.masterrecordid = masterrecordid;
  }

  /**
   * The method to get record merge
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getRecordMerge(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.module.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.masterrecordid.toString());
    apiPath = apiPath.concat("/actions/merge");
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
   * The method to merge records
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async mergeRecords(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.module.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.masterrecordid.toString());
    apiPath = apiPath.concat("/actions/merge");
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
}
class GetRecordMergeParam {
  public static JOB_ID: Param<bigint> = new Param<bigint>(
    "job_id",
    "com.zoho.crm.api.FindAndMerge.GetRecordMergeParam"
  );
}

export {
  FindAndMergeOperations as FindAndMergeOperations,
  GetRecordMergeParam as GetRecordMergeParam,
  FindAndMergeOperations as MasterModel,
};
