import { HttpStatus } from "@nestjs/common";

import { BaseException } from "@core/exceptions/base_exception";

export class FailGetPosts extends BaseException {
  constructor(message: string) {
    super(message, HttpStatus.I_AM_A_TEAPOT);
  }
}