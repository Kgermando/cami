import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { LigneBudgetaire } from './models/ligne-budgetaire.entity';

@Injectable()
export class LigneBudgetaireService extends AbstractService {
    constructor(
        @InjectRepository(LigneBudgetaire) private readonly ligneBudgetaireRepository: Repository<LigneBudgetaire>
    ) {
        super(ligneBudgetaireRepository); 
    } 
}
