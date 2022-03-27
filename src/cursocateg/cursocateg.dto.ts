/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';


// export interface RolesDTO {
export class CursoCategDTO {
    @ApiProperty()
    idcategoria: number;

    @ApiProperty()
    categoria: string;

  }
   