import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Superhero } from "./superhero.entity";
import { User } from "./user.entity";

@Entity("agents")
export class Agent {

  @PrimaryGeneratedColumn("increment")
  id: number
  
  @Column()
  contactNumber: string

  @Column({
    type: "enum",
    enum: ["director", "commander", "agent"],
    default: "agent"
  })
  clearenceLevel: string

  @OneToOne(() => User, user => user.agent)
  user: User
  
  @OneToOne(() => Agent, {createForeignKeyConstraints: false})
  @JoinColumn()
  manager: Agent

  @OneToMany(() =>Superhero, superhero => superhero.handler)
  superheroes: Superhero[]
  

}