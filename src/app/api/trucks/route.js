// import TruckService from "@/services/truckService";
import TruckService from "../../../services/truckService";

// Create a new truck
export async function POST(request) {
  try {
    const truckData = await request.json();
    const newTruck = await TruckService.createTruck(truckData);
    return Response.json(newTruck, { status: 201 });
  } catch (error) {
    console.error('Error creating truck:', error);
    return Response.json({ error: error.message }, { status: 400 });
  }
}

// Get all trucks
export async function GET() {
  try {
    const trucks = await TruckService.getAllTrucks();
    return Response.json(trucks);
  } catch (error) {
    console.error('Error fetching trucks:', error);
    return Response.json({ error: 'Failed to fetch trucks' }, { status: 500 });
  }
}

// // Get a single truck by ID
// export async function GET_BY_ID(request) {
//   try {
//     const { id } = request.params;
//     const truck = await TruckService.getTruckById(id);
//     return Response.json(truck);
//   } catch (error) {
//     console.error('Error fetching truck:', error);
//     return Response.json({ error: error.message }, { status: 404 });
//   }
// }

// Update a truck
export async function PUT(request) {
  try {
    const truckData = await request.json();
    const updatedTruck = await TruckService.updateTruck(truckData);
    return Response.json(updatedTruck);
  } catch (error) {
    console.error('Error updating truck:', error);
    return Response.json({ error: error.message }, { status: 400 });
  }
}

// Delete a truck
export async function DELETE(request) {
  try {
    const { id } = request.params;
    const deletedTruck = await TruckService.deleteTruck(id);
    return Response.json(deletedTruck, { status: 200 });
  } catch (error) {
    console.error('Error deleting truck:', error);
    return Response.json({ error: error.message }, { status: 404 });
  }
}
