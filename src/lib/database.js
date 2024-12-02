import fs from 'fs';
import path from 'path';

// Consistent path to database file
const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

// Read database safely
export const readDatabase = () => {
  try {
    const fileContents = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading database:', error);
    return null;
  }
};

// Write database safely
export const writeDatabase = (data) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing database:', error);
    return false;
  }
};

// Generate unique ID for a resource
export const generateUniqueId = (resource) => {
  const db = readDatabase();
  if (!db || !db[resource]) return 1;
  
  return db[resource].length > 0 
    ? Math.max(...db[resource].map(item => item.id)) + 1 
    : 1;
};

// Find item by ID in a specific resource
export const findItemById = (resource, id) => {
  const db = readDatabase();
  return db?.[resource]?.find(item => item.id === parseInt(id));
};

// Find item index by ID in a specific resource
export const findItemIndexById = (resource, id) => {
  const db = readDatabase();
  return db?.[resource]?.findIndex(item => item.id === parseInt(id));
};