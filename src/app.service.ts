import { Injectable } from '@nestjs/common';
import { AppConfig } from '../config/app.config';

@Injectable()
export class AppService {
  constructor(private readonly appConfig: AppConfig) {
    console.log(this.appConfig.isDevelopment);
  };
  getHello(): string {
    return 'Hello World!';
  }
}
