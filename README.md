# Trucking Logistics Management System

Welcome to the **Trucking Logistics Management System**! This repository contains a fully functional frontend application built using Next.js, designed to simulate interactions between truck owners, drivers, and customers. 

---

## **Features**
- **User Authentication**: Google OAuth 2.0 via NextAuth for secure login.
- **Dashboard**: Overview of trucks, drivers, and orders post-login.
- **Truck Management**: CRUD operations and status management for trucks.
- **Driver Management**: CRUD operations and truck assignment for drivers.
- **Order Management**: CRUD operations for orders, driver assignment, and truck status updates.
- **Responsive Design**: Mobile-friendly layout with SCSS styling.
- **API Integration**: React Query for seamless data fetching and manipulation.
- **Error Handling**: User-friendly error messages and validation.

---

## **Technologies Used**
- **Frontend**: Next.js (v14+), React Query, SCSS
- **Authentication**: NextAuth (Google OAuth 2.0)
- **Backend Simulation**: JSON Server
- **State Management**: React Context API
- **Testing** (Optional): Cypress (for unit and integration testing)

---

## **Setup Instructions**
### **1. Clone the Repository**
```bash
git clone https://github.com/muhozajohn/Trucking-Logistics-Management-System.git
cd Trucking-Logistics-Management-System
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Set Up Environment Variables**
Create a `.env.local` file and add the following:
```env
NEXT_PUBLIC_GOOGLE_CLIENT_ID=<your-google-client-id>
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=<your-google-client-secret>
NEXTAUTH_URL=http://localhost:3000
```

### **4. Start JSON Server**
Set up `db.json` with the required data:
```json
{
  "trucks": [],
  "drivers": [],
  "orders": []
}
```
Run JSON Server:
```bash
npx json-server --watch db.json --port 5000
```

### **5. Start the Development Server**
```bash
npm run dev
```
The app will be accessible at `http://localhost:3000`.

---

## **Scripts**
- `npm run dev`: Start the development server.
- `npm run build`: Build the production version.
- `npm run start`: Start the production server.
- `npm run lint`: Lint the codebase.

---

## **Folder Structure**
- **/components**: Reusable UI components.
- **/app**: Next.js pages and routing.
- **/styles**: SCSS stylesheets.
- **/services**: API service functions.
- **/context**: State management using Context API.

---

## **Contributing**
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m 'Add feature-name'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a Pull Request.

---
