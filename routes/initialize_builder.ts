import * as fs from "node:fs";
import path from "node:path";
import { SDKException } from "../core/com/zoho/crm/api/exception/sdk_exception.ts";
import { FileStore } from "../models/authenticator/store/file_store.ts";
import { TokenStore } from "../models/authenticator/store/token_store.ts";
import { Token } from "../models/authenticator/token.ts";
import { Constants } from "../utils/util/constants.ts";
import { Utility } from "../utils/util/utility.ts";
import { Environment } from "./dc/environment.ts";
import { Initializer } from "./initializer.ts";
import { LogBuilder } from "./logger/log_builder.ts";
import * as LoggerFile from "./logger/logger.ts";
import { Levels } from "./logger/logger.ts";
import { RequestProxy } from "./request_proxy.ts";
import { SDKConfig } from "./sdk_config.ts";
import { SDKConfigBuilder } from "./sdk_config_builder.ts";
// Deno file system and path operations - no import needed

export class InitializeBuilder {
  private _environment: Environment;
  private _store: TokenStore;
  private _token: Token;
  private _resourcePath: string;
  private _requestProxy: RequestProxy | undefined;
  private _sdkConfig: SDKConfig;
  private _logger: LoggerFile.Logger;
  private errorMessage: string;
  private initializer: Initializer;

  constructor() {
    (async () => {
      this.initializer = await Initializer.getInitializer().catch((err) => {
        throw err;
      });
      this.errorMessage =
        (await this.initializer) != null
          ? Constants.SWITCH_USER_ERROR
          : Constants.INITIALIZATION_ERROR;
      if (this.initializer != null) {
        this._environment = await this.initializer.getEnvironment();
        this._token = await this.initializer.getToken();
        this._sdkConfig = await this.initializer.getSDKConfig();
      }
      return this;
    })();
  }

  public async initialize() {
    await Utility.assertNotNull(
      this._token,
      this.errorMessage,
      Constants.TOKEN_ERROR_MESSAGE
    );
    if (this._store == null) {
      this._store = new FileStore(
        path.join(__dirname, "../../../../../", Constants.TOKEN_FILE)
      );
    }
    if (this._sdkConfig == null) {
      this._sdkConfig = new SDKConfigBuilder().build();
    }
    if (this._resourcePath == null) {
      this._resourcePath = new URL("../../../../../", import.meta.url).pathname;
    }
    if (this._logger == null) {
      this._logger = new LogBuilder().level(Levels.OFF).filePath(null).build();
    }
    await Initializer.initialize(
      this._environment,
      this._token,
      this._store,
      this._sdkConfig,
      this._resourcePath,
      this._logger,
      this._requestProxy
    );
  }

  public async switchUser() {
    await Utility.assertNotNull(
      await Initializer.getInitializer(),
      Constants.SDK_UNINITIALIZATION_ERROR,
      Constants.SDK_UNINITIALIZATION_MESSAGE
    );
    await Initializer.switchUser(
      this._environment,
      this._token,
      this._sdkConfig,
      this._requestProxy
    );
  }

  public logger(logger: LoggerFile.Logger): InitializeBuilder {
    this._logger = logger;
    return this;
  }

  public token(token: Token): InitializeBuilder {
    Utility.assertNotNull(
      token,
      this.errorMessage,
      Constants.TOKEN_ERROR_MESSAGE
    );
    this._token = token;
    return this;
  }

  public SDKConfig(sdkConfig: SDKConfig): InitializeBuilder {
    this._sdkConfig = sdkConfig;
    return this;
  }

  public requestProxy(requestProxy: RequestProxy): InitializeBuilder {
    this._requestProxy = requestProxy;
    return this;
  }

  public resourcePath(resourcePath: string): InitializeBuilder {
    if (resourcePath != null && !fs.statSync(resourcePath).isDirectory()) {
      throw new SDKException(
        this.errorMessage,
        Constants.RESOURCE_PATH_INVALID_ERROR_MESSAGE
      );
    }
    this._resourcePath = resourcePath;
    return this;
  }

  public store(store: TokenStore): InitializeBuilder {
    this._store = store;
    return this;
  }

  public environment(environment: Environment): InitializeBuilder {
    Utility.assertNotNull(
      environment,
      this.errorMessage,
      Constants.ENVIRONMENT_ERROR_MESSAGE
    );
    this._environment = environment;
    return this;
  }
}
