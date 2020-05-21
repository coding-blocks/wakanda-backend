import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@/entities/user.entity";
import { Superhero } from "@/entities/superhero.entity";

export const ProdDbModule = TypeOrmModule.forRoot({
  type: 'postgres',
  database: 'wakandadb',
  username: 'wakandauser',
  password: 'wakandapass',
  entities: [User, Superhero],
  synchronize: true,
  logging: true
})