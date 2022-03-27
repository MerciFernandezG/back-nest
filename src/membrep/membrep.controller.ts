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
import { MemberpDTO } from './membrep.dto';
import { MembrepService } from './membrep.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('memberp')
@Controller('membrep')
export class MembrepController {
  constructor(private memberpService: MembrepService) {}
  @Get()
  async showAllMemberp() {
    const membert = await this.memberpService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      membert,
    };
  }
  @Post()
  async createMemberp(@Body() data: MemberpDTO) {
    const membert = await this.memberpService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      membert,
    };
  }

  @Get(':id')
  async readMemberp(@Param('id') idmembret: number) {
    const data = await this.memberpService.read(idmembret);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async updateMemberp(
    @Param('id') idmembrep: number,
    @Body() data: Partial<MemberpDTO>,
  ) {
    await this.memberpService.update(idmembrep, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteMemberp(@Param('id') idmembrep: number) {
    await this.memberpService.destroy(idmembrep);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
