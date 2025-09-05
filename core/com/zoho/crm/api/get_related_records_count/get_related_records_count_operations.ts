import { createRequire } from "node:module";
import {ActionHandler} from "./action_handler.ts"
import {BodyWrapper} from "./body_wrapper.ts"
import {SDKException} from "../exception/sdk_exception.ts"
import {APIResponse} from "../../../../../../routes/controllers/api_response.ts"
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.ts"
import { Constants } from "../../../../../../utils/util/constants.ts"


const require = createRequire(import.meta.url);
class GetRelatedRecordsCountOperations{

	private moduleAPIName: string;
	private recordId: bigint;
	/**
	 * Creates an instance of GetRelatedRecordsCountOperations with the given parameters
	 * @param recordId A BigInt representing the recordId
	 * @param moduleAPIName A String representing the moduleAPIName
	 */
	constructor(recordId: bigint, moduleAPIName: string){
		this.recordId = recordId;
		this.moduleAPIName = moduleAPIName;

	}

	/**
	 * The method to get related records count
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async getRelatedRecordsCount(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/actions/get_related_records_count");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
export {
	GetRelatedRecordsCountOperations as MasterModel,
	GetRelatedRecordsCountOperations as GetRelatedRecordsCountOperations
}
