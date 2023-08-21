
import { Module } from '@nestjs/common/decorators';
import { PostModule } from './modules/post/post_module';

@Module({
  imports: [PostModule],
})

export class AppModule { }
