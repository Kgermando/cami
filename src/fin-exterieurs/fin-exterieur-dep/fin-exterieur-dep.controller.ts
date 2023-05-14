import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { FinExterieurDepCreateDto } from './models/fin-exterieur-dep-create.dto';
import { FinExterieurDepUpdateDto } from './models/fin-exterieur-dep-update.dto';
import { FinExterieurDepService } from './fin-exterieur-dep.service';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('fin-exterieur-deps')
export class FinExterieurDepController {
        
    constructor(
        private finExterieurDepService: FinExterieurDepService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
    return this.finExterieurDepService.paginate(page);
    }

    @Post()
    async create(
    @Body() body: FinExterieurDepCreateDto
    ) {
    return this.finExterieurDepService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
    return this.finExterieurDepService.findOne({id});
    }

    @Put(':id')
    async update(
    @Param('id') id: number,
    @Body() body: FinExterieurDepUpdateDto
    ) {
    await this.finExterieurDepService.update(id, body);
    return this.finExterieurDepService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
    return this.finExterieurDepService.delete(id);
    }

}


