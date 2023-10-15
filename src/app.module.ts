
import { Module } from '@nestjs/common/decorators';
import { PostModule } from './modules/post/posts.module';
import { CoreModule } from './core/core.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CoreModule,
    PostModule,
    ConfigModule.forRoot({ isGlobal: true })
  ]
})

export class AppModule { }
