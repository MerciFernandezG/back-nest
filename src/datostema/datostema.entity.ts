/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('datostema')
export class DatostemaEntity {
  @PrimaryGeneratedColumn('increment')
  idtema: number;

  @Column()
  titulotema: string;

  @Column()
  resumentema: string;

}