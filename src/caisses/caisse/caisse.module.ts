import { Module } from '@nestjs/common';
import { CaisseService } from './caisse.service';
import { CaisseController } from './caisse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { Caisse } from './models/caisse.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Caisse]),
    CommonModule,
  ],
  providers: [CaisseService],
  controllers: [CaisseController]
})
export class CaisseModule {}
