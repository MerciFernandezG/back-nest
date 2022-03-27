/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger'; 

export class MembrePeriodDTO {
    @ApiProperty()
    idmembrep: number;

    @ApiProperty()
    periodmembre: string;

  }
   