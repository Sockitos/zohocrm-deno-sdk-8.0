// Deno file system operations - no import needed
import { SDKException } from "../../core/com/zoho/crm/api/exception/sdk_exception.ts";
import { Constants } from "./constants.ts";

/**
 * This class handles the file stream and name.
 */
class StreamWrapper {
  private name: string | undefined;
  private stream: ReadableStream<Uint8Array> | undefined;
  private file: string | undefined;

  /**
   * Creates a StreamWrapper class instance with the specified parameters.
   * @param {string} name - A String containing the file name.
   * @param {ReadableStream} stream - A ReadableStream containing the file stream.
   * @param {string} filePath - A String containing the absolute file path.
   */
  constructor(
    name?: string,
    stream?: ReadableStream<Uint8Array>,
    filePath?: string | null
  ) {
    if (filePath === undefined || filePath === null) {
      this.name = name;
      this.stream = stream;
    } else {
      this.file = filePath;
      this.name = this.basename(filePath);
      // Note: For file streams, we'll need to create them when needed since Deno file operations are async
    }
  }

  /**
   * Creates a StreamWrapper from a file path (async factory method)
   * @param {string} filePath - A String containing the absolute file path.
   * @returns Promise<StreamWrapper>
   */
  static async fromFile(filePath: string): Promise<StreamWrapper> {
    if (!(await StreamWrapper.fileExists(filePath))) {
      throw new SDKException(
        Constants.FILE_ERROR,
        Constants.FILE_DOES_NOT_EXISTS
      );
    }

    const instance = new StreamWrapper();
    instance.file = filePath;
    instance.name = instance.basename(filePath);

    // Create the ReadableStream from the file
    const file = await Deno.open(filePath, { read: true });
    instance.stream = file.readable;

    return instance;
  }

  private static async fileExists(path: string): Promise<boolean> {
    try {
      const stat = await Deno.stat(path);
      return stat.isFile;
    } catch {
      return false;
    }
  }

  private basename(filePath: string): string {
    return filePath.split("/").pop() || filePath.split("\\").pop() || filePath;
  }

  /**
   * This is a getter method to get the file name.
   * @returns A String representing the file name.
   */
  public getName(): string | undefined {
    return this.name;
  }

  /**
   * This is a getter method to get the file input stream.
   * @returns A ReadableStream representing the file input stream.
   */
  public getStream(): ReadableStream<Uint8Array> | undefined {
    return this.stream;
  }

  /**
   * Get the file path if available
   * @returns A string representing the file path.
   */
  public getFilePath(): string | undefined {
    return this.file;
  }
}

export { StreamWrapper as MasterModel, StreamWrapper as StreamWrapper };
