import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CaisseService } from './caisse.service';
import { CaisseCreateDto } from './models/caisse-create.dto';
import { CaisseUpdateDto } from './models/caisse-update.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('caisses')
export class CaisseController {
    constructor(
        private caisseService: CaisseService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.caisseService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: CaisseCreateDto
    ) {
        return this.caisseService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.caisseService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: CaisseUpdateDto
    ) {
        await this.caisseService.update(id, body);
        return this.caisseService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.caisseService.delete(id);
    }
}
