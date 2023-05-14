import { Module } from '@nestjs/common';
import { BanqueDepService } from './banque-dep.service';
import { BanqueDepController } from './banque-dep.controller';
import { BanqueDep } from './models/banque-dep.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([BanqueDep]),
    CommonModule,
  ],
  providers: [BanqueDepService],
  controllers: [BanqueDepController]
})
export class BanqueDepModule {}
