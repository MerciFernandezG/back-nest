import { Module } from '@nestjs/common';
import { MembrepService } from './membrep.service';
import { MembrepController } from './membrep.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberpEntity } from './membrep.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MemberpEntity])],
  providers: [MembrepService],
  controllers: [MembrepController],
})
export class MembrepModule {}
