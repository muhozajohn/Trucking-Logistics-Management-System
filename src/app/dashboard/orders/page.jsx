"use client";
import React, { useState, useEffect } from "react";
import Table from "../../../common/table";
import "./order.scss";

const Orders = () => {
  const [OrdersData, setOrdersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const columns = [
    "id",
    "customer_name",
    "assigned_truck",
    "assigned_driver",
    "order_status",
    "pickup_location",
    "pickup_location",
    "delivery_location",
    "cargo_type",
    "estimated_delivery_date",
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders");
        if (!response.ok) {
          throw new Error("Failed to fetch Orders");
        }
        const data = await response.json();
        setOrdersData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="Orders-container">
      <h1>Orders Management</h1>
      <div className="Orders-container__table-wrapper">
        <Table columns={columns} data={OrdersData} />
      </div>
    </div>
  );
};

export default Orders;
