/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('membert')
export class MembertEntity {
  @PrimaryGeneratedColumn('increment')
  idmembret: number;

  @Column()
  tipomembre: string;

}