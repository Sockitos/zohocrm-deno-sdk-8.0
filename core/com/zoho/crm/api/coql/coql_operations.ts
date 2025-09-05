import { createRequire } from "node:module";
import {BodyWrapper} from "./body_wrapper.ts"
import {ResponseHandler} from "./response_handler.ts"
import {SDKException} from "../exception/sdk_exception.ts"
import {APIResponse} from "../../../../../../routes/controllers/api_response.ts"
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.ts"
import { Constants } from "../../../../../../utils/util/constants.ts"


const require = createRequire(import.meta.url);
class CoqlOperations{
	/**
	 * The method to get records
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRecords(request: BodyWrapper): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/coql");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
export {
	CoqlOperations as MasterModel,
	CoqlOperations as CoqlOperations
}
