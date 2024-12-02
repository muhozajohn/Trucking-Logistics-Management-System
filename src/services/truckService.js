import { promises as fs } from 'fs';
import path from 'path';

class TruckService {
  constructor() {
    this.dbPath = path.join(process.cwd(), 'src/data', 'db.json');
  }

  // Utility to read data from db.json
  async readDb() {
    const fileContents = await fs.readFile(this.dbPath, 'utf8');
    return JSON.parse(fileContents);
  }

  // Utility to write data to db.json
  async writeDb(data) {
    await fs.writeFile(this.dbPath, JSON.stringify(data, null, 2));
  }

  // Get all trucks
  async getAllTrucks() {
    const data = await this.readDb();
    return data.trucks;
  }

  // Get a truck by ID
  async getTruckById(id) {
    const data = await this.readDb();
    const truck = data.trucks.find((t) => t.id === Number(id));
    if (!truck) {
      throw new Error('Truck not found');
    }
    return truck;
  }

  // Create a new truck
  async createTruck({ plate_number, capacity, status }) {
    if (!plate_number || !capacity || !status) {
      throw new Error('Missing required fields');
    }

    const data = await this.readDb();
    const newTruck = {
      id: data.trucks.length ? Math.max(...data.trucks.map((t) => t.id)) + 1 : 1,
      plate_number,
      capacity,
      status,
    };
    data.trucks.push(newTruck);
    await this.writeDb(data);

    return newTruck;
  }

  // Update a truck
  async updateTruck({ id, plate_number, capacity, status }) {
    if (!id || !plate_number || !capacity || !status) {
      throw new Error('Missing required fields');
    }

    const data = await this.readDb();
    const truckIndex = data.trucks.findIndex((t) => t.id === Number(id));
    if (truckIndex === -1) {
      throw new Error('Truck not found');
    }

    const updatedTruck = { id: Number(id), plate_number, capacity, status };
    data.trucks[truckIndex] = updatedTruck;
    await this.writeDb(data);

    return updatedTruck;
  }

  // Delete a truck
  async deleteTruck(id) {
    const data = await this.readDb();
    const truckIndex = data.trucks.findIndex((t) => t.id === Number(id));
    if (truckIndex === -1) {
      throw new Error('Truck not found');
    }

    const [deletedTruck] = data.trucks.splice(truckIndex, 1);
    await this.writeDb(data);

    return deletedTruck;
  }
}

export default new TruckService();
