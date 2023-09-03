import { Module, Type } from "@nestjs/common";

import { CoreModule } from "../../core/core.module";

import { GetAllPosts, GetAllPostsUsecase } from "./domain/usecases/get_all_posts.usecase";
import { PostsRepository } from "./data/repositories/posts.repository";
import { IPostsRepository } from "./domain/repositories/i_posts.repository";

import { PostsController } from "./presenter/controllers/posts.controller";


@Module({
  imports: [CoreModule],
  controllers: [PostsController],
  providers: [
    { provide: GetAllPostsUsecase, useClass: GetAllPosts },
    { provide: IPostsRepository, useClass: PostsRepository }
  ]
})

export class PostModule { }
