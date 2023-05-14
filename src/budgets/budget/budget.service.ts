import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Budget } from './models/budget.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BudgetService extends AbstractService {
    constructor(
        @InjectRepository(Budget) private readonly budgetRepository: Repository<Budget>
    ) {
        super(budgetRepository); 
    } 
}
