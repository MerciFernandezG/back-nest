import { Module } from '@nestjs/common';
import { MembreTipoService } from './membre_tipo.service';
import { MembreTipoController } from './membre_tipo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberTipoEntity } from './membre_tipo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MemberTipoEntity])],
  providers: [MembreTipoService],
  controllers: [MembreTipoController],
})
export class MembreTipoModule {}
