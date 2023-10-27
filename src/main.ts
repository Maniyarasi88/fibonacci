import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FibonacciModule } from './fibonacci/fibonacci.module';

async function bootstrap() {
  const app = await NestFactory.create(FibonacciModule);
  const config = new DocumentBuilder().setTitle('Fibonacci Demo Application')
  .setDescription("Fibonacci Demo API Application")
  .setVersion('v1')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('fibonacci', app, document);
  await app.listen(3001);
}
bootstrap();
