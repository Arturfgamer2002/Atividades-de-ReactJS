import React from "react";
import "./index.css";
import TableItem from "../TableIntem"; 

// Insira a prop list
const TableArea = ({ list }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="tableHeadColumn">Data</th>
          <th className="tableHeadColumn">Categoria</th>
          <th className="tableHeadColumn">Título</th> 
          <th className="tableHeadColumn">Valor</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default TableArea;
