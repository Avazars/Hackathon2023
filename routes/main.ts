import express, { Request, Response, Router} from 'express';

const mainRouter: Router = express.Router();

mainRouter.get('/', (req: Request, res: Response) => {
    res.render('pages/main', {pageTitle: "main"});
});

export default mainRouter;