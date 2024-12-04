import DriversService from "../../../services/drivers.services";

// Create a new drivers
export async function POST(request) {
  try {
    const driversData = await request.json();
    const newdrivers = await DriversService.createDrivers(driversData);
    return Response.json(newdrivers, { status: 201 });
  } catch (error) {
    console.error('Error creating drivers:', error);
    return Response.json({ error: error.message }, { status: 400 });
  }
}

// Get all drivers
export async function GET() {
  try {
    const drivers = await DriversService.getAllDrivers();
    return Response.json(drivers);
  } catch (error) {
    console.error('Error fetching drivers:', error);
    return Response.json({ error: 'Failed to fetch drivers' }, { status: 500 });
  }
}

// Update a drivers
export async function PUT(request) {
  try {
    const driversData = await request.json();
    const updateddrivers = await DriversService.updateDrivers(driversData);
    return Response.json(updateddrivers);
  } catch (error) {
    console.error('Error updating drivers:', error);
    return Response.json({ error: error.message }, { status: 400 });
  }
}

// Delete a drivers
export async function DELETE(request) {
  try {
    const { id } = request.params;
    const deleteddrivers = await DriversService.deleteDrivers(id);
    return Response.json(deleteddrivers, { status: 200 });
  } catch (error) {
    console.error('Error deleting drivers:', error);
    return Response.json({ error: error.message }, { status: 404 });
  }
}


