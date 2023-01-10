import { NestFactory } from '@nestjs/core';
import { AppModules } from './app.modules';

async function bootstrap() {
  const app = await NestFactory.create(AppModules);
  await app.listen(3000);
}
bootstrap();
