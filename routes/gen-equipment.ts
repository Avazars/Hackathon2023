import express, { Request, Response, Router} from 'express';

const genEquipmentRouter: Router = express.Router();

genEquipmentRouter.get("/", (req: Request, res: Response) => {
    res.render("pages/GenEquipment", {pageTitle: "Equipment"});
})

export default genEquipmentRouter;