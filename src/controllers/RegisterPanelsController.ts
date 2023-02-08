import { Request, Response } from "express"
import { BadRequestError } from "../helpers/api-error"
import { panelRepository } from "../repositories/panelRepository"

export class RegisterPanelsController {
  async getAllPanel(req: Request, res: Response) {
    const allPanels = await panelRepository.find()

    return res.status(201).json(allPanels)
  }

  async storePanel(req: Request, res: Response) {
    const { panelName, panelLink } = req.body
    const { name } = req.user
    
    const panelExists = await panelRepository.findOneBy({ panel_name: panelName })

    if (panelExists) {
      throw new BadRequestError('Painel já cadastrado!')
    }

    const newPanel = panelRepository.create({
      panel_name: panelName,
      panel_link: panelLink,
      created_by_user: name,
    })

    await panelRepository.save(newPanel)

    return res.status(201).json(newPanel)
  }

  async deletePanel(req: Request, res: Response) {
    const id = req.params.id
    panelRepository.delete(id)

    return res.status(201).json()

  }
}