import { Request, Response, NextFunction } from "express";
import carService from "./car.service";

class carController {
  async getAllCars(req: Request, res: Response): Promise<void> {
    const cars = await carService.getCars();
    res.send(cars);
  }
}
export default new carController();
