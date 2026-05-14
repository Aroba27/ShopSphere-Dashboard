import React from "react";
import { Download, Plus } from "lucide-react";
import { users } from "../data/users";
import UserRow from "../components/UserRow";
import { ExportButton } from "../components/ExportButton";

const Users = () => {
  const headings = ["User", "Date Joined", "Orders", "Toatl Spent", "Action"];
  const userColumns = [
    {
      header: "Name",
      accessor: (u) => u.name,
    },
    {
      header: "Email",
      accessor: (u) => u.email,
    },
    {
      header: "Date Joined",
      accessor: (u) => u.joinedDate,
    },
    {
      header: "Orders",
      accessor: (u) => u.orders,
    },
    {
      header: "Total Spent",
      accessor: (u) => u.totalSpent,
    },
    {
      header: "Status",
      accessor: (u) => u.status,
    },
  ];
  return (
    <div className="bg-gray-50 p-6 rounded-xl ml-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Users</h2>
          <p className="text-sm text-gray-500">Manage your customers</p>
        </div>

        <div className="flex items-center gap-3">
          <ExportButton
            data={users}
            columns={userColumns}
            filename="users.csv"
          />

          {/* <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-sm">
            <Plus size={16} />
            Add User
          </button> */}
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr] bg-blue-50 text-blue-700 px-6 py-4 text-sm tracking-wider font-semibold">
          {headings.map((h) => (
            <h3 key={h}>{h}</h3>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
