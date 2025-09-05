import { createRequire } from "node:module";
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

const require = createRequire(import.meta.url);
class RelatedRecordsOperations {
  private moduleAPIName: string;
  private relatedListAPIName: string;
  /**
   * Creates an instance of RelatedRecordsOperations with the given parameters
   * @param relatedListAPIName A String representing the relatedListAPIName
   * @param moduleAPIName A String representing the moduleAPIName
   */
  constructor(relatedListAPIName: string, moduleAPIName: string) {
    this.relatedListAPIName = relatedListAPIName;
    this.moduleAPIName = moduleAPIName;
  }

  /**
   * The method to get related records
   * @param recordId A BigInt representing the recordId
   * @param paramInstance An instance of ParameterMap
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getRelatedRecords(
    recordId: bigint,
    paramInstance?: ParameterMap,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(recordId.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.relatedListAPIName.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    handlerInstance.setHeader(headerInstance);
    let ResponseHandler = require.resolve("./response_handler");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to update related records
   * @param recordId A BigInt representing the recordId
   * @param request An instance of BodyWrapper
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateRelatedRecords(
    recordId: bigint,
    request: BodyWrapper,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(recordId.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.relatedListAPIName.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setHeader(headerInstance);
    let ActionHandler = require.resolve("./action_handler");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to delink records
   * @param recordId A BigInt representing the recordId
   * @param paramInstance An instance of ParameterMap
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async delinkRecords(
    recordId: bigint,
    paramInstance?: ParameterMap,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(recordId.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.relatedListAPIName.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setParam(paramInstance);
    handlerInstance.setHeader(headerInstance);
    let ActionHandler = require.resolve("./action_handler");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to get related records using external id
   * @param externalValue A String representing the externalValue
   * @param paramInstance An instance of ParameterMap
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getRelatedRecordsUsingExternalId(
    externalValue: string,
    paramInstance?: ParameterMap,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(externalValue.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.relatedListAPIName.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    handlerInstance.setHeader(headerInstance);
    let ResponseHandler = require.resolve("./response_handler");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to update related records using external id
   * @param externalValue A String representing the externalValue
   * @param request An instance of BodyWrapper
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateRelatedRecordsUsingExternalId(
    externalValue: string,
    request: BodyWrapper,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(externalValue.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.relatedListAPIName.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setHeader(headerInstance);
    let ActionHandler = require.resolve("./action_handler");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to delete related records using external id
   * @param externalValue A String representing the externalValue
   * @param paramInstance An instance of ParameterMap
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async deleteRelatedRecordsUsingExternalId(
    externalValue: string,
    paramInstance?: ParameterMap,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(externalValue.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.relatedListAPIName.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setParam(paramInstance);
    handlerInstance.setHeader(headerInstance);
    let ActionHandler = require.resolve("./action_handler");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to get related record
   * @param relatedRecordId A BigInt representing the relatedRecordId
   * @param recordId A BigInt representing the recordId
   * @param paramInstance An instance of ParameterMap
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getRelatedRecord(
    relatedRecordId: bigint,
    recordId: bigint,
    paramInstance?: ParameterMap,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(recordId.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.relatedListAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(relatedRecordId.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    handlerInstance.setHeader(headerInstance);
    let ResponseHandler = require.resolve("./response_handler");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to update related record
   * @param relatedRecordId A BigInt representing the relatedRecordId
   * @param recordId A BigInt representing the recordId
   * @param request An instance of BodyWrapper
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateRelatedRecord(
    relatedRecordId: bigint,
    recordId: bigint,
    request: BodyWrapper,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(recordId.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.relatedListAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(relatedRecordId.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    handlerInstance.setHeader(headerInstance);
    let ActionHandler = require.resolve("./action_handler");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to delink record
   * @param relatedRecordId A BigInt representing the relatedRecordId
   * @param recordId A BigInt representing the recordId
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async delinkRecord(
    relatedRecordId: bigint,
    recordId: bigint,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(recordId.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.relatedListAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(relatedRecordId.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setHeader(headerInstance);
    let ActionHandler = require.resolve("./action_handler");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to get related record using external id
   * @param externalFieldValue A String representing the externalFieldValue
   * @param externalValue A String representing the externalValue
   * @param paramInstance An instance of ParameterMap
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getRelatedRecordUsingExternalId(
    externalFieldValue: string,
    externalValue: string,
    paramInstance?: ParameterMap,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(externalValue.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.relatedListAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(externalFieldValue.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    handlerInstance.setHeader(headerInstance);
    let ResponseHandler = require.resolve("./response_handler");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }

  /**
   * The method to update related record using external id
   * @param externalFieldValue A String representing the externalFieldValue
   * @param externalValue A String representing the externalValue
   * @param request An instance of BodyWrapper
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async updateRelatedRecordUsingExternalId(
    externalFieldValue: string,
    externalValue: string,
    request: BodyWrapper,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(externalValue.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.relatedListAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(externalFieldValue.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
    handlerInstance.setContentType("application/json");
    handlerInstance.setRequest(request);
    handlerInstance.setMandatoryChecker(true);
    handlerInstance.setHeader(headerInstance);
    let ActionHandler = require.resolve("./action_handler");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to delete related record using external id
   * @param externalFieldValue A String representing the externalFieldValue
   * @param externalValue A String representing the externalValue
   * @param headerInstance An instance of HeaderMap
   * @returns An instance of APIResponse<ActionHandler>
   * @throws SDKException
   */
  public async deleteRelatedRecordUsingExternalId(
    externalFieldValue: string,
    externalValue: string,
    headerInstance?: HeaderMap
  ): Promise<APIResponse<ActionHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(externalValue.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.relatedListAPIName.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(externalFieldValue.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
    handlerInstance.setHeader(headerInstance);
    let ActionHandler = require.resolve("./action_handler");
    return handlerInstance.apiCall<ActionHandler>(
      ActionHandler,
      "application/json"
    );
  }

  /**
   * The method to get deleted parent records related record
   * @param recordId A BigInt representing the recordId
   * @param paramInstance An instance of ParameterMap
   * @returns An instance of APIResponse<ResponseHandler>
   * @throws SDKException
   */
  public async getDeletedParentRecordsRelatedRecord(
    recordId: bigint,
    paramInstance?: ParameterMap
  ): Promise<APIResponse<ResponseHandler>> {
    let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
    let apiPath: string = "";
    apiPath = apiPath.concat("/crm/v8/");
    apiPath = apiPath.concat(this.moduleAPIName.toString());
    apiPath = apiPath.concat("/deleted/");
    apiPath = apiPath.concat(recordId.toString());
    apiPath = apiPath.concat("/");
    apiPath = apiPath.concat(this.relatedListAPIName.toString());
    handlerInstance.setAPIPath(apiPath);
    handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
    handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
    handlerInstance.setParam(paramInstance);
    let ResponseHandler = require.resolve("./response_handler");
    return handlerInstance.apiCall<ResponseHandler>(
      ResponseHandler,
      "application/json"
    );
  }
}
class GetRelatedRecordsParam {
  public static PAGE: Param<number> = new Param<number>(
    "page",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsParam"
  );
  public static PER_PAGE: Param<number> = new Param<number>(
    "per_page",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsParam"
  );
  public static FIELDS: Param<string> = new Param<string>(
    "fields",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsParam"
  );
}

class GetRelatedRecordsHeader {
  public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>(
    "If-Modified-Since",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsHeader"
  );
  public static X_EXTERNAL: Header<string> = new Header<string>(
    "X-EXTERNAL",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsHeader"
  );
}

class UpdateRelatedRecordsHeader {
  public static X_EXTERNAL: Header<string> = new Header<string>(
    "X-EXTERNAL",
    "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordsHeader"
  );
}

class DelinkRecordsParam {
  public static IDS: Param<string> = new Param<string>(
    "ids",
    "com.zoho.crm.api.RelatedRecords.DelinkRecordsParam"
  );
}

class DelinkRecordsHeader {
  public static X_EXTERNAL: Header<string> = new Header<string>(
    "X-EXTERNAL",
    "com.zoho.crm.api.RelatedRecords.DelinkRecordsHeader"
  );
}

class GetRelatedRecordsUsingExternalIDParam {
  public static PAGE: Param<number> = new Param<number>(
    "page",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDParam"
  );
  public static PER_PAGE: Param<number> = new Param<number>(
    "per_page",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDParam"
  );
  public static FIELDS: Param<string> = new Param<string>(
    "fields",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDParam"
  );
}

class GetRelatedRecordsUsingExternalIDHeader {
  public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>(
    "If-Modified-Since",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDHeader"
  );
  public static X_EXTERNAL: Header<string> = new Header<string>(
    "X-EXTERNAL",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDHeader"
  );
}

class UpdateRelatedRecordsUsingExternalIDHeader {
  public static X_EXTERNAL: Header<string> = new Header<string>(
    "X-EXTERNAL",
    "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordsUsingExternalIDHeader"
  );
}

class DeleteRelatedRecordsUsingExternalIDParam {
  public static IDS: Param<string> = new Param<string>(
    "ids",
    "com.zoho.crm.api.RelatedRecords.DeleteRelatedRecordsUsingExternalIDParam"
  );
}

class DeleteRelatedRecordsUsingExternalIDHeader {
  public static X_EXTERNAL: Header<string> = new Header<string>(
    "X-EXTERNAL",
    "com.zoho.crm.api.RelatedRecords.DeleteRelatedRecordsUsingExternalIDHeader"
  );
}

class GetRelatedRecordParam {
  public static FIELDS: Param<string> = new Param<string>(
    "fields",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordParam"
  );
}

class GetRelatedRecordHeader {
  public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>(
    "If-Modified-Since",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordHeader"
  );
  public static X_EXTERNAL: Header<string> = new Header<string>(
    "X-EXTERNAL",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordHeader"
  );
}

class UpdateRelatedRecordHeader {
  public static X_EXTERNAL: Header<string> = new Header<string>(
    "X-EXTERNAL",
    "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordHeader"
  );
}

class DelinkRecordHeader {
  public static X_EXTERNAL: Header<string> = new Header<string>(
    "X-EXTERNAL",
    "com.zoho.crm.api.RelatedRecords.DelinkRecordHeader"
  );
}

class GetRelatedRecordUsingExternalIDParam {
  public static FIELDS: Param<string> = new Param<string>(
    "fields",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordUsingExternalIDParam"
  );
}

class GetRelatedRecordUsingExternalIDHeader {
  public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>(
    "If-Modified-Since",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordUsingExternalIDHeader"
  );
  public static X_EXTERNAL: Header<string> = new Header<string>(
    "X-EXTERNAL",
    "com.zoho.crm.api.RelatedRecords.GetRelatedRecordUsingExternalIDHeader"
  );
}

class UpdateRelatedRecordUsingExternalIDHeader {
  public static X_EXTERNAL: Header<string> = new Header<string>(
    "X-EXTERNAL",
    "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordUsingExternalIDHeader"
  );
}

class DeleteRelatedRecordUsingExternalIDHeader {
  public static X_EXTERNAL: Header<string> = new Header<string>(
    "X-EXTERNAL",
    "com.zoho.crm.api.RelatedRecords.DeleteRelatedRecordUsingExternalIDHeader"
  );
}

class GetDeletedParentRecordsRelatedRecordParam {
  public static FIELDS: Param<string> = new Param<string>(
    "fields",
    "com.zoho.crm.api.RelatedRecords.GetDeletedParentRecordsRelatedRecordParam"
  );
  public static PAGE: Param<number> = new Param<number>(
    "page",
    "com.zoho.crm.api.RelatedRecords.GetDeletedParentRecordsRelatedRecordParam"
  );
  public static PER_PAGE: Param<number> = new Param<number>(
    "per_page",
    "com.zoho.crm.api.RelatedRecords.GetDeletedParentRecordsRelatedRecordParam"
  );
  public static IDS: Param<string> = new Param<string>(
    "ids",
    "com.zoho.crm.api.RelatedRecords.GetDeletedParentRecordsRelatedRecordParam"
  );
}

export {
  DeleteRelatedRecordsUsingExternalIDHeader as DeleteRelatedRecordsUsingExternalIDHeader,
  DeleteRelatedRecordsUsingExternalIDParam as DeleteRelatedRecordsUsingExternalIDParam,
  DeleteRelatedRecordUsingExternalIDHeader as DeleteRelatedRecordUsingExternalIDHeader,
  DelinkRecordHeader as DelinkRecordHeader,
  DelinkRecordsHeader as DelinkRecordsHeader,
  DelinkRecordsParam as DelinkRecordsParam,
  GetDeletedParentRecordsRelatedRecordParam as GetDeletedParentRecordsRelatedRecordParam,
  GetRelatedRecordHeader as GetRelatedRecordHeader,
  GetRelatedRecordParam as GetRelatedRecordParam,
  GetRelatedRecordsHeader as GetRelatedRecordsHeader,
  GetRelatedRecordsParam as GetRelatedRecordsParam,
  GetRelatedRecordsUsingExternalIDHeader as GetRelatedRecordsUsingExternalIDHeader,
  GetRelatedRecordsUsingExternalIDParam as GetRelatedRecordsUsingExternalIDParam,
  GetRelatedRecordUsingExternalIDHeader as GetRelatedRecordUsingExternalIDHeader,
  GetRelatedRecordUsingExternalIDParam as GetRelatedRecordUsingExternalIDParam,
  RelatedRecordsOperations as MasterModel,
  RelatedRecordsOperations as RelatedRecordsOperations,
  UpdateRelatedRecordHeader as UpdateRelatedRecordHeader,
  UpdateRelatedRecordsHeader as UpdateRelatedRecordsHeader,
  UpdateRelatedRecordsUsingExternalIDHeader as UpdateRelatedRecordsUsingExternalIDHeader,
  UpdateRelatedRecordUsingExternalIDHeader as UpdateRelatedRecordUsingExternalIDHeader,
};
