import { Router } from "express";
import { LoginController } from "./controllers/LoginController";
import { PanelsController } from "./controllers/PanelsController";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middlewares/authMiddleware";

const routes = Router();

routes.post('/login', new LoginController().login)

routes.use(authMiddleware)

routes.get('/profile', new LoginController().getProfile)
routes.post('/user', new UserController().create)
routes.get('/panel', new PanelsController().getAllPanel)
routes.get('/panel/:id', new PanelsController().getOnePanel)
routes.post('/panel', new PanelsController().storePanel)
routes.delete('/panel/:id', new PanelsController().deletePanel)
routes.patch('/panel/:id', new PanelsController().updatePanel)
routes.get('/logout', new LoginController().logout)

export default routes