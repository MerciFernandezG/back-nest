import { Module } from '@nestjs/common';
import { MembrePeriodService } from './membre_period.service';
import { MembrePeriodController } from './membre_period.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembrePeriodEntity } from './membre_period.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MembrePeriodEntity])],
  providers: [MembrePeriodService],
  controllers: [MembrePeriodController],
})
export class MembrePeriodModule {}
