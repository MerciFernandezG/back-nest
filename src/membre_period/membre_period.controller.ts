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
import { MembrePeriodDTO } from './membre_period.dto';
import { MembrePeriodService } from './membre_period.service';

@ApiTags('membre-period')
@Controller('membre-period')
export class MembrePeriodController {
  constructor(private membrePeriodService: MembrePeriodService) {}
  @Get()
  async showAllMemberPeriod() {
    const memberPeriod = await this.membrePeriodService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      memberPeriod,
    };
  }
  @Post()
  async createMemberPeriod(@Body() data: MembrePeriodDTO) {
    const memberPeriod = await this.membrePeriodService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      memberPeriod,
    };
  }

  @Get(':id')
  async readMemberPeriod(@Param('id') idmembrep: number) {
    const data = await this.membrePeriodService.read(idmembrep);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async updateMemberPeriod(
    @Param('id') idmembrep: number,
    @Body() data: Partial<MembrePeriodDTO>,
  ) {
    await this.membrePeriodService.update(idmembrep, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteMemberPeriod(@Param('id') idmembrep: number) {
    await this.membrePeriodService.destroy(idmembrep);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
