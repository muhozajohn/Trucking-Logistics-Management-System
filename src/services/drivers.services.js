import { promises as fs } from 'fs';
import path from 'path';

class DriversService {
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

  // Get all Driverss
  async getAllDrivers() {
    const data = await this.readDb();
    return data.drivers;
  }

  // Get a Drivers by ID
  async getDriversById(id) {
    const data = await this.readDb();
    const Drivers = data.drivers.find((t) => t.id === Number(id));
    if (!Drivers) {
      throw new Error('Drivers not found');
    }
    return Drivers;
  }


  // Create a new Drivers
  async createDrivers({ name, license_number, assigned_truck,contact_number }) {
    if (!name || !license_number || !assigned_truck || !contact_number) {
      throw new Error('Missing required fields');
    }

    const data = await this.readDb();
    const newDrivers = {
      id: data.drivers.length ? Math.max(...data.Driverss.map((t) => t.id)) + 1 : 1,
      name, license_number, assigned_truck,contact_number, 
    };
    data.Driverss.push(newDrivers);
    await this.writeDb(data);

    return newDrivers;
  }

  // Update a Drivers
  async updateDrivers({ id,name, license_number, assigned_truck,contact_number }) {
    if (!id || !name || !license_number || !assigned_truck || !contact_number) {
      throw new Error('Missing required fields');
    }

    const data = await this.readDb();
    const DriversIndex = data.drivers.findIndex((t) => t.id === Number(id));
    if (DriversIndex === -1) {
      throw new Error('Drivers not found');
    }

    const updatedDrivers = { id: Number(id), name, license_number, assigned_truck,contact_number };
    data.Driverss[DriversIndex] = updatedDrivers;
    await this.writeDb(data);

    return updatedDrivers;
  }

  // Delete a Drivers
  async deleteDrivers(id) {
    const data = await this.readDb();
    const DriversIndex = data.drivers.findIndex((t) => t.id === Number(id));
    if (DriversIndex === -1) {
      throw new Error('Drivers not found');
    }

    const [deletedDrivers] = data.drivers.splice(DriversIndex, 1);
    await this.writeDb(data);

    return deletedDrivers;
  }
}

export default new DriversService();
