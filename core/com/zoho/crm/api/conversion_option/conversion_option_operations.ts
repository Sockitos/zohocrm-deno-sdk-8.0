import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ResponseHandler } from "./response_handler.ts";

class ConversionOptionOperations {
  private leadId: bigint;
  /**
   * Creates an instance of ConversionOptionOperations with the given parameters
   * @param leadId A BigInt representing the leadId
   */
  constructor(leadId: bigint) {
    this.leadId = leadId;
  }

  /**
   * The method to lead conversion options
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async leadConversionOptions(): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/Leads/");
    apiPath = apiPath.concat(this.leadId.toString());
    apiPath = apiPath.concat("/__conversion_options");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setModuleAPIName("Leads");
    let ResponseHandler = import.meta.resolve("./response_handler.ts");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }
}
export {
  ConversionOptionOperations as ConversionOptionOperations,
  ConversionOptionOperations as MasterModel,
};
