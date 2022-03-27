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
import { RolesDTO } from './roles.dto';
import { RolesService } from './roles.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('roles')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}
  @Get()
  async showAllRoles() {
    const roles = await this.rolesService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      roles,
    };
  }
  @Post()
  async createRoles(@Body() data: RolesDTO) {
    const roles = await this.rolesService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      roles,
    };
  }

  @Get(':id')
  async readRoles(@Param('id') idrol: number) {
    const data = await this.rolesService.read(idrol);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async updateRoles(
    @Param('id') idrol: number,
    @Body() data: Partial<RolesDTO>,
  ) {
    await this.rolesService.update(idrol, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteRoles(@Param('id') idrol: number) {
    await this.rolesService.destroy(idrol);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
