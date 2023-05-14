import { Module } from '@nestjs/common';
import { DetteController } from './dette.controller';
import { DetteService } from './dette.service';

@Module({
  controllers: [DetteController],
  providers: [DetteService]
})
export class DetteModule {}
