import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Relative {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
