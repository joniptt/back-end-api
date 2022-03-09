import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Processador {
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
  Soquete: string;

  @Column()
  Núcleos: string;

  @Column()
  Threads: string;
}
