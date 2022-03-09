import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlacaMae {
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
  CPU: string;

  @Column()
  Chipset: string;
}
