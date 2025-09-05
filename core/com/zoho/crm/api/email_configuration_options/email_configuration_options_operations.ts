import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { ResponseHandler } from "./response_handler.ts";

class EmailConfigurationOptionsOperations {
  /**
   * Creates an instance of EmailConfigurationOptionsOperations
   */
  constructor() {}

  /**
   * The method to get email configuration options
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getEmailConfigurationOptions(): Promise<
    APIResponse<ResponseHandler>
  > {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat(
      "/crm/email/v8/settings/compose/configuration_options"
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

  /**
   * The method to update email configuration options
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateEmailConfigurationOptions(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat(
      "/crm/email/v8/settings/compose/configuration_options"
    );
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
}
class GetEmailConfigurationOptionsHeader {}

class UpdateEmailConfigurationOptionsHeader {}

export {
  EmailConfigurationOptionsOperations as EmailConfigurationOptionsOperations,
  GetEmailConfigurationOptionsHeader as GetEmailConfigurationOptionsHeader,
  EmailConfigurationOptionsOperations as MasterModel,
  UpdateEmailConfigurationOptionsHeader as UpdateEmailConfigurationOptionsHeader,
};
