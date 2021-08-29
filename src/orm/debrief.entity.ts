import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Mission } from "./mission.entity";
import { Superhero } from "./superhero.entity";

@Entity("debriefs")
export class Debrief {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column({
    type: "enum",
    enum: ["claimed", "accepted", "rejected"],
    default: "claimed"
  })
  status: string

  @Column({type: "text"})
  report: string

  @Column({type: "text", nullable: true})
  comment: string

  @ManyToOne(() => Superhero, {nullable: false})
  superhero: Superhero

  @ManyToOne(() => Mission, {nullable: false})
  mission: Mission

}