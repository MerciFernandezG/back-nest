/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('membre_period')
export class MembrePeriodEntity {
  @PrimaryGeneratedColumn('increment')
  idmembrep: number;

  @Column()
  periodmembre: string;

}