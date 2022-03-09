import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mouse {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  img: string;

  @Column()
  preco: number;

  @Column()
  Marca: string;

  @Column()
  Modelo: string;

  @Column()
  Cor: string;

  @Column()
  DPI: string;
}
