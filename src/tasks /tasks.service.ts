import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TasksService {
  constructor(private readonly usersService: UsersService) {}
  private readonly logger = new Logger(TasksService.name);

  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  everyDayAt1AM() {
    this.logger.debug('CRON: everyDayAt1AM - findAll');
    this.usersService.recurringTask();
  }
}
