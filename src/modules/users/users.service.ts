import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getAllUsers(): string[] {
    // TODO: actually fetch users
    return ["user1", "user2"]
  }

  getUserById(userId: number): string {
    return "user" + userId
  }
}
