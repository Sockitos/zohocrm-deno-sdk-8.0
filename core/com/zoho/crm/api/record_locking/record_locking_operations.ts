import { createRequire } from "node:module";
import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { ResponseHandler } from "./response_handler.ts";

const require = createRequire(import.meta.url);
class RecordLockingOperations {
  private moduleName: string;
  private recordId: bigint;
  /**
   * Creates an instance of RecordLockingOperations with the given parameters
   * @param recordId A BigInt representing the recordId
   * @param moduleName A String representing the moduleName
   */
  constructor(recordId: bigint, moduleName: string) {
    this.recordId = recordId;
    this.moduleName = moduleName;
  }

  /**
   * The method to get record locking informations
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getRecordLockingInformations(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.recordId.toString());
    apiPath = apiPath.concat("/Locking_Information__s");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    handlerInstance.setModuleAPIName("Locking_Information__s");
    let ResponseHandler = require.resolve("./response_handler");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to lock records
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async lockRecords(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.recordId.toString());
    apiPath = apiPath.concat("/Locking_Information__s");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    handlerInstance.setModuleAPIName("Locking_Information__s");
    let ActionHandler = require.resolve("./action_handler");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to get record locking information
   * @param lockId A BigInt representing the lockId
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getRecordLockingInformation(
    lockId: bigint,
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.recordId.toString());
    apiPath = apiPath.concat("/Locking_Information__s/");
    apiPath = apiPath.concat(lockId.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    handlerInstance.setModuleAPIName("Locking_Information__s");
    let ResponseHandler = require.resolve("./response_handler");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to update record locking information
   * @param lockId A BigInt representing the lockId
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateRecordLockingInformation(
    lockId: bigint,
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.recordId.toString());
    apiPath = apiPath.concat("/Locking_Information__s/");
    apiPath = apiPath.concat(lockId.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    handlerInstance.setModuleAPIName("Locking_Information__s");
    let ActionHandler = require.resolve("./action_handler");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to unlock record
   * @param lockId A BigInt representing the lockId
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async unlockRecord(
    lockId: bigint
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.recordId.toString());
    apiPath = apiPath.concat("/Locking_Information__s/");
    apiPath = apiPath.concat(lockId.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setModuleAPIName("Locking_Information__s");
    let ActionHandler = require.resolve("./action_handler");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }
}
class GetRecordLockingInformationsParam {
  public static FIELDS: Param<string> = new Param<string>(
    "fields",
    "com.zoho.crm.api.RecordLocking.GetRecordLockingInformationsParam"
  );
  public static PAGE_TOKEN: Param<string> = new Param<string>(
    "page_token",
    "com.zoho.crm.api.RecordLocking.GetRecordLockingInformationsParam"
  );
  public static PAGE: Param<number> = new Param<number>(
    "page",
    "com.zoho.crm.api.RecordLocking.GetRecordLockingInformationsParam"
  );
  public static PER_PAGE: Param<number> = new Param<number>(
    "per_page",
    "com.zoho.crm.api.RecordLocking.GetRecordLockingInformationsParam"
  );
  public static IDS: Param<string> = new Param<string>(
    "ids",
    "com.zoho.crm.api.RecordLocking.GetRecordLockingInformationsParam"
  );
}

class GetRecordLockingInformationParam {
  public static FIELDS: Param<string> = new Param<string>(
    "fields",
    "com.zoho.crm.api.RecordLocking.GetRecordLockingInformationParam"
  );
}

export {
  GetRecordLockingInformationParam as GetRecordLockingInformationParam,
  GetRecordLockingInformationsParam as GetRecordLockingInformationsParam,
  RecordLockingOperations as MasterModel,
  RecordLockingOperations as RecordLockingOperations,
};
