import express from 'express';
import path from 'path';
import userApiRouter from './src/routes/userApiRouter.js';
import dbConnect from './src/config/db.js';
import hbs from 'hbs';
import * as dotenv from 'dotenv';

dbConnect();
dotenv.config();
const app = express();

const { PORT } = process.env;

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'src', 'views'));
hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'));

app.get('/', (req, res) => {
  res.render('index');
});

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ exdended: true }));
app.use('/api/v1', userApiRouter);

app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}`);
});
