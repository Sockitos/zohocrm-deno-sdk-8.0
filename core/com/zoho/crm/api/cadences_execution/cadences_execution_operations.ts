import { createRequire } from "node:module";
import {ActionHandler} from "./action_handler.ts"
import {BodyWrapper} from "./body_wrapper.ts"
import {SDKException} from "../exception/sdk_exception.ts"
import {APIResponse} from "../../../../../../routes/controllers/api_response.ts"
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.ts"
import { Constants } from "../../../../../../utils/util/constants.ts"


const require = createRequire(import.meta.url);
class CadencesExecutionOperations{
	/**
	 * The method to enroll cadences
	 * @param module A String representing the module
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async enrollCadences(module: string, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/actions/enrol_in_cadences");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to unenroll cadences
	 * @param module A String representing the module
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async unenrollCadences(module: string, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/actions/unenrol_from_cadences");
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
	CadencesExecutionOperations as MasterModel,
	CadencesExecutionOperations as CadencesExecutionOperations
}
