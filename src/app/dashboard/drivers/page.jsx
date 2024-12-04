"use client";
import React, { useState, useEffect } from "react";
import Table from "../../../common/table";

const Drivers = () => {
  const [DriversData, setDriversData] = useState([]);
  console.log(DriversData)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const columns = [
    "id",
    "name",
    "license_number",
    "assigned_truck",
    "contact_number",
  ];

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await fetch("/api/drivers");
        if (!response.ok) {
          throw new Error("Failed to fetch Drivers");
        }
        const data = await response.json();
        setDriversData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="Drivers-container">
      <h1>Drivers Management</h1>
      <Table columns={columns} data={DriversData} />
    </div>
  );
};

export default Drivers;
