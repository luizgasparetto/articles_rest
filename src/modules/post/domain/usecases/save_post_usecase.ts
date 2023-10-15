import { Injectable } from "@nestjs/common";

import { Either, Unit } from "@core/logic/either";
import { BaseException } from "@core/exceptions/base_exception";

import { SavePostDTO } from "../dtos/save_post.dto";

export interface SavePostUsecase {
  execute(data: SavePostDTO): Promise<Either<BaseException, Unit>>;
}

@Injectable()
export class SavePost implements SavePostUsecase {
  async execute(data: SavePostDTO): Promise<Either<BaseException, Unit>> {
    throw new Error("Method not implemented.");
  }
}