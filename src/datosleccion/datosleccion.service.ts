import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatosLeccionDTO } from './datosleccion.dto';
import { DatosLeccionEntity } from './datosleccion.entity';

@Injectable()
export class DatosleccionService {
  constructor(
    @InjectRepository(DatosLeccionEntity)
    private datosLeccionRepository: Repository<DatosLeccionEntity>,
  ) {}

  async showAll() {
    return await this.datosLeccionRepository.find();
  }

  async create(data: DatosLeccionDTO) {
    const user = this.datosLeccionRepository.create(data);
    await this.datosLeccionRepository.save(data);
    return user;
  }

  async findByTitulo(tituloleccion: string): Promise<DatosLeccionDTO> {
    return await this.datosLeccionRepository.findOne({
      where: {
        tituloleccion: tituloleccion,
      },
    });
  }

  async read(idleccion: number) {
    return await this.datosLeccionRepository.findOne({
      where: { idleccion: idleccion },
    });
  }

  async update(idleccion: number, data: Partial<DatosLeccionDTO>) {
    await this.datosLeccionRepository.update({ idleccion }, data);
    return await this.datosLeccionRepository.findOne({ idleccion });
  }

  async destroy(idleccion: number) {
    await this.datosLeccionRepository.delete({ idleccion });
    return { deleted: true };
  }
}
