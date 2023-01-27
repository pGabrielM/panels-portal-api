import { Request, Response } from "express"
import { BadRequestError } from "../helpers/api-error"
import { panelRepository } from "../repositories/panelRepository"

export class RegisterPanelsController {
  async storePanel(req: Request, res: Response) {
    const { name, link, user } = req.body

    const panelExists = await panelRepository.findOneBy({ name: name })

    if (panelExists) {
      throw new BadRequestError('Painel já cadastrado!')
    }

    const newPanel = panelRepository.create({
      name,
      link,
      user,
    })

    await panelRepository.save(newPanel)

    return res.status(201).json(newPanel)
  }
}