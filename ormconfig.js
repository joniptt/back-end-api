module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '300650221',
  database: 'cadastro',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
