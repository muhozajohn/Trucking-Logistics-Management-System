import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Get the path to db.json
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    // Read the json data file
    const fileContents = await fs.readFile(jsonDirectory + '/db.json', 'utf8');
    // Parse the JSON data
    const data = JSON.parse(fileContents);

    // Find user with matching credentials
    const user = data.users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Don't send password back to client
      const { password, ...userWithoutPassword } = user;
      return Response.json(userWithoutPassword);
    }

    return Response.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return Response.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Get the path to db.json
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    // Read the json data file
    const fileContents = await fs.readFile(jsonDirectory + '/db.json', 'utf8');
    // Parse the JSON data
    const data = JSON.parse(fileContents);
    
    // Return only the users array
    return Response.json(data.users);
  } catch (error) {
    return Response.json(
      { error: 'Failed to load users' },
      { status: 500 }
    );
  }
}