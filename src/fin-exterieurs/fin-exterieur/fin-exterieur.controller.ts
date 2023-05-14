import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { FinExterieurService } from './fin-exterieur.service';
import { FinExterieurCreateDto } from './models/fin-exterieur-create.dto';
import { FinExterieurUpdateDto } from './models/fin-exterieur-update.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('fin-exterieurs')
export class FinExterieurController {  
    
    constructor(
        private finExterieurService: FinExterieurService
    ) {}

@Get()
async all(@Query('page') page = 1) {
    return this.finExterieurService.paginate(page);
}

@Post()
async create(
    @Body() body: FinExterieurCreateDto
) {
    return this.finExterieurService.create(body);
}

@Get(':id')
async get(@Param('id') id: number) {
    return this.finExterieurService.findOne({id});
}

@Put(':id')
async update(
    @Param('id') id: number,
    @Body() body: FinExterieurUpdateDto
) {
    await this.finExterieurService.update(id, body);
    return this.finExterieurService.findOne({id});
}

@Delete(':id')
async delete(@Param('id') id: number) {
    return this.finExterieurService.delete(id);
}

}

