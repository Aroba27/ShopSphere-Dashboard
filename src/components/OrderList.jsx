import React, { useEffect, useState } from "react";
import OrderModal from "./OrderModal";

const OrderList = ({onDataLoaded, orders, setOrders }) => {
 
  const [formData, setFormData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headings = ["Orders", "Items", "Quantity", "Price", "Action"];
  useEffect(() => {
  fetch("https://dummyjson.com/carts")
    .then((res) => res.json())
    .then((data) => {
      setOrders(data.carts);
      onDataLoaded(data.carts);
    });
}, [onDataLoaded, setOrders]);

  const handleEdit = (order) => {
    setFormData({ ...order });
    setIsModalOpen(true);
  };
  const handleSave = () => {
    const updatedOrders = orders.map((item) =>
      item.id === formData.id ? formData : item,
    );

    setOrders(updatedOrders);
    setIsModalOpen(false);
  };
  const handleDelete = (id) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  if (!orders.length) {
    return (
      <div className="flex items-center justify-center h-75">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

          <p className="text-sm text-gray-500">Loading Orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] bg-blue-50 text-blue-700 px-6 py-4 text-sm tracking-wider font-semibold">
          {headings.map((h) => (
            <p key={h}>{h}</p>
          ))}
        </div>
        {orders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center px-6 py-4 border-t border-gray-300 hover:bg-blue-100 transition duration-200"
          >
            <div>
              <p className="text-xs text-blue-500 font-medium">
                Order #{order.id}
              </p>
              <p className="font-medium text-gray-800">
                {order.products[0]?.title}
                {order.products.length > 1 && (
                  <span className="text-blue-400 text-sm ml-1">
                    + {order.products.length - 1} more
                  </span>
                )}
              </p>
            </div>

            <p className=" text-gray-800">{order.totalProducts}</p>

            <p className="text-gray-500">{order.totalQuantity || "N/A"}</p>

            <p className=" text-gray-900">${order.total}</p>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(order)}
                className="px-3 py-1 text-sm rounded-md bg-blue-200 text-blue-700 hover:bg-blue-300 hover:text-blue-700 transition-all duration-75"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  if (window.confirm("Delete this order?")) {
                    handleDelete(order.id);
                  }
                }}
                className="px-3 py-1 text-sm bg-red-200 text-red-600 rounded-md hover:bg-red-300 hover:text-red-700 transition-all duration-75"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        onSave={handleSave}
      />
    </div>
  );
};

export default OrderList;
