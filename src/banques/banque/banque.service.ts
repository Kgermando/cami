import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Banque } from './models/banque.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BanqueService extends AbstractService {
    constructor(
        @InjectRepository(Banque) private readonly banqueRepository: Repository<Banque>
    ) {
        super(banqueRepository); 
    } 
}
