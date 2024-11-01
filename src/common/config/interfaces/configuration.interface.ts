export interface ConfigurationInterface {
  env?: string | 'production';
  port: number;
  database: {
    mongooseUri: string;
    databaseName: string;
  };
  test: string;
}
