import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { FinExterieurDep } from './models/fin-exterieur-dep.entity';

@Injectable()
export class FinExterieurDepService extends AbstractService {
    constructor(
        @InjectRepository(FinExterieurDep) private readonly finExtieurDepRepository: Repository<FinExterieurDep>
    ) {
        super(finExtieurDepRepository); 
    } 
}

