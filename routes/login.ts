import express, { Request, Response, Router} from 'express';

const loginRouter: Router = express.Router();

var http = express();

loginRouter.get('/', (req: Request, res: Response) => {
    res.render('pages/LoginPage', {pageTitle: "Login"});
});

export default loginRouter;