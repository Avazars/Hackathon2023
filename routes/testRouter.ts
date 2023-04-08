import express, { Request, Response, Router} from 'express';

const testRouter: Router = express.Router();

testRouter.get('/', (req: Request, res: Response) => {
    res.render('pages/test', {pageTitle: "test"});
});

export default testRouter;