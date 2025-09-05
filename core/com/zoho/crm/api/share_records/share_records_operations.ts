import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { DeleteActionHandler } from "./delete_action_handler.ts";
import { ResponseHandler } from "./response_handler.ts";

class ShareRecordsOperations {
  private moduleAPIName: string;
  private recordId: bigint;
  /**
   * Creates an instance of ShareRecordsOperations with the given parameters
   * @param recordId A BigInt representing the recordId
   * @param moduleAPIName A String representing the moduleAPIName
   */
  constructor(recordId: bigint, moduleAPIName: string) {
    this.recordId = recordId;
    this.moduleAPIName = moduleAPIName;
  }

  /**
   * The method to get shared record details
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getSharedRecordDetails(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.recordId.toString());
    apiPath = apiPath.concat("/actions/share");
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
   * The method to share record
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async shareRecord(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.recordId.toString());
    apiPath = apiPath.concat("/actions/share");
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
   * The method to update share permissions
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateSharePermissions(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.recordId.toString());
    apiPath = apiPath.concat("/actions/share");
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
   * The method to revoke shared record
   * @returns An instance of APIResponse<DeleteActionHandler>
   * @throws SDKException
   */
  public async revokeSharedRecord(): Promise<APIResponse<DeleteActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.recordId.toString());
    apiPath = apiPath.concat("/actions/share");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
    let DeleteActionHandler = import.meta.resolve("./delete_action_handler.ts");
    return handlerInstance.apiCall<DeleteActionHandler>(
      DeleteActionHandler,
      "application/json"
    );
  }
}
class GetSharedRecordDetailsParam {
  public static SHAREDTO: Param<bigint> = new Param<bigint>(
    "sharedTo",
    "com.zoho.crm.api.ShareRecords.GetSharedRecordDetailsParam"
  );
  public static VIEW: Param<string> = new Param<string>(
    "view",
    "com.zoho.crm.api.ShareRecords.GetSharedRecordDetailsParam"
  );
}

export {
  GetSharedRecordDetailsParam as GetSharedRecordDetailsParam,
  ShareRecordsOperations as MasterModel,
  ShareRecordsOperations as ShareRecordsOperations,
};
