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
import { DificultadCursoDTO } from './dificultadcurso.dto';
import { DificultadcursoService } from './dificultadcurso.service';

@ApiTags('dificultadcurso')
@Controller('dificultadcurso')
export class DificultadcursoController {
  constructor(private dificultadCursoService: DificultadcursoService) {}
  @Get()
  async showAllDatosUser() {
    const dificultadcurso = await this.dificultadCursoService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      dificultadcurso,
    };
  }
  @Post()
  async createDificultadCurso(@Body() data: DificultadCursoDTO) {
    const dificultadcurso = await this.dificultadCursoService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      dificultadcurso,
    };
  }

  @Get(':id')
  async readDificultadCurso(@Param('id') iddificultad: number) {
    const data = await this.dificultadCursoService.read(iddificultad);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async updateDificultadCurso(
    @Param('id') iddificultad: number,
    @Body() data: Partial<DificultadCursoDTO>,
  ) {
    await this.dificultadCursoService.update(iddificultad, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteDificultadCurso(@Param('id') iddificultad: number) {
    await this.dificultadCursoService.destroy(iddificultad);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
