import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { ResponseHandler } from "./response_handler.ts";

class FieldMapDependencyOperations {
  private module?: string;
  private layoutId: bigint;
  /**
   * Creates an instance of FieldMapDependencyOperations with the given parameters
   * @param layoutId A BigInt representing the layoutId
   * @param module A String representing the module
   */
  constructor(layoutId: bigint, module?: string) {
    this.layoutId = layoutId;
    this.module = module;
  }

  /**
   * The method to create map dependency
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async createMapDependency(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/layouts/");
    apiPath = apiPath.concat(this.layoutId.toString());
    apiPath = apiPath.concat("/map_dependency");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    await handlerInstance
      .addParam(
        new Param<string>(
          "module",
          "com.zoho.crm.api.FieldMapDependency.CreateMapDependencyParam"
        ),
        this.module
      )
      .catch((err) => {
        throw err;
      });
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to get map dependencies
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getMapDependencies(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/layouts/");
    apiPath = apiPath.concat(this.layoutId.toString());
    apiPath = apiPath.concat("/map_dependency");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    await handlerInstance
      .addParam(
        new Param<string>(
          "module",
          "com.zoho.crm.api.FieldMapDependency.GetMapDependenciesParam"
        ),
        this.module
      )
      .catch((err) => {
        throw err;
      });
    handlerInstance.setParam(paramInstance);
    let ResponseHandler = import.meta.resolve("./response_handler.ts");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to update map dependency
   * @param dependencyId A BigInt representing the dependencyId
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateMapDependency(
    dependencyId: bigint,
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/layouts/");
    apiPath = apiPath.concat(this.layoutId.toString());
    apiPath = apiPath.concat("/map_dependency/");
    apiPath = apiPath.concat(dependencyId.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    await handlerInstance
      .addParam(
        new Param<string>(
          "module",
          "com.zoho.crm.api.FieldMapDependency.UpdateMapDependencyParam"
        ),
        this.module
      )
      .catch((err) => {
        throw err;
      });
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to get map dependency
   * @param dependencyId A BigInt representing the dependencyId
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getMapDependency(
    dependencyId: bigint
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/layouts/");
    apiPath = apiPath.concat(this.layoutId.toString());
    apiPath = apiPath.concat("/map_dependency/");
    apiPath = apiPath.concat(dependencyId.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    await handlerInstance
      .addParam(
        new Param<string>(
          "module",
          "com.zoho.crm.api.FieldMapDependency.GetMapDependencyParam"
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

  /**
   * The method to delete map dependency
   * @param dependencyId A BigInt representing the dependencyId
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async deleteMapDependency(
    dependencyId: bigint
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/settings/layouts/");
    apiPath = apiPath.concat(this.layoutId.toString());
    apiPath = apiPath.concat("/map_dependency/");
    apiPath = apiPath.concat(dependencyId.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
    await handlerInstance
      .addParam(
        new Param<string>(
          "module",
          "com.zoho.crm.api.FieldMapDependency.DeleteMapDependencyParam"
        ),
        this.module
      )
      .catch((err) => {
        throw err;
      });
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }
}
class CreateMapDependencyParam {}

class CreateMapDependencyHeader {}

class GetMapDependenciesParam {
  public static PAGE: Param<number> = new Param<number>(
    "page",
    "com.zoho.crm.api.FieldMapDependency.GetMapDependenciesParam"
  );
  public static PER_PAGE: Param<number> = new Param<number>(
    "per_page",
    "com.zoho.crm.api.FieldMapDependency.GetMapDependenciesParam"
  );
  public static FILTERS: Param<string> = new Param<string>(
    "filters",
    "com.zoho.crm.api.FieldMapDependency.GetMapDependenciesParam"
  );
}

class UpdateMapDependencyParam {}

class GetMapDependencyParam {}

class DeleteMapDependencyParam {}

export {
  CreateMapDependencyHeader as CreateMapDependencyHeader,
  CreateMapDependencyParam as CreateMapDependencyParam,
  DeleteMapDependencyParam as DeleteMapDependencyParam,
  FieldMapDependencyOperations as FieldMapDependencyOperations,
  GetMapDependenciesParam as GetMapDependenciesParam,
  GetMapDependencyParam as GetMapDependencyParam,
  FieldMapDependencyOperations as MasterModel,
  UpdateMapDependencyParam as UpdateMapDependencyParam,
};
