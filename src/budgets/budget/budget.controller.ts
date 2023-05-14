import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { BudgetService } from './budget.service';
import { BudgetCreateDto } from './models/budget-create.dto';
import { BudgetUpdateDto } from './models/budget-update.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('budgets')
export class BudgetController {
    constructor(
        private budgetService: BudgetService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.budgetService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: BudgetCreateDto
    ) {
        return this.budgetService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.budgetService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: BudgetUpdateDto
    ) {
        await this.budgetService.update(id, body);
        return this.budgetService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.budgetService.delete(id);
    }
}
