import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('panel_subcategory')
export class PanelSubCategory {
  @PrimaryGeneratedColumn()
  subcategory_id: number

  @Column({ type: 'text' })
  subcategory_name: string

  @Column({ type: 'int8' })
  order: number

  @Column({ type: 'int8' })
  category_id: number

  @Column({ type: 'text' })
  status: string

}