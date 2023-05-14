import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { LigneBudgetaireService } from './ligne-budgetaire.service';
import { LigneBudgetaireUpdateDto } from './models/ligne-budgetaire-update.dto';
import { LigneBudgetaireCreateDto } from './models/ligne-budgetaire-create.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('ligne-budgetaires')
export class LigneBudgetaireController {
    constructor(
        private ligneBudgetaireService: LigneBudgetaireService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.ligneBudgetaireService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: LigneBudgetaireCreateDto
    ) {
        return this.ligneBudgetaireService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.ligneBudgetaireService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: LigneBudgetaireUpdateDto
    ) {
        await this.ligneBudgetaireService.update(id, body);
        return this.ligneBudgetaireService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.ligneBudgetaireService.delete(id);
    }
}
