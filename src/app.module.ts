import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { SuperheroesModule } from './modules/superheroes/superheroes.module';

@Module({
  imports: [UsersModule, SuperheroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
