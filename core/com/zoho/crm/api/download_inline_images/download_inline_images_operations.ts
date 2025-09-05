import { createRequire } from "node:module";
import {ResponseHandler} from "./response_handler.ts"
import {Param} from "../../../../../../routes/param.ts"
import {ParameterMap} from "../../../../../../routes/parameter_map.ts"
import {SDKException} from "../exception/sdk_exception.ts"
import {APIResponse} from "../../../../../../routes/controllers/api_response.ts"
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.ts"
import { Constants } from "../../../../../../utils/util/constants.ts"


const require = createRequire(import.meta.url);
class DownloadInlineImagesOperations{
	/**
	 * The method to get download inline images
	 * @param recordId A BigInt representing the recordId
	 * @param module A String representing the module
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getDownloadInlineImages(recordId: bigint, module: string, paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/Emails/actions/download_inline_images");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "multipart/form-data");

	}

}
class GetDownloadInlineImagesParam{

	public static USER_ID: Param<bigint> = new Param<bigint>("user_id", "com.zoho.crm.api.DownloadInlineImages.GetDownloadInlineImagesParam");
	public static MESSAGE_ID: Param<string> = new Param<string>("message_id", "com.zoho.crm.api.DownloadInlineImages.GetDownloadInlineImagesParam");
	public static ID: Param<string> = new Param<string>("id", "com.zoho.crm.api.DownloadInlineImages.GetDownloadInlineImagesParam");
}

export {
	GetDownloadInlineImagesParam as GetDownloadInlineImagesParam,
	DownloadInlineImagesOperations as MasterModel,
	DownloadInlineImagesOperations as DownloadInlineImagesOperations
}
