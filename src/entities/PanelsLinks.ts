import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('panels_links')
export class PanelsLinks {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'text', unique: true })
  link: string

  @Column({ type: 'text' })
  user: string
}