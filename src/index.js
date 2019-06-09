import Path from 'path';
import Express from 'express';
import cors from 'cors';
import BodyParser from 'body-parser';
import errorHandler from './middlewares/errorHandler';
import mongoDB from './apis/mongodb';
import yandexDiskApi from './apis/yandex-disk';
import connectApi from './api';

const { PORT, YANDEX_DISK_API_TOKEN } = process.env;

mongoDB();
yandexDiskApi(YANDEX_DISK_API_TOKEN);

const app = Express();

app.use(Express.static(Path.resolve('./static')));

app.use(BodyParser.json());
app.use(BodyParser.raw({ type: 'audio/mpeg', limit: '10mb' }));

app.use(cors());

app.use(errorHandler());

app.get('/', (req, res) => {
  res.sendFile(Path.resolve('./html/index.html'));
});

connectApi(app);

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT || 8080);
