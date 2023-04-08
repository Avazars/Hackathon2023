import express, { Request, Response, Router} from 'express';

const genDungeonRouter: Router = express.Router();

genDungeonRouter.get("/", (req: Request, res: Response) => {
    res.render("pages/GenDungeon", {pageTitle: "Dungeon"});
})

export default genDungeonRouter;