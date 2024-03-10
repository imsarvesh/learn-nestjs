import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  @InjectModel('Users')
  private usersModel: Model<any>;

  create() {
    return this.usersModel.create({
      name: 'Sarvesh',
    });
  }

  findAll() {
    return this.usersModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  recurringTask() {
    console.log('recurringTask');
    return `recurringTask`;
  }
}
