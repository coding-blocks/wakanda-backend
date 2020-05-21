import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { TestDbModule } from '@/db/test.db';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestDbModule],
      providers: [
        UsersService,
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 1 user', async () => {
    const user = await service.getUserById(10)
    expect(user.id).toEqual(10);
  });
});
