import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Through "NestFactory" we instantiate the Application
  const app = await NestFactory.create(AppModule);
  // Through below we allow the validationpipe to run globally
  // "Whitelist" would allow strict validation, It will rip out the element that are not defined in
  // the dto
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3333);
}
bootstrap();
