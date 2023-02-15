import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('panel_category')
export class PanelCategory {
  @PrimaryGeneratedColumn()
  category_id: number

  @Column({ type: 'text' })
  category_name: string

  @Column({ type: 'int8' })
  order: number

  @Column({ type: 'int8' })
  sector_id: number

  @Column({ type: 'text' })
  status: string

}