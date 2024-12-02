import React from "react";
import ProtectedRoute from "../../components/ProtectedRoute";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, officia
        porro, amet nobis eveniet delectus voluptatibus maxime ab quas ea
        architecto dignissimos ut vero explicabo totam ad, laboriosam corporis
        dolorem.
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
