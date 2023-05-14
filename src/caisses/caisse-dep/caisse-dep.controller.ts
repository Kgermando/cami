import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CaisseDepUpdateDto } from './models/caisse-dep-update.dto';
import { CaisseDepCreateDto } from './models/caisse-dep-create.dto';
import { CaisseDepService } from './caisse-dep.service';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('caisse-dep')
export class CaisseDepController {
    constructor(
        private caisseDepService: CaisseDepService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.caisseDepService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: CaisseDepCreateDto
    ) {
        return this.caisseDepService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.caisseDepService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: CaisseDepUpdateDto
    ) {
        await this.caisseDepService.update(id, body);
        return this.caisseDepService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.caisseDepService.delete(id);
    }

}
