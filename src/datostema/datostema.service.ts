import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatosTemaDTO } from './datostema.dto';
import { DatostemaEntity } from './datostema.entity';

@Injectable()
export class DatostemaService {
  constructor(
    @InjectRepository(DatostemaEntity)
    private datostemaRepository: Repository<DatostemaEntity>,
  ) {}

  async showAll() {
    return await this.datostemaRepository.find();
  }
  async create(data: DatosTemaDTO) {
    const user = this.datostemaRepository.create(data);
    await this.datostemaRepository.save(data);
    return user;
  }

  async findByTituloTema(titulotema: string): Promise<DatosTemaDTO> {
    return await this.datostemaRepository.findOne({
      where: {
        titulotema: titulotema,
      },
    });
  }

  async read(idtema: number) {
    return await this.datostemaRepository.findOne({
      where: { idtema: idtema },
    });
  }

  async update(idtema: number, data: Partial<DatosTemaDTO>) {
    await this.datostemaRepository.update({ idtema }, data);
    return await this.datostemaRepository.findOne({ idtema });
  }

  async destroy(idtema: number) {
    await this.datostemaRepository.delete({ idtema });
    return { deleted: true };
  }
}
