import React from "react";

const Orders = () => {
  const headings = ["Customer", "Date", "Price", "Status", "Id"];

  const orders = [
    {
      id: "#1024",
      customer: "Aroba",
      date: "14 Apr 2026",
      amount: "$120",
      status: "Completed",
    },
    {
      id: "#1025",
      customer: "Ali",
      date: "13 Apr 2026",
      amount: "$80",
      status: "Pending",
    },
    {
      id: "#1026",
      customer: "Sara",
      date: "12 Apr 2026",
      amount: "$200",
      status: "Cancelled",
    },
    {
      id: "#1027",
      customer: "Alyan",
      date: "25 Apr 2026",
      amount: "$580",
      status: "Completed",
    },
    {
      id: "#1028",
      customer: "Sanam",
      date: "18 Mar 2026",
      amount: "$290",
      status: "Pending",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-600";
      case "Pending":
        return "bg-yellow-50 text-yellow-600";
      case "Cancelled":
        return "bg-red-50 text-red-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mt-6">

     
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Orders
        </h2>
        <p className="text-sm text-gray-500">
          Latest customer transactions overview
        </p>
      </div>

  
      <div className="grid grid-cols-5 text-xs font-semibold text-blue-600 bg-blue-50 px-4 py-3 rounded-lg">
        {headings.map((h) => (
          <span key={h}>{h}</span>
        ))}
      </div>

     
      <div className="mt-2 flex flex-col">
        {orders.map((ord) => (
          <div
            key={ord.id}
            className="grid grid-cols-5 items-center px-4 py-3 border-b border-gray-100 hover:bg-blue-100 transition duration-200"
          >
            <p className="font-medium text-gray-900">{ord.customer}</p>

            <p className="text-sm text-gray-500">{ord.date}</p>

            <p className="font-semibold text-gray-900">{ord.amount}</p>

            <span
              className={`text-xs px-2 py-1 rounded-md w-fit font-medium ${getStatusStyle(
                ord.status
              )}`}
            >
              {ord.status}
            </span>

            <p className="text-sm text-gray-500">{ord.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;