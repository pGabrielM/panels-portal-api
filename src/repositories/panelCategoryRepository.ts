import { AppDataSource } from "../data-source";
import { PanelCategory } from "../entities/PanelCategory";

export const panelCategoryRepository = AppDataSource.getRepository(PanelCategory)