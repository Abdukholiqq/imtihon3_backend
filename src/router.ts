import { Router } from "express";
import CarRouter from "./modules/car/car.router";
import carRouter from "./modules/car/car.router";

const router = Router();
const carRouters = new carRouter();
router.use("/", carRouters.router);
export default router;
