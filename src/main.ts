import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Through "NestFactory" we instantiate the Application
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);
}
bootstrap();
