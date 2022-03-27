import { Module } from '@nestjs/common';
import { DatosleccionService } from './datosleccion.service';
import { DatosleccionController } from './datosleccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosLeccionEntity } from './datosleccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DatosLeccionEntity])],
  providers: [DatosleccionService],
  controllers: [DatosleccionController],
})
export class DatosleccionModule {}
