import { Module } from '@nestjs/common';
import { LigneBudgetaireController } from './ligne-budgetaire.controller';
import { LigneBudgetaireService } from './ligne-budgetaire.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { LigneBudgetaire } from './models/ligne-budgetaire.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([LigneBudgetaire]),
    CommonModule,
  ],
  controllers: [LigneBudgetaireController],
  providers: [LigneBudgetaireService]
})
export class LigneBudgetaireModule {}
