import { Module } from '@nestjs/common';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Superhero } from '@/orm/superhero.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Superhero])
  ],
  controllers: [SuperheroesController],
  providers: [SuperheroesService]
})
export class SuperheroesModule {}
