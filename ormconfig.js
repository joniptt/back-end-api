module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'usuarios',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
