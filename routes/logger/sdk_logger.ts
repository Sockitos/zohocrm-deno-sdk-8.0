import { Logger } from "./logger.ts";

/**
 * The class to initialize the SDK logger.
 */
export class SDKLogger {
  private constructor(loggerInstance: Logger) {}

  /**
   * The method to initialize SDKLogger
   * @param {Logger} loggerInstance A Logger class instance
   */
  public static initialize(loggerInstance: Logger): SDKLogger {
    return new SDKLogger(loggerInstance);
  }
}
