import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AppConfig {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  versao: string;

  @Column()
  versaoAndroid: string;

  @Column()
  versaoIos: string;

  @Column()
  versaoAPK: string;

  @Column()
  maintenance: boolean;
}
