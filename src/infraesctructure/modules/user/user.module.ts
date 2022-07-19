/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UserRepository } from './infraestructure/user-repository/user.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [UserRepository],
})
export class UserModule {}
