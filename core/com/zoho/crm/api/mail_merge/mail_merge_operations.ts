import { createRequire } from "node:module";
import {ActionHandler} from "./action_handler.ts"
import {DownloadMailMergeWrapper} from "./download_mail_merge_wrapper.ts"
import {DownloadResponseHandler} from "./download_response_handler.ts"
import {MailMergeWrapper} from "./mail_merge_wrapper.ts"
import {SignActionHandler} from "./sign_action_handler.ts"
import {SignMailMergeWrapper} from "./sign_mail_merge_wrapper.ts"
import {SDKException} from "../exception/sdk_exception.ts"
import {APIResponse} from "../../../../../../routes/controllers/api_response.ts"
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.ts"
import { Constants } from "../../../../../../utils/util/constants.ts"


const require = createRequire(import.meta.url);
class MailMergeOperations{

	private id: string;
	private module: string;
	/**
	 * Creates an instance of MailMergeOperations with the given parameters
	 * @param module A String representing the module
	 * @param id A String representing the id
	 */
	constructor(module: string, id: string){
		this.module = module;
		this.id = id;

	}

	/**
	 * The method to send mail merge
	 * @param request An instance of MailMergeWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async sendMailMerge(request: MailMergeWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.id.toString());
		apiPath = apiPath.concat("/actions/send_mail_merge");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to download mail merge
	 * @param request An instance of DownloadMailMergeWrapper
	 * @returns An instance of APIResponse<DownloadResponseHandler>
	 * @throws SDKException
	 */
	public async downloadMailMerge(request: DownloadMailMergeWrapper): Promise<APIResponse<DownloadResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.id.toString());
		apiPath = apiPath.concat("/actions/download_mail_merge");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let DownloadResponseHandler = require.resolve("./download_response_handler");
		return handlerInstance.apiCall<DownloadResponseHandler>(DownloadResponseHandler, "application/json");

	}

	/**
	 * The method to sign mail merge
	 * @param request An instance of SignMailMergeWrapper
	 * @returns An instance of APIResponse<SignActionHandler>
	 * @throws SDKException
	 */
	public async signMailMerge(request: SignMailMergeWrapper): Promise<APIResponse<SignActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.id.toString());
		apiPath = apiPath.concat("/actions/sign_mail_merge");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let SignActionHandler = require.resolve("./sign_action_handler");
		return handlerInstance.apiCall<SignActionHandler>(SignActionHandler, "application/json");

	}

}
export {
	MailMergeOperations as MasterModel,
	MailMergeOperations as MailMergeOperations
}
