import { EntitySchema } from "typeorm";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from 'path'

type Entity = Function | string | EntitySchema<any>;

export function createProdTypeORMConfig(): TypeOrmModuleOptions {
  return ({
    type: 'postgres',
    database: 'wakandadb',
    username: 'wakandauser',
    password: 'wakandapass',
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true,
    logging: true
  })
}

export function createTestTypeORMConfig(): TypeOrmModuleOptions {
  return ({
    type: 'sqlite',
    database: ':memory:',
    entities: ['src/orm/*.entity.ts'],
    dropSchema: true,
    synchronize: true,
    logging: true
  })
}