import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { BanqueDepService } from './banque-dep.service';
import { BanqueDepCreateDto } from './models/banque-dep-create.dto';
import { BanqueDepUpdateDto } from './models/banque-dep-update.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('banque-dep')
export class BanqueDepController {
    constructor(
        private banqueDepService: BanqueDepService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.banqueDepService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: BanqueDepCreateDto
    ) {
        return this.banqueDepService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.banqueDepService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: BanqueDepUpdateDto
    ) {
        await this.banqueDepService.update(id, body);
        return this.banqueDepService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.banqueDepService.delete(id);
    }
}
