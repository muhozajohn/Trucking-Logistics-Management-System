import { promises as fs } from 'fs';
import path from 'path';

class OrdersService {
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

  // Get all Orderss
  async getAllOrders() {
    const data = await this.readDb();
    return data.orders;
  }

  // Get a Orders by ID
  async getOrdersById(id) {
    const data = await this.readDb();
    const Orders = data.Orders.find((t) => t.id === Number(id));
    if (!Orders) {
      throw new Error('Orders not found');
    }
    return Orders;
  }

  // Create a new Orders
  async createOrders({ customer_name, assigned_truck, assigned_driver,order_status,pickup_location,delivery_location,cargo_type,estimated_delivery_date }) {
    if (!customer_name || !assigned_truck || !assigned_driver,order_status || !pickup_location || !delivery_location || !cargo_type || !estimated_delivery_date) {
      throw new Error('Missing required fields');
    }

    const data = await this.readDb();
    const newOrders = {
      id: data.Orders.length ? Math.max(...data.Orderss.map((t) => t.id)) + 1 : 1,
      customer_name, assigned_truck, assigned_driver,order_status,pickup_location,delivery_location,cargo_type,estimated_delivery_date, 
    };
    data.Orderss.push(newOrders);
    await this.writeDb(data);

    return newOrders;
  }

  // Update a Orders
  async updateOrders({ id,customer_name, assigned_truck, assigned_driver,order_status,pickup_location,delivery_location,cargo_type,estimated_delivery_date  }) {
    if (!id || !customer_name || !assigned_truck || !assigned_driver,order_status || !pickup_location || !delivery_location || !cargo_type || !estimated_delivery_date) {
      throw new Error('Missing required fields');
    }

    const data = await this.readDb();
    const OrdersIndex = data.Orders.findIndex((t) => t.id === Number(id));
    if (OrdersIndex === -1) {
      throw new Error('Orders not found');
    }

    const updatedOrders = { id: Number(id), customer_name, assigned_truck, assigned_driver,order_status,pickup_location,delivery_location,cargo_type,estimated_delivery_date };
    data.Orderss[OrdersIndex] = updatedOrders;
    await this.writeDb(data);

    return updatedOrders;
  }

  // Delete a Orders
  async deleteOrders(id) {
    const data = await this.readDb();
    const OrdersIndex = data.Orders.findIndex((t) => t.id === Number(id));
    if (OrdersIndex === -1) {
      throw new Error('Orders not found');
    }

    const [deletedOrders] = data.Orders.splice(OrdersIndex, 1);
    await this.writeDb(data);

    return deletedOrders;
  }
}

export default new OrdersService();
