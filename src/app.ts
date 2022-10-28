import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import routeCars from './routes/routeCars';

const app = express();
app.use(express.json());
app.use('/cars', routeCars);
app.use(errorHandler);

export default app;
