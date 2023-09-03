import { Entity } from "@core/contracts/entity";
export interface PostProps {
  title: string;
  content: string[];
  tags: Tags[];
  createdAt: Date;
  updatedAt?: Date
}

export class PostEntity extends Entity<PostProps> {
  private constructor(props: PostProps, id?: string) {
    super(props, id);
  }

  public static create(props: PostProps, id?: string) {
    return new PostEntity(props, id);
  }
}