import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ActivateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID('4')
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID('4')
  code: string;
}
