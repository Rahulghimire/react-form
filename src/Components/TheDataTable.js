import React from "react";
import DataTable from "react-data-table-component";
const TheDataTable = ({ persons }) => {
  const columns = [
    {
      name: "Full Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "E-mail",
      selector: "email",
      sortable: true,
    },
    {
      name: "PhoneNumber",
      selector: "phoneNumber",
      sortable: true,
    },
    {
      name: "Country",
      selector: "address.country",
      sortable: true,
    },
    {
      name: "State",
      selector: "address.state",
      sortable: true,
    },
    {
      name: "city",
      selector: "address.city",
      sortable: true,
    },
  ];
  return (
    <div>
      <DataTable columns={columns} data={persons} />
    </div>
  );
};

export default TheDataTable;
