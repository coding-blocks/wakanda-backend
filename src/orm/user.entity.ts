import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { Superhero } from "./superhero.entity";


@Entity() 
export class User {
  
  @PrimaryColumn()
  id: number

  @Column({nullable: false, length: 50})
  username: string

  @OneToOne(type => Superhero, superhero => superhero.user)
  @JoinColumn()
  superhero?: Superhero

}