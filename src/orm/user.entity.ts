import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Agent } from "./agent.entity";
import { Superhero } from "./superhero.entity";

@Entity("users")
export class User {

  @PrimaryColumn()
  id: number

  @Column()
  email: string

  @Column()
  password: string

  @OneToOne(() => Superhero, superhero => superhero.user)
  @JoinColumn()
  superhero: Superhero

  @OneToOne(() => Agent, agent => agent.user)
  @JoinColumn()
  agent: Agent

}