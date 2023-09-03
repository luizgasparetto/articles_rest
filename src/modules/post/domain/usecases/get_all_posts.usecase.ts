import { Injectable } from "@nestjs/common";

import { Either } from "@core/logic/either";
import { BaseException } from "@core/exceptions/base_exception";


import { PostEntity } from "../entities/post_entity";
import { IPostsRepository } from "../repositories/i_posts.repository";

export abstract class GetAllPostsUsecase {
  execute: () => Promise<Either<BaseException, PostEntity[]>>;
}

@Injectable()
export class GetAllPosts implements GetAllPostsUsecase {
  constructor(private readonly repository: IPostsRepository) { }

  async execute(): Promise<Either<BaseException, PostEntity[]>> {
    return this.repository.getAll();
  }
}