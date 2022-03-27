import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberTipoDTO } from './membre_tipo.dto';
import { MemberTipoEntity } from './membre_tipo.entity';

@Injectable()
export class MembreTipoService {
  constructor(
    @InjectRepository(MemberTipoEntity)
    private membertipoRepository: Repository<MemberTipoEntity>,
  ) {}

  async showAll() {
    return await this.membertipoRepository.find();
  }

  async create(data: MemberTipoDTO) {
    const user = this.membertipoRepository.create(data);
    await this.membertipoRepository.save(data);
    return user;
  }

  async findByTipo(tipomembre: string): Promise<MemberTipoDTO> {
    return await this.membertipoRepository.findOne({
      where: {
        tipomembre: tipomembre,
      },
    });
  }

  async read(idmembret: number) {
    return await this.membertipoRepository.findOne({
      where: { idmembret: idmembret },
    });
  }

  async update(idmembret: number, data: Partial<MemberTipoDTO>) {
    await this.membertipoRepository.update({ idmembret }, data);
    return await this.membertipoRepository.findOne({ idmembret });
  }

  async destroy(idmembret: number) {
    await this.membertipoRepository.delete({ idmembret });
    return { deleted: true };
  }
}
