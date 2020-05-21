import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@/orm/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}


  async getAllUsers(): Promise<User[]> {
    // TODO: actually fetch users
    return this.userRepo.find()
  }

  async getUserById(userId: number): Promise<User> {
    return this.userRepo.findOne(userId)
  }
}
