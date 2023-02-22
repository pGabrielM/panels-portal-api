import { AppDataSource } from "../data-source";
import { PanelSector } from "../entities/PanelSector";

export const panelSectorRepository = AppDataSource.getRepository(PanelSector)