import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { BanqueDep } from './models/banque-dep.entity';

@Injectable()
export class BanqueDepService extends AbstractService {
    constructor(
        @InjectRepository(BanqueDep) private readonly banqueDepRepository: Repository<BanqueDep>
    ) {
        super(banqueDepRepository); 
    } 
}

