import { Posts } from "@prisma/client";

import { PostEntity, PostProps } from "../../domain/entities/post_entity";

export class PostAdapter {
  public static fromPrisma(post: Posts): PostEntity {
    const { id, title, content, tags, created_at, updated_at } = post;

    const props: PostProps = {
      title,
      content,
      tags: this.tagsFromPrisma(tags),
      createdAt: created_at,
      updatedAt: updated_at
    };

    return PostEntity.create(props, id)
  }

  private static tagsFromPrisma(tags: string[]): Tags[] {
    const tagsValues = Object.values(Tags);

    const response = tags.map((e) => {
      if (tagsValues.includes(e)) {
        return Tags[e as keyof typeof Tags];
      }
    });

    return response.filter((tag): tag is Tags => tag !== undefined);
  }
}