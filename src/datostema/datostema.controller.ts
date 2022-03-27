import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DatosTemaDTO } from './datostema.dto';
import { DatostemaService } from './datostema.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('datostema')
@Controller('datostema')
export class DatostemaController {
  constructor(private datostemaService: DatostemaService) {}
  @Get()
  async showAllRoles() {
    const roles = await this.datostemaService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      roles,
    };
  }
  @Post()
  async createRoles(@Body() data: DatosTemaDTO) {
    const roles = await this.datostemaService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      roles,
    };
  }

  @Get(':id')
  async readRoles(@Param('id') idrol: number) {
    const data = await this.datostemaService.read(idrol);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async updateRoles(
    @Param('id') idrol: number,
    @Body() data: Partial<DatosTemaDTO>,
  ) {
    await this.datostemaService.update(idrol, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteRoles(@Param('id') idrol: number) {
    await this.datostemaService.destroy(idrol);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
