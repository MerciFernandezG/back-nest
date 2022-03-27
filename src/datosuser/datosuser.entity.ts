/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('datosuser')
export class DatosUserEntity {
  @PrimaryGeneratedColumn('increment')
  iduser: number;

  @Column()
  fotoperfil: string;

  @Column()
  fotoportada: string;

  @Column()
  nombreapellido: string;

  @Column()
  userbio: string;

  @Column()
  userinteres: string;

}