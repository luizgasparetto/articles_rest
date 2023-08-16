import { Entity } from "../../../../core/contracts/entity";

interface PostProps {
  title: string;
  content: string[];
}

export class PostEntity extends Entity<PostProps> {
  private constructor(props: PostProps) {
    super(props);
  }

  public static create(props: PostProps) {
    return new PostEntity(props);
  }
}