import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

describe('Superheroes Controller', () => {
  let controller: SuperheroesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroesService],
      controllers: [SuperheroesController],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
