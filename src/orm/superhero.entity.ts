import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { ShieldAgent } from "./shieldagent.entity";

export type LevelType = "inductee" | "soldier" | "avenger"

@Entity()
export class Superhero {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  ref_code: string

  @Column({
    type: "enum",
    enum: ["inductee", "soldier", "avenger"],
    default: "inductee"
  })
  level: LevelType

  @OneToOne(type => ShieldAgent)
  @JoinColumn()
  handler?: ShieldAgent
}