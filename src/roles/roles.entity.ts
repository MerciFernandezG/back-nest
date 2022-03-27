/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('rol')
export class RolesEntity {
  @PrimaryGeneratedColumn('increment')
  idrol: number;

  @Column()
  tipo: string;

}