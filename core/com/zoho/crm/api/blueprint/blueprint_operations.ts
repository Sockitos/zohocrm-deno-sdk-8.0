import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { ResponseHandler } from "./response_handler.ts";

class BlueprintOperations {
  private moduleAPIName: string;
  private recordId: string;
  /**
   * Creates an instance of BlueprintOperations with the given parameters
   * @param recordId A String representing the recordId
   * @param moduleAPIName A String representing the moduleAPIName
   */
  constructor(recordId: string, moduleAPIName: string) {
    this.recordId = recordId;
    this.moduleAPIName = moduleAPIName;
  }

  /**
   * The method to get blueprint
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getBlueprint(): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.recordId.toString());
    apiPath = apiPath.concat("/actions/blueprint");
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
   * The method to update blueprint
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateBlueprint(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.recordId.toString());
    apiPath = apiPath.concat("/actions/blueprint");
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
export {
  BlueprintOperations as BlueprintOperations,
  BlueprintOperations as MasterModel,
};
