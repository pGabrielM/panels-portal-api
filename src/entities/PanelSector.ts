import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('panel_sector')
export class PanelSector {
  @PrimaryGeneratedColumn()
  sector_id: number

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'int8' })
  order: number

  @Column({ type: 'text' })
  status: string

}