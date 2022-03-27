import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DificultadCursoDTO } from './dificultadcurso.dto';
import { DificultadCursoEntity } from './dificultadcurso.entity';

@Injectable()
export class DificultadcursoService {
  constructor(
    @InjectRepository(DificultadCursoEntity)
    private dificultadCursoRepository: Repository<DificultadCursoEntity>,
  ) {}

  async showAll() {
    return await this.dificultadCursoRepository.find();
  }

  async create(data: DificultadCursoDTO) {
    const user = this.dificultadCursoRepository.create(data);
    await this.dificultadCursoRepository.save(data);
    return user;
  }

  async findByNombreApellido(
    niveldificultad: string,
  ): Promise<DificultadCursoDTO> {
    return await this.dificultadCursoRepository.findOne({
      where: {
        niveldificultad: niveldificultad,
      },
    });
  }

  async read(iddificultad: number) {
    return await this.dificultadCursoRepository.findOne({
      where: { iddificultad: iddificultad },
    });
  }

  async update(iddificultad: number, data: Partial<DificultadCursoDTO>) {
    await this.dificultadCursoRepository.update({ iddificultad }, data);
    return await this.dificultadCursoRepository.findOne({ iddificultad });
  }

  async destroy(iddificultad: number) {
    await this.dificultadCursoRepository.delete({ iddificultad });
    return { deleted: true };
  }
}
