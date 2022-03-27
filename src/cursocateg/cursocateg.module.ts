import { Module } from '@nestjs/common';
import { CursocategService } from './cursocateg.service';
import { CursocategController } from './cursocateg.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoCategEntity } from './cursocateg.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CursoCategEntity])],
  providers: [CursocategService],
  controllers: [CursocategController],
})
export class CursocategModule {}
