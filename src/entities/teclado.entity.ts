import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teclado {
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
  Iluminacao: string;

  @Column()
  Teclas: string;
}