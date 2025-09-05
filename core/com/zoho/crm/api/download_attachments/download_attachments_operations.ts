import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ResponseHandler } from "./response_handler.ts";

class DownloadAttachmentsOperations {
  /**
   * The method to get download attachments details
   * @param recordId A BigInt representing the recordId
   * @param module A String representing the module
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getDownloadAttachmentsDetails(
    recordId: bigint,
    module: string,
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(module.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(recordId.toString());
    apiPath = apiPath.concat("/Emails/actions/download_attachments");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    let ResponseHandler = import.meta.resolve("./response_handler.ts");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "multipart/form-data"
    );
  }
}
class GetDownloadAttachmentsDetailsParam {
  public static USER_ID: Param<bigint> = new Param<bigint>(
    "user_id",
    "com.zoho.crm.api.DownloadAttachments.GetDownloadAttachmentsDetailsParam"
  );
  public static MESSAGE_ID: Param<string> = new Param<string>(
    "message_id",
    "com.zoho.crm.api.DownloadAttachments.GetDownloadAttachmentsDetailsParam"
  );
  public static ID: Param<string> = new Param<string>(
    "id",
    "com.zoho.crm.api.DownloadAttachments.GetDownloadAttachmentsDetailsParam"
  );
  public static NAME: Param<string> = new Param<string>(
    "name",
    "com.zoho.crm.api.DownloadAttachments.GetDownloadAttachmentsDetailsParam"
  );
}

export {
  DownloadAttachmentsOperations as DownloadAttachmentsOperations,
  GetDownloadAttachmentsDetailsParam as GetDownloadAttachmentsDetailsParam,
  DownloadAttachmentsOperations as MasterModel,
};
