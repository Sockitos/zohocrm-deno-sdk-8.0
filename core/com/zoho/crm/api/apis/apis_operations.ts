import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ResponseHandler } from "./response_handler.ts";

class APIsOperations {
  private filters?: string;
  /**
   * Creates an instance of ApisOperations with the given parameters
   * @param filters A String representing the filters
   */
  constructor(filters?: string) {
    this.filters = filters;
  }

  /**
   * The method to get supported api
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getSupportedAPI(): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/__apis");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    await handlerInstance
      .addParam(
        new Param<string>(
          "filters",
          "com.zoho.crm.api.Apis.GetSupportedAPIParam"
        ),
        this.filters
      )
      .catch((err) => {
        throw err;
      });
    let ResponseHandler = import.meta.resolve("./response_handler.ts");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }
}
class GetSupportedAPIParam {}

export {
  APIsOperations as APIsOperations,
  GetSupportedAPIParam as GetSupportedAPIParam,
  APIsOperations as MasterModel,
};
