import { HttpException, HttpStatus } from "@nestjs/common";

export abstract class BaseException extends HttpException {
  constructor(message: string, status: HttpStatus) {
    super(message, status);
  }
}