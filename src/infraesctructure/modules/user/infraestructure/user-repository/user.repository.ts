import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { UserTodo } from '../../models/user.model';
import { UserTodoRepository } from './user-todo.repository';

@Injectable()
export class UserRepository implements UserTodoRepository {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async findOne(email: string): Promise<UserTodo> {
    return await this.userRepository.findOne({ where: { email: email } });
  }
  async insert(user: UserTodo): Promise<void> {
    const userEntity = this.userEntity(user);
    await this.userRepository.insert(userEntity);
  }

  async findAll(): Promise<UserTodo[]> {
    return await this.userRepository.find();
  }

  async findById(id: number): Promise<UserTodo> {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async updateContent(id: number, user: UserTodo): Promise<void> {
    const updateUser = this.userEntity(user);
    await this.userRepository

      .createQueryBuilder()
      .update(User)
      .set(updateUser)
      .where('id = :id', { id: id })
      .execute();
  }

  async deleteById(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  private userEntity(user: UserTodo) {
    const userEntity = new UserTodo();
    userEntity.id = user.id;
    userEntity.email = user.email;
    userEntity.password = user.password;
    return userEntity;
  }
}
