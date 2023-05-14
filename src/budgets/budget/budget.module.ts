import { Module } from '@nestjs/common';
import { BudgetController } from './budget.controller';
import { BudgetService } from './budget.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { Budget } from './models/budget.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Budget]),
    CommonModule,
  ],
  controllers: [BudgetController],
  providers: [BudgetService]
})
export class BudgetModule {}
