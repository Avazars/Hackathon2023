import express, { Request, Response, Router} from 'express';

const genEquipmentRouter: Router = express.Router();

genEquipmentRouter.get("/", (req: Request, res: Response) => {
    res.render("pages/GenEquipment", {pageTitle: "GenEquipment"});
})

export default genEquipmentRouter;