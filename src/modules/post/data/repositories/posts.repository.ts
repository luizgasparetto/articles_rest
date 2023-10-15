import { Injectable } from "@nestjs/common";

import { Either, Left, Right } from "@core/logic/either";
import { BaseException } from "@core/exceptions/base_exception";
import { PrismaService } from "@core/services/database/prisma.service";

import { IPostsRepository } from "../../domain/repositories/i_posts.repository";
import { PostEntity } from "../../domain/entities/post_entity";
import { FailGetPosts } from "../../domain/exceptions/post.exception";

import { PostAdapter } from "../adapters/post.adapter";

@Injectable()
export class PostsRepository implements IPostsRepository {
  constructor(private readonly prisma: PrismaService) { }

  async getAll(): Promise<Either<BaseException, PostEntity[]>> {
    try {
      const response = await this.prisma.posts.findMany();

      const mapped = response.map((e) => PostAdapter.fromPrisma(e));

      return new Right(mapped);
    } catch (error) {
      return new Left(new FailGetPosts(error.message))
    }
  }
}