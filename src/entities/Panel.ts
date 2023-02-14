import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('panel')
export class Panel {
  @PrimaryGeneratedColumn()
  panel_id: number

  @Column({ type: 'text' })
  panel_name: string

  @Column({ type: 'text' })
  panel_link: string

  @Column({ type: 'int8' })
  order: number

  @Column({ type: 'int8' })
  sector_id: string

  @Column({ type: 'int8' })
  category_id: string

  @Column({ type: 'int8' })
  subcategory_id: string

  @Column({ type: 'text' })
  status: string

  @Column({type: 'text'})
  created_by: string

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_date: Date
}