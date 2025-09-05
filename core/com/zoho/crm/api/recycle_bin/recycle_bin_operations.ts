import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { ResponseHandler } from "./response_handler.ts";

class RecycleBinOperations {
  /**
   * The method to get recyclebin records
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getRecyclebinRecords(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/recycle_bin");
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
   * The method to delete recyclebin records
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async deleteRecyclebinRecords(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/recycle_bin");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setParam(paramInstance);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to get recyclebin record
   * @param recordId A BigInt representing the recordId
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getRecyclebinRecord(
    recordId: bigint
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/recycle_bin/");
    apiPath = apiPath.concat(recordId.toString());
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
   * The method to delete recyclebin record
   * @param recordId A BigInt representing the recordId
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async deleteRecyclebinRecord(
    recordId: bigint
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/recycle_bin/");
    apiPath = apiPath.concat(recordId.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }
}
class GetRecycleBinRecordsParam {
  public static IDS: Param<string> = new Param<string>(
    "ids",
    "com.zoho.crm.api.RecycleBin.GetRecycleBinRecordsParam"
  );
  public static SORT_BY: Param<string> = new Param<string>(
    "sort_by",
    "com.zoho.crm.api.RecycleBin.GetRecycleBinRecordsParam"
  );
  public static SORT_ORDER: Param<string> = new Param<string>(
    "sort_order",
    "com.zoho.crm.api.RecycleBin.GetRecycleBinRecordsParam"
  );
  public static PAGE: Param<number> = new Param<number>(
    "page",
    "com.zoho.crm.api.RecycleBin.GetRecycleBinRecordsParam"
  );
  public static PER_PAGE: Param<number> = new Param<number>(
    "per_page",
    "com.zoho.crm.api.RecycleBin.GetRecycleBinRecordsParam"
  );
  public static FILTERS: Param<string> = new Param<string>(
    "filters",
    "com.zoho.crm.api.RecycleBin.GetRecycleBinRecordsParam"
  );
}

class DeleteRecycleBinRecordsParam {
  public static FILTERS: Param<string> = new Param<string>(
    "filters",
    "com.zoho.crm.api.RecycleBin.DeleteRecycleBinRecordsParam"
  );
  public static IDS: Param<string> = new Param<string>(
    "ids",
    "com.zoho.crm.api.RecycleBin.DeleteRecycleBinRecordsParam"
  );
}

export {
  DeleteRecycleBinRecordsParam as DeleteRecycleBinRecordsParam,
  GetRecycleBinRecordsParam as GetRecycleBinRecordsParam,
  RecycleBinOperations as MasterModel,
  RecycleBinOperations as RecycleBinOperations,
};
