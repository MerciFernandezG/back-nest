import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
// import { MembertModule } from './membert/membert.module';
import { RolesModule } from './roles/roles.module';
import { DatosuserModule } from './datosuser/datosuser.module';
import { DatostemaModule } from './datostema/datostema.module';
import { MembertModule } from './membert/membert.module';
import { MembrepModule } from './membrep/membrep.module';
import { CursocategModule } from './cursocateg/cursocateg.module';
import { MembreTipoModule } from './membre_tipo/membre_tipo.module';
import { MembrePeriodModule } from './membre_period/membre_period.module';
import { DificultadcursoModule } from './dificultadcurso/dificultadcurso.module';
import { DatosleccionModule } from './datosleccion/datosleccion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'authnestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      //autoLoadEntities: true, // solo desarrollo
    }),
    AuthModule,
    // MembertModule,
    RolesModule,
    DatosuserModule,
    DatostemaModule,
    MembertModule,
    MembrepModule,
    CursocategModule,
    MembreTipoModule,
    MembrePeriodModule,
    DificultadcursoModule,
    DatosleccionModule,
  ],
})
export class AppModule {}
