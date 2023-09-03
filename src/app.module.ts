
import { Module } from '@nestjs/common/decorators';
import { PostModule } from './modules/post/posts_module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [PostModule, CoreModule],
})

export class AppModule { }
