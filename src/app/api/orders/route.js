import OrdersService from "../../../services/orders.services";

// Create a new orders
export async function POST(request) {
  try {
    const ordersData = await request.json();
    const neworders = await OrdersService.createOrders(ordersData);
    return Response.json(neworders, { status: 201 });
  } catch (error) {
    console.error('Error creating orders:', error);
    return Response.json({ error: error.message }, { status: 400 });
  }
}

// Get all orders
export async function GET() {
  try {
    const orders = await OrdersService.getAllOrders();
    return Response.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return Response.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}

// Update a orders
export async function PUT(request) {
  try {
    const ordersData = await request.json();
    const updatedorders = await OrdersService.updateOrders(ordersData);
    return Response.json(updatedorders);
  } catch (error) {
    console.error('Error updating orders:', error);
    return Response.json({ error: error.message }, { status: 400 });
  }
}

// Delete a orders
export async function DELETE(request) {
  try {
    const { id } = request.params;
    const deletedorders = await OrdersService.deleteOrders(id);
    return Response.json(deletedorders, { status: 200 });
  } catch (error) {
    console.error('Error deleting orders:', error);
    return Response.json({ error: error.message }, { status: 404 });
  }
}
