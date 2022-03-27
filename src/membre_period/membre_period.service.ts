import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MembrePeriodDTO } from './membre_period.dto';
import { MembrePeriodEntity } from './membre_period.entity';

@Injectable()
export class MembrePeriodService {
  constructor(
    @InjectRepository(MembrePeriodEntity)
    private memberpRepository: Repository<MembrePeriodEntity>,
  ) {}

  async showAll() {
    return await this.memberpRepository.find();
  }

  async create(data: MembrePeriodDTO) {
    const user = this.memberpRepository.create(data);
    await this.memberpRepository.save(data);
    return user;
  }

  async findByTipo(periodmembre: string): Promise<MembrePeriodDTO> {
    return await this.memberpRepository.findOne({
      where: {
        periodmembre: periodmembre,
      },
    });
  }

  async read(idmembrep: number) {
    return await this.memberpRepository.findOne({
      where: { idmembrep: idmembrep },
    });
  }

  async update(idmembrep: number, data: Partial<MembrePeriodDTO>) {
    await this.memberpRepository.update({ idmembrep }, data);
    return await this.memberpRepository.findOne({ idmembrep });
  }

  async destroy(idmembrep: number) {
    await this.memberpRepository.delete({ idmembrep });
    return { deleted: true };
  }
}
