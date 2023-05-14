import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Caisse } from './models/caisse.entity';

@Injectable()
export class CaisseService extends AbstractService {
    constructor(
        @InjectRepository(Caisse) private readonly caisseRepository: Repository<Caisse>
    ) {
        super(caisseRepository); 
    }
}

