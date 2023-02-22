import { AppDataSource } from "../data-source";
import { PanelSubCategory } from "../entities/PanelSubCategory";

export const panelSubCategoryRepository = AppDataSource.getRepository(PanelSubCategory)