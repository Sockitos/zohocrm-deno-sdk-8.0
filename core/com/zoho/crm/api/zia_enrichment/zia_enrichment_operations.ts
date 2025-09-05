import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ResponseHandler } from "./response_handler.ts";

class ZiaEnrichmentOperations {
  /**
   * The method to get zia enrichment
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getZiaEnrichment(): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/zia/data_enrichment");
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
  ZiaEnrichmentOperations as MasterModel,
  ZiaEnrichmentOperations as ZiaEnrichmentOperations,
};
