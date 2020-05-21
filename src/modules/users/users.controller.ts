import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@/orm/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}


  /**
   * GET /users
   */
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers()
  }

  /**
   * GET /users/:id
   * @param id 
   */
  @Get(':id')
  async getUserById(@Param('id') id): Promise<User> {
    return this.userService.getUserById(id)
  }

}
