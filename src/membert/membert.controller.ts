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
import { MembertDTO } from './membert.dto';
import { MembertService } from './membert.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('membert')
@Controller('membert')
export class MembertController {
  constructor(private membertService: MembertService) {}
  @Get()
  async showAllMembert() {
    const membert = await this.membertService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      membert,
    };
  }
  @Post()
  async createMembert(@Body() data: MembertDTO) {
    const membert = await this.membertService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      membert,
    };
  }

  @Get(':id')
  async readMembert(@Param('id') idmembret: number) {
    const data = await this.membertService.read(idmembret);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async updateMembert(
    @Param('id') idmembret: number,
    @Body() data: Partial<MembertDTO>,
  ) {
    await this.membertService.update(idmembret, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteMembert(@Param('id') idmembret: number) {
    await this.membertService.destroy(idmembret);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
