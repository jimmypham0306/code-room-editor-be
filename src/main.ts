import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ConfigurationInterface } from './common/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<ConfigurationInterface['port']>('port');
  await app.listen(port);
  console.log(`App is listening at ${await app.getUrl()}`);
}
bootstrap();
