import express, { Request, Response, Router} from 'express';

const genMonsterRouter: Router = express.Router();

genMonsterRouter.get("/", (req: Request, res: Response) => {
    res.render("pages/GenMonster", {pageTitle: "GenMonster"});
})

export default genMonsterRouter;