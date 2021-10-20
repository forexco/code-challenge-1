import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { EnvModule } from 'nestjs-env';
import { AppConfig } from '../config/app.config';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports:
    [PostsModule,
      ConfigModule.forRoot({
        envFilePath: ['.env.development.local', '.env.development'],
      }),
      EnvModule.register([AppConfig]),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
