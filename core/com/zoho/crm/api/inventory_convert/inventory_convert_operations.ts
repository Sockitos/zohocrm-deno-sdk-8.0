import { createRequire } from "node:module";
import {ActionHandler} from "./action_handler.ts"
import {BodyWrapper} from "./body_wrapper.ts"
import {SDKException} from "../exception/sdk_exception.ts"
import {APIResponse} from "../../../../../../routes/controllers/api_response.ts"
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.ts"
import { Constants } from "../../../../../../utils/util/constants.ts"


const require = createRequire(import.meta.url);
class InventoryConvertOperations{

	private moduleAPIName: string;
	private id: bigint;
	/**
	 * Creates an instance of InventoryConvertOperations with the given parameters
	 * @param id A BigInt representing the id
	 * @param moduleAPIName A String representing the moduleAPIName
	 */
	constructor(id: bigint, moduleAPIName: string){
		this.id = id;
		this.moduleAPIName = moduleAPIName;

	}

	/**
	 * The method to convert inventory
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async convertInventory(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.id.toString());
		apiPath = apiPath.concat("/actions/convert");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
export {
	InventoryConvertOperations as MasterModel,
	InventoryConvertOperations as InventoryConvertOperations
}
