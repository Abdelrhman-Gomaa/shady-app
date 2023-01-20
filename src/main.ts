import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('El-Shady App')
    .setDescription('This App for Student, let them to learn with love and passion')
    .setVersion('1.0')
    .addTag('Shady App')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('shady-app', app, document);
  
  await app.listen(3000);
}
bootstrap();
