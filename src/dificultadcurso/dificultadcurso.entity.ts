/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('dificultadcurso')
export class DificultadCursoEntity {
  @PrimaryGeneratedColumn('increment')
  iddificultad: number;

  @Column()
  niveldificultad: string;
  
}