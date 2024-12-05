import React from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import Trucks from "./trucks/page";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div>
       <Trucks />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
