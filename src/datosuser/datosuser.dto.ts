/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';


// export interface RolesDTO {
export class DatosUserDTO {
    @ApiProperty()
    iduser: number;

    @ApiProperty()
    fotoperfil: string;

    @ApiProperty()
    fotoportada: string;

    @ApiProperty()
    nombreapellido: string;

    @ApiProperty()
    userbio: string;

    @ApiProperty()
    userinteres: string;

  }
   