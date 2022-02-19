import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Usuario {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  password?: string;

  @Column()
  email?: string;
}
