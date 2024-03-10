import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { usersSchema } from './users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Users', schema: usersSchema, collection: 'Users' }
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
