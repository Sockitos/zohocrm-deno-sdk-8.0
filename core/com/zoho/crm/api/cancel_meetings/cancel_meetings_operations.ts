import { createRequire } from "node:module";
import {ActionHandler} from "./action_handler.ts"
import {BodyWrapper} from "./body_wrapper.ts"
import {SDKException} from "../exception/sdk_exception.ts"
import {APIResponse} from "../../../../../../routes/controllers/api_response.ts"
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.ts"
import { Constants } from "../../../../../../utils/util/constants.ts"


const require = createRequire(import.meta.url);
class CancelMeetingsOperations{

	private event: bigint;
	/**
	 * Creates an instance of CancelMeetingsOperations with the given parameters
	 * @param event A BigInt representing the event
	 */
	constructor(event: bigint){
		this.event = event;

	}

	/**
	 * The method to cancel meetings
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async cancelMeetings(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/Events/");
		apiPath = apiPath.concat(this.event.toString());
		apiPath = apiPath.concat("/actions/cancel");
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
	CancelMeetingsOperations as MasterModel,
	CancelMeetingsOperations as CancelMeetingsOperations
}
