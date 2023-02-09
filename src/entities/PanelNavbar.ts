import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('panel_navbar')
export class PanelNavbar {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'int8' })
  order: number

  @Column({type: 'text'})
  created_by: string

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_date: Date

}