import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { SuperheroesModule } from './modules/superheroes/superheroes.module';
import { ProdDbModule } from './db/prod.db';

@Module({
  imports: [
    ProdDbModule,
    UsersModule, 
    SuperheroesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
