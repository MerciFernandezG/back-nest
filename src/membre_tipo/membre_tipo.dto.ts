/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger'; 

// export interface MembertDTO {
export class MemberTipoDTO {
    @ApiProperty()
    idmembret: number;

    @ApiProperty()
    tipomembre: string;

  }
   