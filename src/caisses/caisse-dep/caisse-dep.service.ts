import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { CaisseDep } from './models/caisse-dep.entity';

@Injectable()
export class CaisseDepService extends AbstractService {
    constructor(
        @InjectRepository(CaisseDep) private readonly caisseDepRepository: Repository<CaisseDep>
    ) {
        super(caisseDepRepository); 
    } 
}

