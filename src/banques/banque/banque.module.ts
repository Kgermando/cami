import { Module } from '@nestjs/common';
import { BanqueService } from './banque.service';
import { BanqueController } from './banque.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { Banque } from './models/banque.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Banque]),
    CommonModule,
  ],
  providers: [BanqueService],
  controllers: [BanqueController]
})
export class BanqueModule {}
