import { Module } from '@nestjs/common';
import { DatostemaService } from './datostema.service';
import { DatostemaController } from './datostema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatostemaEntity } from './datostema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DatostemaEntity])],
  providers: [DatostemaService],
  controllers: [DatostemaController],
})
export class DatostemaModule {}
