import { Module } from '@nestjs/common';
import { FinExterieurService } from './fin-exterieur.service';
import { FinExterieurController } from './fin-exterieur.controller';
import { FinExterieur } from './models/fin-exterieur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FinExterieur]),
    CommonModule,
  ],
  providers: [FinExterieurService],
  controllers: [FinExterieurController]
})
export class FinExterieurModule {}
