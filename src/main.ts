import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('ugivme')
    .setDescription('ugivme APIs')
    .setVersion('1.0.0')
    .build();

  const optSwagger = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/docs', app, optSwagger, {
    swaggerOptions: {
      filter: true,
    },
  });

  await app.listen(3000);
}
bootstrap();
