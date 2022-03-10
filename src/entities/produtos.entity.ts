import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Produtos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

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

  @Column()
  Cor: string;

  @Column()
  DPI: string;

  @Column()
  CPU: string;

  @Column()
  Chipset: string;
}
