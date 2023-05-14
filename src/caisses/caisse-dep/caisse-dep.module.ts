import { Module } from '@nestjs/common';
import { CaisseDepService } from './caisse-dep.service';
import { CaisseDepController } from './caisse-dep.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CaisseDep } from './models/caisse-dep.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CaisseDep]),
    CommonModule,
  ],
  providers: [CaisseDepService],
  controllers: [CaisseDepController]
})
export class CaisseDepModule {}
