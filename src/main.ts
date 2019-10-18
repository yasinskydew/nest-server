import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { MyLogger } from './shared/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyLogger()
  });

  const options = new DocumentBuilder()
  .setTitle('Nest-server')
  .setDescription('The API description')
  .addBearerAuth()
  .setVersion('1.0')
  .addTag('users')
  .addTag('leagues')
  .addTag('stages')
  .addTag('races')
  .build();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
