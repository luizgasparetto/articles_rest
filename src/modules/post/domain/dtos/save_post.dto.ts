import { IsNotEmpty } from "class-validator";

export class SavePostDTO {
  @IsNotEmpty()
  title: String;

  @IsNotEmpty()
  content: String[]
}