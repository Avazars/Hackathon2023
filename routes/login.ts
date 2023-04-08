import express, { Request, Response, Router} from 'express';

const loginRouter: Router = express.Router();

var http = express();

loginRouter.get('/', (req: Request, res: Response) => {
    res.render('pages/LoginPage', {pageTitle: "Login"});
});

http.get('*',function(req,res){  
    res.redirect('http://exmple.com'+req.url)
})

export default loginRouter;