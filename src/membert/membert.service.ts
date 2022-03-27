import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MembertDTO } from './membert.dto';
import { MembertEntity } from './membert.entity';

@Injectable()
export class MembertService {
  constructor(
    @InjectRepository(MembertEntity)
    private membertRepository: Repository<MembertEntity>,
  ) {}

  async showAll() {
    return await this.membertRepository.find();
  }

  async create(data: MembertDTO) {
    const user = this.membertRepository.create(data);
    await this.membertRepository.save(data);
    return user;
  }

  async findByTipo(tipomembre: string): Promise<MembertDTO> {
    return await this.membertRepository.findOne({
      where: {
        tipomembre: tipomembre,
      },
    });
  }

  async read(idmembret: number) {
    return await this.membertRepository.findOne({
      where: { idmembret: idmembret },
    });
  }

  async update(idmembret: number, data: Partial<MembertDTO>) {
    await this.membertRepository.update({ idmembret }, data);
    return await this.membertRepository.findOne({ idmembret });
  }

  async destroy(idmembret: number) {
    await this.membertRepository.delete({ idmembret });
    return { deleted: true };
  }
}
