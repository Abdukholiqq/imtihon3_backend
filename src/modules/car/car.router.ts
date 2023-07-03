import { Router } from "express";
import carController from "./car.controller";

class carRouter {
  public router = Router();
  constructor() {
    this.Routers();
  }
  public Routers() {
    this.router.get("/cars", carController.getAllCars);
  }
}
export default carRouter;
