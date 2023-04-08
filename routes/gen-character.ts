import express, { Request, Response, Router} from 'express';

const genAdventurerRouter: Router = express.Router();

genAdventurerRouter.get("/", (req: Request, res: Response) => {
    res.render("pages/GenCharacter", {pageTitle: "Character"});
})

export default genAdventurerRouter;