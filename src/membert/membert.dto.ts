/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger'; 

// export interface MembertDTO {
export class MembertDTO {
    @ApiProperty()
    idmembret: number;

    @ApiProperty()
    tipomembre: string;

  }
   