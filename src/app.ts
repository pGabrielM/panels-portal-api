import 'express-async-errors'
import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes';
import { errorMiddleware } from './middlewares/error';

AppDataSource.initialize().then(() => {
  const app = express();
  const port = process.env.PORT;

  app.use(express.json());

  app.use(routes)

  app.use(errorMiddleware)
  return app.listen(port, () => console.log(`Server running at port http://localhost:${port}`))
}).catch((error) => {return console.log(`Database connection error ocurred:  ${error}`)})