/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class DatosLeccionDTO {
    @ApiProperty()
    idleccion : number;

    @ApiProperty()
    tituloleccion: string;

    @ApiProperty()
    resumenleccion: string;

    @ApiProperty()
    fotoportadaleccion: string;

    @ApiProperty()
    video_audioleccion: string;

    @ApiProperty()
    materialesleccion: string;

    }
   