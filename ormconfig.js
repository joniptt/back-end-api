module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'cadastro',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
