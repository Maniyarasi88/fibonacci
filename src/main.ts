import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  var app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle('Fibonacci & Longest Balanced Substring Demo Application')
  .setDescription("Fibonacci & Longest Balanced Substring Demo API Application")
  .setVersion('v1')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('fibonacci', app, document);
  await app.listen(3001);
}
bootstrap();
