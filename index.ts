import express from 'express';
import loginRouter from './routes/login'
import mainMenuRouter from './routes/mainmenu';

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function start(){
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "Hello world"}],
    });

    console.log(completion.data.choices[0].message);
}

// start();

app.use('/', loginRouter);
app.use('/main', mainMenuRouter);

app.listen(port, () => console.log(`Express app running on port ${port}!`));