import express, { Request, Response, Router} from 'express';

const mainRouter: Router = express.Router();

mainRouter.get('/', (req: Request, res: Response) => {
    res.render('pages/main', {pageTitle: "main"});
});

mainRouter.get('/main', (req: Request, res: Response) => {
    
})

export default mainRouter;