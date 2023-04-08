import express from 'express';
import loginRouter from './routes/login'
import mainMenuRouter from './routes/mainmenu';
import mainRouter from './routes/main'
import AIRouter from "./routes/AIRouter";

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.use(express.json());


app.use('/', loginRouter);
app.use('/main', mainMenuRouter);

app.use('/main', mainRouter);
app.use('/ai',  AIRouter);

app.listen(port, () => console.log(`Express app running on port ${port}!`));