import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { ResponseHandler } from "./response_handler.ts";

class EmailSignaturesOperations {
  /**
   * Creates an instance of EmailSignaturesOperations
   */
  constructor() {}

  /**
   * The method to get all email signatures
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getAllEmailSignatures(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/email/v8/settings/compose/email_signatures");
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
   * The method to create email signatures
   * @param request An instance of BodyWrapper
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async createEmailSignatures(
    request: BodyWrapper,
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/email/v8/settings/compose/email_signatures");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    handlerInstance.setParam(paramInstance);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to update email signatures
   * @param request An instance of BodyWrapper
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateEmailSignatures(
    request: BodyWrapper,
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/email/v8/settings/compose/email_signatures");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    handlerInstance.setParam(paramInstance);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to delete email signatures
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async deleteEmailSignatures(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/email/v8/settings/compose/email_signatures");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setParam(paramInstance);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to get email signature
   * @param id A BigInt representing the id
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getEmailSignature(
    id: bigint
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat(
      "/crm/email/v8/settings/compose/email_signatures/"
    );
    apiPath = apiPath.concat(id.toString());
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
   * The method to update email signature
   * @param id A String representing the id
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateEmailSignature(
    id: string,
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat(
      "/crm/email/v8/settings/compose/email_signatures/"
    );
    apiPath = apiPath.concat(id.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to delete email signature
   * @param id A String representing the id
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async deleteEmailSignature(
    id: string
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat(
      "/crm/email/v8/settings/compose/email_signatures/"
    );
    apiPath = apiPath.concat(id.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }
}
class GetAllEmailSignaturesParam {
  public static USER_ID: Param<string> = new Param<string>(
    "user_id",
    "com.zoho.crm.api.EmailSignatures.GetAllEmailSignaturesParam"
  );
}

class GetAllEmailSignaturesHeader {}

class CreateEmailSignaturesParam {
  public static USER_ID: Param<string> = new Param<string>(
    "user_id",
    "com.zoho.crm.api.EmailSignatures.CreateEmailSignaturesParam"
  );
}

class CreateEmailSignaturesHeader {}

class UpdateEmailSignaturesParam {
  public static USER_ID: Param<string> = new Param<string>(
    "user_id",
    "com.zoho.crm.api.EmailSignatures.UpdateEmailSignaturesParam"
  );
}

class UpdateEmailSignaturesHeader {}

class DeleteEmailSignaturesParam {
  public static IDS: Param<string> = new Param<string>(
    "ids",
    "com.zoho.crm.api.EmailSignatures.DeleteEmailSignaturesParam"
  );
}

class DeleteEmailSignaturesHeader {}

class GetEmailSignatureHeader {}

class UpdateEmailSignatureHeader {}

class DeleteEmailSignatureHeader {}

export {
  CreateEmailSignaturesHeader as CreateEmailSignaturesHeader,
  CreateEmailSignaturesParam as CreateEmailSignaturesParam,
  DeleteEmailSignatureHeader as DeleteEmailSignatureHeader,
  DeleteEmailSignaturesHeader as DeleteEmailSignaturesHeader,
  DeleteEmailSignaturesParam as DeleteEmailSignaturesParam,
  EmailSignaturesOperations as EmailSignaturesOperations,
  GetAllEmailSignaturesHeader as GetAllEmailSignaturesHeader,
  GetAllEmailSignaturesParam as GetAllEmailSignaturesParam,
  GetEmailSignatureHeader as GetEmailSignatureHeader,
  EmailSignaturesOperations as MasterModel,
  UpdateEmailSignatureHeader as UpdateEmailSignatureHeader,
  UpdateEmailSignaturesHeader as UpdateEmailSignaturesHeader,
  UpdateEmailSignaturesParam as UpdateEmailSignaturesParam,
};
