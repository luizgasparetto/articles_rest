import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { SwaggerDocs } from 'docs/swagger.docs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerDocs.init(app);

  await app.listen(3000);
}

bootstrap();
