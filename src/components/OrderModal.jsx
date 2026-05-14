import React from "react";

const OrderModal = ({ isOpen, onClose, formData, setFormData, onSave }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-105 p-6 rounded-2xl shadow-lg border border-blue-100">
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-gray-800">Edit Order</h2>
          <p className="text-sm text-gray-500">Update order details</p>
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-500 block mb-1">Order ID</label>
          <input
            type="text"
            value={formData.id || ""}
            disabled
            className="w-full border border-gray-200 bg-gray-100 p-2 rounded-md text-gray-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600 block mb-1">
            Total Quantity
          </label>
          <input
            type="number"
            value={formData.totalQuantity || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                totalQuantity: Number(e.target.value),
              })
            }
            className="w-full border border-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm text-gray-600 block mb-1">
            Total Price ($)
          </label>
          <input
            type="number"
            value={formData.total || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                total: Number(e.target.value),
              })
            }
            className="w-full border border-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>

          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
