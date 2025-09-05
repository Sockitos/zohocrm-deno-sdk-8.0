import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { CvidBodyWrapper } from "./cvid_body_wrapper.ts";
import { RecordIdBodyWrapper } from "./record_id_body_wrapper.ts";
import { ResponseHandler } from "./response_handler.ts";

class MassDeleteCvidOperations {
  private module: string;
  /**
   * Creates an instance of MassDeleteCvidOperations with the given parameters
   * @param module A String representing the module
   */
  constructor(module: string) {
    this.module = module;
  }

  /**
   * The method to mass delete by cvid
   * @param request An instance of CvidBodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async massDeleteByCvid(
    request: CvidBodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.module.toString());
    apiPath = apiPath.concat("/actions/mass_delete");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to mass delete by record id
   * @param request An instance of RecordIdBodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async massDeleteByRecordId(
    request: RecordIdBodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.module.toString());
    apiPath = apiPath.concat("/actions/mass_delete");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to get mass delete status
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getMassDeleteStatus(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.module.toString());
    apiPath = apiPath.concat("/actions/mass_delete");
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
}
class GetMassDeleteStatusParam {
  public static JOB_ID: Param<bigint> = new Param<bigint>(
    "job_id",
    "com.zoho.crm.api.MassDeleteCvid.GetMassDeleteStatusParam"
  );
}

export {
  GetMassDeleteStatusParam as GetMassDeleteStatusParam,
  MassDeleteCvidOperations as MassDeleteCvidOperations,
  MassDeleteCvidOperations as MasterModel,
};
