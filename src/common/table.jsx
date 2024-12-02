"use client";
import React from "react";
import "./Table.scss";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Table = ({ columns, data, onEdit, onDelete }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
          {/* Add a column header for actions */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column]}</td>
            ))}
            <td className="actions">
              <button
                className="btn-edit"
                onClick={() => onEdit(row, rowIndex)}
              >
                <FaEdit />
              </button>
              <button
                className="btn-delete"
                onClick={() => onDelete(row, rowIndex)}
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
