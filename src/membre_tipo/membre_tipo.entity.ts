/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('membre_tipo')
export class MemberTipoEntity {
  @PrimaryGeneratedColumn('increment')
  idmembret: number;

  @Column()
  tipomembre: string;

}