import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { FinExterieur } from './models/fin-exterieur.entity';

@Injectable()
export class FinExterieurService extends AbstractService {
    constructor(
        @InjectRepository(FinExterieur) private readonly finExterieurRepository: Repository<FinExterieur>
    ) {
        super(finExterieurRepository); 
    } 
}

