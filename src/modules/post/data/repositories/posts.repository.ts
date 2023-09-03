import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { Either, Left, Right } from "@core/logic/either";
import { BaseException } from "@core/exceptions/base_exception";

import { IPostsRepository } from "../../domain/repositories/i_posts.repository";
import { PostEntity } from "../../domain/entities/post_entity";
import { FailGetPosts } from "../../domain/exceptions/post.exception";

import { PostAdapter } from "../adapters/post.adapter";
import { PrismaService } from "@core/infra/services/database/prisma.service";

@Injectable()
export class PostsRepository implements IPostsRepository {
  constructor(private readonly prisma: PrismaService) { }

  async getAll(): Promise<Either<BaseException, PostEntity[]>> {
    try {
      const response = await this.prisma.posts.findMany({
        orderBy: { created_at: Prisma.SortOrder.asc }
      })

      const mapped = response.map((e) => PostAdapter.fromPrisma(e));

      return new Right(mapped);
    } catch (error) {
      return new Left(new FailGetPosts(error.message))
    }
  }
}