import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatosUserDTO } from './datosuser.dto';
import { DatosUserEntity } from './datosuser.entity';

@Injectable()
export class DatosuserService {
  constructor(
    @InjectRepository(DatosUserEntity)
    private datosUserRepository: Repository<DatosUserEntity>,
  ) {}

  async showAll() {
    return await this.datosUserRepository.find();
  }

  async create(data: DatosUserDTO) {
    const user = this.datosUserRepository.create(data);
    await this.datosUserRepository.save(data);
    return user;
  }

  async findByNombreApellido(nombreapellido: string): Promise<DatosUserDTO> {
    return await this.datosUserRepository.findOne({
      where: {
        nombreapellido: nombreapellido,
      },
    });
  }

  async read(iduser: number) {
    return await this.datosUserRepository.findOne({
      where: { iduser: iduser },
    });
  }

  async update(iduser: number, data: Partial<DatosUserDTO>) {
    await this.datosUserRepository.update({ iduser }, data);
    return await this.datosUserRepository.findOne({ iduser });
  }

  async destroy(iduser: number) {
    await this.datosUserRepository.delete({ iduser });
    return { deleted: true };
  }
}
