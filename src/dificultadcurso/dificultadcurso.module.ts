import { Module } from '@nestjs/common';
import { DificultadcursoService } from './dificultadcurso.service';
import { DificultadcursoController } from './dificultadcurso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DificultadCursoEntity } from './dificultadcurso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DificultadCursoEntity])],
  providers: [DificultadcursoService],
  controllers: [DificultadcursoController],
})
export class DificultadcursoModule {}
