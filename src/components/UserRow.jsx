import React from "react";

const UserRow = ({ user }) => {
  const getStatusStyle = () => {
    switch (user.status) {
      case "Active":
        return "bg-green-100 text-green-600";
      case "Blocked":
        return "bg-red-100 text-red-600";
      case "Inactive":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr] items-center px-6 py-4 border-b border-gray-200 hover:bg-gray-50 transition">
      <div className="flex items-center gap-3">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-9 h-9 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">
            {user.name}
          </p>
          <p className="text-xs text-gray-500">
            {user.email}
          </p>
        </div>
      </div>

     
      <p className="text-sm text-gray-600 truncate">
        {user.joinedDate}
      </p>

      <p className="text-sm font-medium text-gray-700">
        {user.orders}
      </p>

      <p className="text-sm font-semibold text-gray-800">
        Rs. {user.totalSpent.toLocaleString()}
      </p>

      <span
        className={`text-xs px-3 py-1 rounded-full font-medium w-fit ${getStatusStyle()}`}
      >
        {user.status}
      </span>
    </div>
  );
};

export default UserRow;