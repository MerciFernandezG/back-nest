import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberpDTO } from './membrep.dto';
import { MemberpEntity } from './membrep.entity';

@Injectable()
export class MembrepService {
  constructor(
    @InjectRepository(MemberpEntity)
    private memberpRepository: Repository<MemberpEntity>,
  ) {}

  async showAll() {
    return await this.memberpRepository.find();
  }

  async create(data: MemberpDTO) {
    const user = this.memberpRepository.create(data);
    await this.memberpRepository.save(data);
    return user;
  }

  async findByTipo(tipomembre: string): Promise<MemberpDTO> {
    return await this.memberpRepository.findOne({
      where: {
        tipomembre: tipomembre,
      },
    });
  }

  async read(idmembrep: number) {
    return await this.memberpRepository.findOne({
      where: { idmembrep: idmembrep },
    });
  }

  async update(idmembrep: number, data: Partial<MemberpDTO>) {
    await this.memberpRepository.update({ idmembrep }, data);
    return await this.memberpRepository.findOne({ idmembrep });
  }

  async destroy(idmembrep: number) {
    await this.memberpRepository.delete({ idmembrep });
    return { deleted: true };
  }
}
