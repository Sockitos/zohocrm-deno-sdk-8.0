import { createRequire } from "node:module";
import {ActionHandler} from "./action_handler.ts"
import {BodyWrapper} from "./body_wrapper.ts"
import {ResponseHandler} from "./response_handler.ts"
import {Header} from "../../../../../../routes/header.ts"
import {SDKException} from "../exception/sdk_exception.ts"
import {APIResponse} from "../../../../../../routes/controllers/api_response.ts"
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.ts"
import { Constants } from "../../../../../../utils/util/constants.ts"


const require = createRequire(import.meta.url);
class BusinessHoursOperations{

	private xCrmOrg?: string;
	/**
	 * Creates an instance of BusinessHoursOperations with the given parameters
	 * @param xCrmOrg A String representing the xCrmOrg
	 */
	constructor(xCrmOrg?: string){
		this.xCrmOrg = xCrmOrg;

	}

	/**
	 * The method to create business hours
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createBusinessHours(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/business_hours");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.BusinessHours.CreateBusinessHoursHeader"), this.xCrmOrg).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update business hours
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateBusinessHours(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/business_hours");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.BusinessHours.UpdateBusinessHoursHeader"), this.xCrmOrg).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get business hours
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getBusinessHours(): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/business_hours");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.BusinessHours.GetBusinessHoursHeader"), this.xCrmOrg).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
class CreateBusinessHoursHeader{

}

class UpdateBusinessHoursHeader{

}

class GetBusinessHoursHeader{

}

export {
	UpdateBusinessHoursHeader as UpdateBusinessHoursHeader,
	CreateBusinessHoursHeader as CreateBusinessHoursHeader,
	GetBusinessHoursHeader as GetBusinessHoursHeader,
	BusinessHoursOperations as MasterModel,
	BusinessHoursOperations as BusinessHoursOperations
}
