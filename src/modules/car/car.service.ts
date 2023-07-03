import db from "../../database/pg";

class carService {
  async getCars() {
    const cars = await db.fetchAll(`SELECT * FROM cars`);
    return cars;
  }
}

export default new carService();
