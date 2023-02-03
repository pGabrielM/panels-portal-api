import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('panels_links')
export class PanelsLinks {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  panel_name: string

  @Column({ type: 'text', unique: true })
  panel_link: string

  @Column({ type: 'text' })
  created_by_user: string
}