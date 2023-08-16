import { Injectable } from "@nestjs/common";
import { AkunaError } from "../../../../core/errors/akuna_error";
import { Either, Unit } from "../../../../core/logic/either";
import { SavePostDTO } from "../dtos/save_post_dto";


export interface SavePostUsecase {
  execute(data: SavePostDTO): Promise<Either<AkunaError, Unit>>;
}

@Injectable()
export class SavePost implements SavePostUsecase {
  async execute(data: SavePostDTO): Promise<Either<AkunaError, Unit>> {
    throw new Error("Method not implemented.");
  }
}