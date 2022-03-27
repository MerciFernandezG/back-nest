import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CursoCategDTO } from './cursocateg.dto';
import { CursoCategEntity } from './cursocateg.entity';

@Injectable()
export class CursocategService {
  constructor(
    @InjectRepository(CursoCategEntity)
    private cursocategRepository: Repository<CursoCategEntity>,
  ) {}

  async showAll() {
    return await this.cursocategRepository.find();
  }

  async create(data: CursoCategDTO) {
    const user = this.cursocategRepository.create(data);
    await this.cursocategRepository.save(data);
    return user;
  }

  async findByTipo(tipo: string): Promise<CursoCategDTO> {
    return await this.cursocategRepository.findOne({
      where: {
        tipo: tipo,
      },
    });
  }

  async read(idcategoria: number) {
    return await this.cursocategRepository.findOne({
      where: { idcategoria: idcategoria },
    });
  }

  async update(idcategoria: number, data: Partial<CursoCategDTO>) {
    await this.cursocategRepository.update({ idcategoria }, data);
    return await this.cursocategRepository.findOne({ idcategoria });
  }

  async destroy(idcategoria: number) {
    await this.cursocategRepository.delete({ idcategoria });
    return { deleted: true };
  }
}
