/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('datosleccion')
export class DatosLeccionEntity {
  @PrimaryGeneratedColumn('increment')
  idleccion: number;

  @Column()
  tituloleccion: string;

  @Column()
  niveldificultad: string;

  @Column()
  resumenleccion: string;

  @Column()
  fotoportadaleccion: string;

  @Column()
  video_audioleccion: string;

  @Column()
  materialesleccion: string;
  
}