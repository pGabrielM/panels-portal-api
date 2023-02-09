import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('panel')
export class Panel {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  panel_name: string

  @Column({ type: 'text' })
  link: string

  @Column({ type: 'text' })
  status: string

  @Column({ type: 'int8' })
  order: number

  @Column({type: 'text'})
  created_by: string

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_date: Date
}