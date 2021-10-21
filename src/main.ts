import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from '../config/app.config';
var cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  const config = app.get(AppConfig);
  await app.listen(config.port||3000);
}
bootstrap();
