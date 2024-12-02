import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const googleUser = await request.json();
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const filePath = path.join(jsonDirectory, 'db.json');
    
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    const existingUser = data.users.find(user => user.email === googleUser.email);
    
    if (!existingUser) {
      const newUser = {
        id: data.users.length + 1,
        email: googleUser.email,
        password: null, // No password for Google users
        role: 'User',
        name: googleUser.name
      };
      
      data.users.push(newUser);
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
      
      return Response.json(newUser);
    }
    
    const { password, ...userWithoutPassword } = existingUser;
    return Response.json(userWithoutPassword);
    
  } catch (error) {
    console.error('Google login error:', error);
    return Response.json(
      { error: 'Google authentication failed' },
      { status: 500 }
    );
  }
}