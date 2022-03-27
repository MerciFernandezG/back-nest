/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';


// export interface RolesDTO {
export class DatosTemaDTO {
    @ApiProperty()
    idtema: number;

    @ApiProperty()
    titulotema: string;

    @ApiProperty()
    resumentema: string;

  }
   