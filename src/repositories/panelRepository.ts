import { AppDataSource } from "../data-source";
import { Panel } from "../entities/Panel";

export const panelRepository = AppDataSource.getRepository(Panel)