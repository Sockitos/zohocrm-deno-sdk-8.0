import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ResponseHandler } from "./response_handler.ts";

class EmailSharingDetailsOperations {
  private module: string;
  private recordId: bigint;
  /**
   * Creates an instance of EmailSharingDetailsOperations with the given parameters
   * @param recordId A BigInt representing the recordId
   * @param module A String representing the module
   */
  constructor(recordId: bigint, module: string) {
    this.recordId = recordId;
    this.module = module;
  }

  /**
   * The method to get email sharing details
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getEmailSharingDetails(): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.module.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.recordId.toString());
    apiPath = apiPath.concat("/__emails_sharing_details");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    let ResponseHandler = import.meta.resolve("./response_handler.ts");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }
}
export {
  EmailSharingDetailsOperations as EmailSharingDetailsOperations,
  EmailSharingDetailsOperations as MasterModel,
};
