import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembertEntity } from './membert.entity';
import { MembertService } from './membert.service';
import { MembertController } from './membert.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MembertEntity])],
  controllers: [MembertController],
  providers: [MembertService],
})
export class MembertModule {}
