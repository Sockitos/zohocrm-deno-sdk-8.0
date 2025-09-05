import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ResponseHandler } from "./response_handler.ts";

class PickListValuesOperations {
  private fieldId: bigint;
  private module?: string;
  /**
   * Creates an instance of PickListValuesOperations with the given parameters
   * @param fieldId A BigInt representing the fieldId
   * @param module A String representing the module
   */
  constructor(fieldId: bigint, module?: string) {
    this.fieldId = fieldId;
    this.module = module;
  }

  /**
   * The method to get pick list values
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getPickListValues(): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/fields/");
    apiPath = apiPath.concat(this.fieldId.toString());
    apiPath = apiPath.concat("/pick_list_values");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    await handlerInstance
      .addParam(
        new Param<string>(
          "module",
          "com.zoho.crm.api.PickListValues.GetPickListValuesParam"
        ),
        this.module
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
class GetPickListValuesParam {}

export {
  GetPickListValuesParam as GetPickListValuesParam,
  PickListValuesOperations as MasterModel,
  PickListValuesOperations as PickListValuesOperations,
};
