import { APIResponse } from "../../../../../../routes/controllers/api_response.ts";
import { Header } from "../../../../../../routes/header.ts";
import { HeaderMap } from "../../../../../../routes/header_map.ts";
import { CommonAPIHandler } from "../../../../../../routes/middlewares/common_api_handler.ts";
import { Param } from "../../../../../../routes/param.ts";
import { ParameterMap } from "../../../../../../routes/parameter_map.ts";
import { Constants } from "../../../../../../utils/util/constants.ts";
import { ActionHandler } from "./action_handler.ts";
import { BodyWrapper } from "./body_wrapper.ts";
import { ResponseHandler } from "./response_handler.ts";

class NotesOperations {
  /**
   * The method to get notes
   * @param paramInstance An instance of ParameterMap
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getNotes(
    paramInstance?: ParameterMap,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/Notes");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    handlerInstance.setHeader(headerInstance);
    let ResponseHandler = import.meta.resolve("./response_handler.ts");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to create notes
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async createNotes(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/Notes");
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    let ActionHandler = import.meta.resolve("./action_handler.ts");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to update notes
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateNotes(
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/Notes");
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

  /**
   * The method to delete notes
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async deleteNotes(
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/Notes");
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
   * The method to get note
   * @param id A BigInt representing the id
   * @param paramInstance An instance of ParameterMap
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getNote(
    id: bigint,
    paramInstance?: ParameterMap,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/Notes/");
    apiPath = apiPath.concat(id.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    handlerInstance.setHeader(headerInstance);
    let ResponseHandler = import.meta.resolve("./response_handler.ts");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to update note
   * @param id A BigInt representing the id
   * @param request An instance of BodyWrapper
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateNote(
    id: bigint,
    request: BodyWrapper
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/Notes/");
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
   * The method to delete note
   * @param id A BigInt representing the id
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async deleteNote(id: bigint): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/Notes/");
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
class GetNotesParam {
  public static PAGE: Param<string> = new Param<string>(
    "page",
    "com.zoho.crm.api.Notes.GetNotesParam"
  );
  public static PER_PAGE: Param<string> = new Param<string>(
    "per_page",
    "com.zoho.crm.api.Notes.GetNotesParam"
  );
  public static FIELDS: Param<string> = new Param<string>(
    "fields",
    "com.zoho.crm.api.Notes.GetNotesParam"
  );
  public static SORT_ORDER: Param<string> = new Param<string>(
    "sort_order",
    "com.zoho.crm.api.Notes.GetNotesParam"
  );
  public static SORT_BY: Param<string> = new Param<string>(
    "sort_by",
    "com.zoho.crm.api.Notes.GetNotesParam"
  );
  public static IDS: Param<string> = new Param<string>(
    "ids",
    "com.zoho.crm.api.Notes.GetNotesParam"
  );
}

class GetNotesHeader {
  public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>(
    "If-Modified-Since",
    "com.zoho.crm.api.Notes.GetNotesHeader"
  );
}

class DeleteNotesParam {
  public static IDS: Param<string> = new Param<string>(
    "ids",
    "com.zoho.crm.api.Notes.DeleteNotesParam"
  );
}

class GetNoteParam {
  public static FIELDS: Param<string> = new Param<string>(
    "fields",
    "com.zoho.crm.api.Notes.GetNoteParam"
  );
}

class GetNoteHeader {
  public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>(
    "If-Modified-Since",
    "com.zoho.crm.api.Notes.GetNoteHeader"
  );
}

export {
  DeleteNotesParam as DeleteNotesParam,
  GetNoteHeader as GetNoteHeader,
  GetNoteParam as GetNoteParam,
  GetNotesHeader as GetNotesHeader,
  GetNotesParam as GetNotesParam,
  NotesOperations as MasterModel,
  NotesOperations as NotesOperations,
};
