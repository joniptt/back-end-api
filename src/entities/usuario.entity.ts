import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  password?: string;

  @Column()
  email?: string;
}
