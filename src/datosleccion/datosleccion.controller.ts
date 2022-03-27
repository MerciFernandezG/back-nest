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
import { DatosLeccionDTO } from './datosleccion.dto';
import { DatosleccionService } from './datosleccion.service';

@ApiTags('datosleccion')
@Controller('datosleccion')
export class DatosleccionController {
  constructor(private DatosLeccionService: DatosleccionService) {}
  @Get()
  async showAllDatosLeccion() {
    const datosLeccion = await this.DatosLeccionService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      datosLeccion,
    };
  }
  @Post()
  async createDatosLeccion(@Body() data: DatosLeccionDTO) {
    const datosLeccion = await this.DatosLeccionService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      datosLeccion,
    };
  }

  @Get(':id')
  async readDatosLeccion(@Param('id') idleccion: number) {
    const data = await this.DatosLeccionService.read(idleccion);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async updateDatosLeccion(
    @Param('id') idleccion: number,
    @Body() data: Partial<DatosLeccionDTO>,
  ) {
    await this.DatosLeccionService.update(idleccion, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteDatosLeccion(@Param('id') idleccion: number) {
    await this.DatosLeccionService.destroy(idleccion);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
