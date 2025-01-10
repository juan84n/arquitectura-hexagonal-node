import express, { Express } from 'express';
import dotenv from 'dotenv';
import { appRouter } from './decorators/routing';

const app: Express = express();
const PORT = (process.env.PORT) != null ? process.env.PORT : 3002;

dotenv.config();
app.use(appRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
