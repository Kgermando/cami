import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { BanqueService } from './banque.service';
import { BanqueCreateDto } from './models/banque-create.dto';
import { BanqueUpdateDto } from './models/banque-update.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('banques')
export class BanqueController {
    constructor(
        private banqueService: BanqueService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.banqueService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: BanqueCreateDto
    ) {
        return this.banqueService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.banqueService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: BanqueUpdateDto
    ) {
        await this.banqueService.update(id, body);
        return this.banqueService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.banqueService.delete(id);
    }
}
