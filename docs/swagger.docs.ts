import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export class SwaggerDocs {
  static init(app: INestApplication): void {
    const documentBuilder = new DocumentBuilder();
    const documentWithConfig = this.config(documentBuilder).build();

    const documentApiObject = SwaggerModule.createDocument(app, documentWithConfig);

    SwaggerModule.setup('documentation', app, documentApiObject, {
      customSiteTitle: 'Articles API'
    })
  }

  private static config(document: DocumentBuilder): DocumentBuilder {
    document.setTitle('Articles API');
    document.setVersion('0.5');
    document.addTag('posts', 'Publicações');

    return this.serverConfig(document);
  }

  private static serverConfig(document: DocumentBuilder): DocumentBuilder {
    document.addServer('http://localhost:3000', 'LocalHost');

    return document;
  }
}