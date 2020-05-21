import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/entities/user.entity';
import { createTestTypeORMConfig } from '@/app.dbconfig';
import { Superhero } from '@/entities/superhero.entity';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(createTestTypeORMConfig([User, Superhero])),
        TypeOrmModule.forFeature([User])
      ],
      providers: [
        UsersService,
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('should return 1 user', async () => {
  //   const user = await service.getUserById(10)
  //   expect(user.id).toEqual(10);
  // });
});
