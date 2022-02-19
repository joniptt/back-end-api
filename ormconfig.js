module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 3306,
  username: 'postgres',
  password: 'mysecretpassword',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
