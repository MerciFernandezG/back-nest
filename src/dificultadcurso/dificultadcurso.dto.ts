/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class DificultadCursoDTO {
    @ApiProperty()
    iddificultad : number;

    @ApiProperty()
    niveldificultad: string;

    }
   