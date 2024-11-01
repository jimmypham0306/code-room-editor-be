import { ConfigFactory } from '@nestjs/config';
import { ConfigurationInterface } from '../interfaces';
import { configDotenv } from '@dotenvx/dotenvx';

configDotenv();

const configuration: ConfigurationInterface = {
  database: {
    mongooseUri: process.env.MONGOOSE_URI.toString() || 'MONGOOSE_URI',
    databaseName: process.env.DB_NAME.toString() || 'MONGOOSE_URI',
  },
  port: parseInt(process.env.PORT) | 3000,
  env: process.env.ENV || 'production',
  test: process.env.TEST,
};
const configurationFunction: ConfigFactory<ConfigurationInterface> = () =>
  configuration;

export default configurationFunction;
