import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";

export type ClearanceLevelType = "director" | "commander" | "agent"

@Entity() 
export class ShieldAgent {
  
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  official_email: string

  @Column()
  contact_no: number

  @Column({
    type: "enum",
    enum: ["director", "commander", "agent"],
    default: "agent"
  })
  clearance_level: ClearanceLevelType

  @OneToOne(type => ShieldAgent)
  @JoinColumn()
  manager?: ShieldAgent
}