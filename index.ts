import express from 'express';
import mainRouter from './routes/main'

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

app.use('/', mainRouter);

app.listen(port, () => console.log(`Express app running on port ${port}!`));