import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolesDTO } from './roles.dto';
import { RolesEntity } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RolesEntity)
    private rolesRepository: Repository<RolesEntity>,
  ) {}

  async showAll() {
    return await this.rolesRepository.find();
  }

  async create(data: RolesDTO) {
    const user = this.rolesRepository.create(data);
    await this.rolesRepository.save(data);
    return user;
  }

  async findByTipo(tipo: string): Promise<RolesDTO> {
    return await this.rolesRepository.findOne({
      where: {
        tipo: tipo,
      },
    });
  }

  async read(idrol: number) {
    return await this.rolesRepository.findOne({ where: { idrol: idrol } });
  }

  async update(idrol: number, data: Partial<RolesDTO>) {
    await this.rolesRepository.update({ idrol }, data);
    return await this.rolesRepository.findOne({ idrol });
  }

  async destroy(idrol: number) {
    await this.rolesRepository.delete({ idrol });
    return { deleted: true };
  }
}
