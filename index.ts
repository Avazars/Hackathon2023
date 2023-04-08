import express from 'express';
import genMonsterRouter from './routes/gen-monster';
import genEquipmentRouter from './routes/gen-equipment';
import genDungeonRouter from './routes/gen-dungeon';
import genAdventurerRouter from './routes/gen-adventurer';
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
app.use('/monster', genMonsterRouter);
app.use('/equipment', genEquipmentRouter);
app.use('/dungeon', genDungeonRouter);
app.use('/adventurer', genAdventurerRouter);


app.use('/main', mainRouter);
app.use('/ai',  AIRouter);

app.listen(port, () => console.log(`Express app running on port ${port}!`));