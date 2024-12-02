"use client";
import React, { useState, useEffect } from 'react';
import Table from '../../../common/table';

const Trucks = () => {
  const [trucksData, setTrucksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const columns = ['id', 'plate_number', 'capacity', 'status'];

  useEffect(() => {
    const fetchTrucks = async () => {
      try {
        const response = await fetch('/api/trucks');
        if (!response.ok) {
          throw new Error('Failed to fetch trucks');
        }
        const data = await response.json();
        setTrucksData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrucks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="trucks-container">
      <h1>Trucks Management</h1>
      <Table columns={columns} data={trucksData} />
    </div>
  );
}

export default Trucks;