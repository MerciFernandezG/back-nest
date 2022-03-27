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
import { MemberTipoDTO } from './membre_tipo.dto';
import { MembreTipoService } from 'src/membre_tipo/membre_tipo.service';

@ApiTags('membre-tipo')
@Controller('membre-tipo')
export class MembreTipoController {
  constructor(private membertipoService: MembreTipoService) {}
  @Get()
  async showAllMemberTipo() {
    const membert = await this.membertipoService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      membert,
    };
  }
  @Post()
  async createMemberTipo(@Body() data: MemberTipoDTO) {
    const membert = await this.membertipoService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      membert,
    };
  }

  @Get(':id')
  async readMemberTipo(@Param('id') idmembret: number) {
    const data = await this.membertipoService.read(idmembret);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async updateMemberTipo(
    @Param('id') idmembret: number,
    @Body() data: Partial<MemberTipoDTO>,
  ) {
    await this.membertipoService.update(idmembret, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteMemberTipo(@Param('id') idmembret: number) {
    await this.membertipoService.destroy(idmembret);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
