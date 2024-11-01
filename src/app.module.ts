import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './common/config/models/configuration.model';
import { ConfigurationInterface } from './common/config';
import { CodeRoomModule } from './modules/code-room/code-room.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService
          .get<ConfigurationInterface['database']>('database')
          .mongooseUri.toString(),
        dbName: configService
          .get<ConfigurationInterface['database']>('database')
          .databaseName.toString(),
      }),
      inject: [ConfigService],
    }),
    CodeRoomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
