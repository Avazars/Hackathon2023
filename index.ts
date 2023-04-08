import express from 'express';
import mainRouter from './routes/main'
import AIRouter from "./routes/AIRouter";

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.use(express.json());


app.use('/', mainRouter);
app.use('/ai',  AIRouter);

app.listen(port, () => console.log(`Express app running on port ${port}!`));