import { Env } from 'nestjs-env';

export class AppConfig {
    @Env('PORT', {default: 3000})
    port: number;

    @Env('NODE_ENV')
    env: string;
    
    get isDevelopment() {
      return this.env === 'development';
    };

    @Env('DATABASE_URI')
    dbURI: string;

}