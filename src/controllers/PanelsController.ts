import { Request, Response } from "express"
import { Equal, LessThan, Raw } from "typeorm"
import { BadRequestError } from "../helpers/api-error"
import { panelRepository } from "../repositories/panelRepository"

export interface CreatePanelProps {
  panel_name: string
  panel_link: string
  order: number
  sector_id?: number
  category_id?: number
  subcategory_id?: number
  status: string
}

export class PanelsController {
  async storePanel(req: Request, res: Response) {
    const { panel_name, panel_link, order, sector_id, category_id, subcategory_id, status } = req.body
    const { username } = req.user

    const panelExists = await panelRepository.findOneBy({ panel_name: Equal(panel_name) })

    if (panelExists) {
      throw new BadRequestError('Painel já cadastrado!')
    }

    const newPanel = panelRepository.create({
      panel_name: panel_name,
      panel_link: panel_link,
      order: order,
      sector_id: sector_id,
      category_id: category_id,
      subcategory_id: subcategory_id,
      status: status,
      created_by: username,
    })

    await panelRepository.save(newPanel)

    return res.status(201).json(newPanel)
  }

  async getOnePanel(req: Request, res: Response) {
    const id = Number(req.params.id)

    const panel = await panelRepository.findOneBy({ panel_id: id })

    return res.status(201).json(panel)
  }

  async getAllPanel(req: Request, res: Response) {
    const allPanels = await panelRepository.find()

    return res.status(201).json(allPanels)
  }

  async updatePanel(req: Request, res: Response) {
    const id = Number(req.params.id)
    const data = req.body

    const panel = await panelRepository.findOneBy({ panel_id: id })

    if (panel?.panel_name == data.panel_name) {
      return res.status(409).json('O mesmo nome não pode ser utilizado!')
    }
    if (panel?.panel_link == data.panel_link) {
      return res.status(409).json('O mesmo link não pode ser utilizado!')
    }

    const panelToChange = await panelRepository.update(id, data)

    if (panelToChange.affected == 0) {
      return res.status(400).json('Painel não encontrado!')
    }

    return res.status(201).json('Painel alterado com sucesso!')
  }

  async deletePanel(req: Request, res: Response) {
    const id = req.params.id

    const panelExists = await panelRepository.delete(id)

    if (panelExists.affected == 0) {
      return res.status(400).json('Painel não encontrado!')
    }

    return res.status(201).json('Painel excluído com sucesso!')
  }
}