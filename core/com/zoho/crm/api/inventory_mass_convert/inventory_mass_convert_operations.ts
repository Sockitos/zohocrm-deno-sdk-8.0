import { createRequire } from "node:module";
import {ActionResponse} from "./action_response.ts"
import {BodyWrapper} from "./body_wrapper.ts"
import {ResponseHandler} from "./response_handler.ts"
import {Param} from "../../../../../../routes/param.ts"
import {ParameterMap} from "../../../../../../routes/parameter_map.ts"
import {SDKException} from "../exception/sdk_exception.ts"
import {APIResponse} from "../../../../../../routes/controllers/api_response.ts"
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.ts"
import { Constants } from "../../../../../../utils/util/constants.ts"


const require = createRequire(import.meta.url);
class InventoryMassConvertOperations{

	private moduleAPIName: string;
	/**
	 * Creates an instance of InventoryMassConvertOperations with the given parameters
	 * @param moduleAPIName A String representing the moduleAPIName
	 */
	constructor(moduleAPIName: string){
		this.moduleAPIName = moduleAPIName;

	}

	/**
	 * The method to mass inventory convert
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionResponse>
	 * @throws SDKException
	 */
	public async massInventoryConvert(request: BodyWrapper): Promise<APIResponse<ActionResponse>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/mass_convert");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionResponse = require.resolve("./action_response");
		return handlerInstance.apiCall<ActionResponse>(ActionResponse, "application/json");

	}

	/**
	 * The method to get scheduled jobs details
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getScheduledJobsDetails(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/mass_convert");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
class GetScheduledJobsDetailsParam{

	public static JOB_ID: Param<bigint> = new Param<bigint>("job_id", "com.zoho.crm.api.InventoryMassConvert.GetScheduledJobsDetailsParam");
}

export {
	GetScheduledJobsDetailsParam as GetScheduledJobsDetailsParam,
	InventoryMassConvertOperations as MasterModel,
	InventoryMassConvertOperations as InventoryMassConvertOperations
}
