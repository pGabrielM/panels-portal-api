import { Request, Response } from "express"
import { Equal } from "typeorm"
import { BadRequestError } from "../helpers/api-error"
import { panelCategoryRepository } from "../repositories/panelCategoryRepository"
import { panelSectorRepository } from "../repositories/panelSectorRepository"
import { panelSubCategoryRepository } from "../repositories/panelSubCategoryRepository"

export interface CreateCategoryProps {
  category_name: string
  category_order: number
  category_type: string
  category_status: string
  sector_id: number
  category_id: number
}

export class CategoryController {
  async storeRamification(req: Request, res: Response) {
    const { category_name, category_order, category_type, category_status, category_id, sector_id }: CreateCategoryProps = req.body

    if (category_type == 'sector') {
      const sectorExists = await panelSectorRepository.findOneBy({ sector_name: Equal(category_name) })

      if (sectorExists) {
        throw new BadRequestError('Setor já cadastrado!')
      }

      const newSector = panelSectorRepository.create({
        sector_name: category_name,
        order: category_order,
        status: category_status
      })

      await panelSectorRepository.save(newSector)

      return res.status(201).json(newSector)
    }

    if (category_type == 'category') {
      const categoryExists = await panelCategoryRepository.findOneBy({ category_name: Equal(category_name) })

      if (categoryExists) {
        throw new BadRequestError('Categoria já cadastrada!')
      }

      const newCategory = panelCategoryRepository.create({
        category_name: category_name,
        order: category_order,
        sector_id: sector_id,
        status: category_status
      })

      await panelCategoryRepository.save(newCategory)

      return res.status(201).json(newCategory)
    }

    if (category_type == 'subcategory') {
      const subCategoryExists = await panelSubCategoryRepository.findOneBy({ subcategory_name: Equal(category_name) })

      if (subCategoryExists) {
        throw new BadRequestError('Subcategoria já cadastrada!')
      }

      const newSubCategory = panelSubCategoryRepository.create({
        subcategory_name: category_name,
        order: category_order,
        category_id: category_id,
        status: category_status
      })

      await panelSubCategoryRepository.save(newSubCategory)

      return res.status(201).json(newSubCategory)
    }
  }

  async getAllSector(req: Request, res: Response) {
    const allSectors = await panelSectorRepository.find()

    return res.status(201).json(allSectors)
  }

  async getAllCategory(req: Request, res: Response) {
    const allCategories = await panelCategoryRepository.find()

    return res.status(201).json(allCategories)
  }
}