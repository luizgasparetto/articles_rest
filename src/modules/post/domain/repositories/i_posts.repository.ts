import { BaseException } from "@core/exceptions/base_exception";
import { Either } from "@core/logic/either";

import { PostEntity } from "../entities/post_entity";

export abstract class IPostsRepository {
  getAll: () => Promise<Either<BaseException, PostEntity[]>>;
}