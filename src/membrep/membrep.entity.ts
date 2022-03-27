/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('memberp')
export class MemberpEntity {
  @PrimaryGeneratedColumn('increment')
  idmembrep: number;

  @Column()
  periodmembre: string;

}