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
import { ApiTags } from '@nestjs/swagger';
import { DatosUserDTO } from './datosuser.dto';
import { DatosuserService } from './datosuser.service';

@ApiTags('datosuser')
@Controller('datosuser')
export class DatosuserController {
  constructor(private datosUserService: DatosuserService) {}
  @Get()
  async showAllDatosUser() {
    const datosUser = await this.datosUserService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      datosUser,
    };
  }
  @Post()
  async createDatosUser(@Body() data: DatosUserDTO) {
    const datosUser = await this.datosUserService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      datosUser,
    };
  }

  @Get(':id')
  async readDatosUser(@Param('id') iduser: number) {
    const data = await this.datosUserService.read(iduser);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async updateDatosUser(
    @Param('id') iduser: number,
    @Body() data: Partial<DatosUserDTO>,
  ) {
    await this.datosUserService.update(iduser, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteDatosUser(@Param('id') iduser: number) {
    await this.datosUserService.destroy(iduser);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
