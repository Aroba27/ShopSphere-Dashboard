import React from "react";

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
];

const getStatusStyle = (status) => {
  if (status === "Completed") return "bg-green-100 text-green-600";
  if (status === "Pending") return "bg-yellow-100 text-yellow-600";
  return "bg-red-100 text-red-600";
};

const OrdersTable = () => {
  return (
    <div className="mt-8 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
      

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Orders
        </h2>
        <button className="text-sm text-indigo-600 font-medium hover:underline">
          View All
        </button>
      </div>


      <table className="w-full text-left">
        
      
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="pb-3">Order ID</th>
            <th className="pb-3">Customer</th>
            <th className="pb-3">Date</th>
            <th className="pb-3">Amount</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

    
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="py-3 font-medium text-gray-800">
                {order.id}
              </td>
              <td className="py-3 text-gray-600">
                {order.customer}
              </td>
              <td className="py-3 text-gray-600">
                {order.date}
              </td>
              <td className="py-3 text-gray-800 font-medium">
                {order.amount}
              </td>
              <td className="py-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default OrdersTable;