import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { Superhero } from "./superhero.entity";
import { ShieldAgent } from "./shieldagent.entity";


@Entity() 
export class User {
  
  @PrimaryColumn()
  id: number

  @Column()
  email: string

  @Column()
  college: string

  @Column()
  branch: string

  @Column()
  grad_year: number

  @OneToOne(type => Superhero)
  @JoinColumn()
  superhero?: Superhero

  @OneToOne(type => ShieldAgent)
  @JoinColumn()
  shieldAgent?: ShieldAgent

}