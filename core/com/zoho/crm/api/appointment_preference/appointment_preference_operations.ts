import { createRequire } from "node:module";
import {ActionHandler} from "./action_handler.ts"
import {BodyWrapper} from "./body_wrapper.ts"
import {ResponseHandler} from "./response_handler.ts"
import {Param} from "../../../../../../routes/param.ts"
import {ParameterMap} from "../../../../../../routes/parameter_map.ts"
import {SDKException} from "../exception/sdk_exception.ts"
import {APIResponse} from "../../../../../../routes/controllers/api_response.ts"
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.ts"
import { Constants } from "../../../../../../utils/util/constants.ts"


const require = createRequire(import.meta.url);
class AppointmentPreferenceOperations{
	/**
	 * The method to get appointment preference
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getAppointmentPreference(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/appointment_preferences");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update appointment preference
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateAppointmentPreference(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/appointment_preferences");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
class GetAppointmentPreferenceParam{

	public static INCLUDE: Param<string> = new Param<string>("include", "com.zoho.crm.api.AppointmentPreference.GetAppointmentPreferenceParam");
}

export {
	GetAppointmentPreferenceParam as GetAppointmentPreferenceParam,
	AppointmentPreferenceOperations as MasterModel,
	AppointmentPreferenceOperations as AppointmentPreferenceOperations
}
