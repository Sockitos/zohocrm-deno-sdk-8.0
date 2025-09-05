import { createRequire } from "node:module";
import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { BodyWrapper } from "./body_wrapper.ts";

const require = createRequire(import.meta.url);
class ConvertLeadOperations {
  private leadId: bigint;
  /**
   * Creates an instance of ConvertLeadOperations with the given parameters
   * @param leadId A BigInt representing the leadId
   */
  constructor(leadId: bigint) {
    this.leadId = leadId;
  }

  /**
   * The method to convert lead
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async convertLead(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/Leads/");
    apiPath = apiPath.concat(this.leadId.toString());
    apiPath = apiPath.concat("/actions/convert");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    handlerInstance.setModuleAPIName("Deals");
    let ActionHandler = require.resolve("./action_handler");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }
}
export {
  ConvertLeadOperations as ConvertLeadOperations,
  ConvertLeadOperations as MasterModel,
};
