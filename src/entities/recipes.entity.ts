import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imagePath: string;
}
