import { UserTodo } from '../../models/user.model';

export interface UserTodoRepository {
  insert(user: UserTodo): Promise<void>;
  findAll(): Promise<UserTodo[]>;
  findById(id: number): Promise<UserTodo>;
  updateContent(id: number, user: UserTodo): Promise<void>;
  deleteById(id: number): Promise<void>;
  findOne(email: string): Promise<UserTodo>;
}
