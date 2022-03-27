import { Module } from '@nestjs/common';
import { DatosuserService } from './datosuser.service';
import { DatosuserController } from './datosuser.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosUserEntity } from './datosuser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DatosUserEntity])],
  providers: [DatosuserService],
  controllers: [DatosuserController],
})
export class DatosuserModule {}
