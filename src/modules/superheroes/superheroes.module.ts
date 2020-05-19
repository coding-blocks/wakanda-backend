import { Module } from '@nestjs/common';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

@Module({
  controllers: [SuperheroesController],
  providers: [SuperheroesService]
})
export class SuperheroesModule {}
