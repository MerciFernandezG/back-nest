import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CursoCategDTO } from './cursocateg.dto';
import { CursocategService } from './cursocateg.service';

@ApiTags('cursocateg')
@Controller('cursocateg')
export class CursocategController {
  constructor(private cursocategService: CursocategService) {}
  @Get()
  async showAllCategoria() {
    const roles = await this.cursocategService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      roles,
    };
  }
  @Post()
  async createCategoria(@Body() data: CursoCategDTO) {
    const roles = await this.cursocategService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      roles,
    };
  }

  @Get(':id')
  async readCategoria(@Param('id') idcategoria: number) {
    const data = await this.cursocategService.read(idcategoria);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async updateCategoria(
    @Param('id') idcategoria: number,
    @Body() data: Partial<CursoCategDTO>,
  ) {
    await this.cursocategService.update(idcategoria, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteCategoria(@Param('id') idcategoria: number) {
    await this.cursocategService.destroy(idcategoria);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
