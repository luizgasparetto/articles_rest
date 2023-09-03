import { Controller, Get } from "@nestjs/common";

import { clientError } from "@core/infra/protocols/http_response.protocol";

import { GetAllPostsUsecase } from "../../domain/usecases/get_all_posts.usecase";
import { FailGetPosts } from "../../domain/exceptions/post.exception";


@Controller('posts')
export class PostsController {

  constructor(
    private readonly getAllUsecase: GetAllPostsUsecase
  ) { }

  @Get('all')
  async getAll() {
    const response = await this.getAllUsecase.execute();
  }
}