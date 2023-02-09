import { AppDataSource } from "../data-source";
import { Panel } from "../entities/Panels";

export const panelRepository = AppDataSource.getRepository(Panel)