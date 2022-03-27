/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';


// export interface RolesDTO {
export class RolesDTO {
    @ApiProperty()
    idrol: number;

    @ApiProperty()
    tipo: string;

  }
   