import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Agent } from "./agent.entity";
import { Debrief } from "./debrief.entity";
import { User } from "./user.entity";

@Entity("superheroes")
export class Superhero {

  @PrimaryGeneratedColumn("increment")
  id: number

  @Column({unique: true, nullable: false})
  caid: string

  @Column()
  college: string

  @Column()
  branch: string

  @Column()
  gradYear: string

  @Column({
    type: "enum",
    enum: ["inductee", "soldier", "avenger"],
    default: "inductee"
  })
  level: string
  
  @OneToOne(() => User, user => user.superhero)
  user: User

  @ManyToOne(() => Agent, {nullable: false})
  handler: Agent


  @OneToMany(() => Debrief, debrief => debrief.superhero)
  debriefs: Debrief[]

}