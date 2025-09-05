import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ResponseHandler } from "./response_handler.ts";

class AvailableCurrenciesOperations {
  /**
   * The method to get available currencies
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getAvailableCurrencies(): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat(
      "/crm/v8/org/currencies/actions/available_currencies"
    );
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
  AvailableCurrenciesOperations as AvailableCurrenciesOperations,
  AvailableCurrenciesOperations as MasterModel,
};
