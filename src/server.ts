import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import uploadConfig from './config/upload';
import './db';

const app = express();
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(cors());
app.use(routes);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3333');
});
