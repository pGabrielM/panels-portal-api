import { AppDataSource } from "../data-source";
import { PanelsLinks } from "../entities/PanelsLinks";

export const panelRepository = AppDataSource.getRepository(PanelsLinks)