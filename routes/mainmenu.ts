import express, { Request, Response, Router} from 'express';

const mainMenuRouter: Router = express.Router();

mainMenuRouter.get("/", (req: Request, res: Response) => {
    res.render("pages/MainMenu", {pageTitle: "MainMenu"});
})

export default mainMenuRouter;