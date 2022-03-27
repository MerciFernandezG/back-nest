/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger'; 

// export interface MembertDTO {
export class MemberpDTO {
    @ApiProperty()
    idmembrep: number;

    @ApiProperty()
    periodmembre: string;

  }
   