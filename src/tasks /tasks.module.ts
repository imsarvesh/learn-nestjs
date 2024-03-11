import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [TasksService, UsersService],
})
export class TasksModule {}
