import express, { Request, Response, Router} from 'express';
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()



const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function start(prompt: string){
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: prompt}],
    });
    
    return completion.data.choices[0].message;
}


const AIRouter: Router = express.Router();

AIRouter.get('/', (req: Request, res: Response) => {
    res.render('pages/main', {pageTitle: "main"});
});

AIRouter.post('/', async (req: Request, res: Response) => {
    const { message } = req.body;
    const reply = await start(message);
    res.send({ message: reply })
})

export default AIRouter;