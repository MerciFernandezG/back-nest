/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('cursocateg')
export class CursoCategEntity {
  @PrimaryGeneratedColumn('increment')
  idcategoria: number;

  @Column()
  categoria: string;

}