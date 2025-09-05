import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ResponseHandler } from "./response_handler.ts";

class InventoryTemplatesOperations {
  /**
   * The method to get inventory templates
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getInventoryTemplates(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/inventory_templates");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    let ResponseHandler = import.meta.resolve("./response_handler.ts");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to get inventory template
   * @param template A BigInt representing the template
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getInventoryTemplate(
    template: bigint
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/inventory_templates/");
    apiPath = apiPath.concat(template.toString());
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
class GetInventoryTemplatesParam {
  public static MODULE: Param<string> = new Param<string>(
    "module",
    "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatesParam"
  );
  public static CATEGORY: Param<string> = new Param<string>(
    "category",
    "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatesParam"
  );
  public static SORT_BY: Param<string> = new Param<string>(
    "sort_by",
    "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatesParam"
  );
  public static SORT_ORDER: Param<string> = new Param<string>(
    "sort_order",
    "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatesParam"
  );
  public static FILTERS: Param<string> = new Param<string>(
    "filters",
    "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatesParam"
  );
}

export {
  GetInventoryTemplatesParam as GetInventoryTemplatesParam,
  InventoryTemplatesOperations as InventoryTemplatesOperations,
  InventoryTemplatesOperations as MasterModel,
};
