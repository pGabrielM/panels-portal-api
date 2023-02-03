import { Request, Response } from "express"
import { BadRequestError } from "../helpers/api-error"
import { panelRepository } from "../repositories/panelRepository"
import { LoginController } from "./LoginController"

export class RegisterPanelsController {
  async storePanel(req: Request, res: Response) {
    const { panel_name, panel_link } = req.body
    const { name } = req.user
    
    const panelExists = await panelRepository.findOneBy({ panel_name: panel_name })

    if (panelExists) {
      throw new BadRequestError('Painel já cadastrado!')
    }

    const newPanel = panelRepository.create({
      panel_name,
      panel_link,
      created_by_user: name,
    })

    await panelRepository.save(newPanel)

    return res.status(201).json(newPanel)
  }
}