import express, { Request, Response, Router} from 'express';
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const AIRouter: Router = express.Router();

async function generateText(prompt: string){
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: prompt}],
    });
    
    return completion.data.choices[0].message;
}

AIRouter.post('/aiText', async (req: Request, res: Response) => {
    const { message } = req.body;
    const reply = await generateText(message);
    console.log("Text Gen")
    res.send({ message: reply })
})

export default AIRouter;