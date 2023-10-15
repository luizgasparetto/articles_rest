import { Controller, Get } from "@nestjs/common";

import { GetAllPostsUsecase } from "../../domain/usecases/get_all_posts.usecase";
import { PostEntity } from "../../domain/entities/post_entity";
import { BaseException } from "@core/exceptions/base_exception";


@Controller('posts')
export class PostsController {

  constructor(
    private readonly getAllUsecase: GetAllPostsUsecase
  ) { }

  @Get('all')
  async getAll(): Promise<PostEntity[] | BaseException> {
    const response = await this.getAllUsecase.execute();

    if (response.isLeft()) {
      throw response.value;
    }

    return response.value;
  }
}