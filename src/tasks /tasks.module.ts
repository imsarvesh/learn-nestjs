import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UsersService } from 'src/users/users.service';


@Module({
  imports: [],
  controllers: [],
  providers: [TasksService, UsersService],
})
export class TasksModule {}
