export abstract class AkunaError {
  public readonly message: String;
  public readonly errorCode: String;
  public readonly statusCode: number;


  constructor(message: String, errorCode: String, statusCode = 500) {
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
}