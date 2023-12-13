const configuration = () => ({
  portApp: parseInt(process.env['API_GATEWAY_PORT'] as string, 10) || 3000,
  databaseMysql: {
    host: process.env['MYSQL_HOST'],
    port: parseInt(process.env['MYSQL_PORT'] as string, 10) || 5432,
    username: process.env['MYSQL_PORT'],
    password: process.env['MYSQL_PASSWORD'],
    databaseName: process.env['MYSQL_DATABASE'],
  },
});

export default configuration;
