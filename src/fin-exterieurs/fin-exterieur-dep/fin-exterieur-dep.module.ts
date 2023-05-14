import { Module } from '@nestjs/common';
import { FinExterieurDepController } from './fin-exterieur-dep.controller';
import { FinExterieurDepService } from './fin-exterieur-dep.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { FinExterieurDep } from './models/fin-exterieur-dep.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FinExterieurDep]),
    CommonModule,
  ],
  controllers: [FinExterieurDepController],
  providers: [FinExterieurDepService]
})
export class FinExterieurDepModule {}
