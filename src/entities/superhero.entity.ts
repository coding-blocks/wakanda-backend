import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Superhero {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({unique: true, nullable: false})
  caid: number

  @OneToOne(type => User, user => user.superhero)
  user: User

}