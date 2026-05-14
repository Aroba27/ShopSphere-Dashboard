import React from 'react'
import InputField from '../../components/InputField';

const StoreSettings = () => {
  return (
    <div className="space-y-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-screen">

      <h2 className="text-xl font-semibold">Store Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField label="Store Name" />
        <InputField label="Business Email" />
      </div>

      <textarea
        placeholder="Store description..."
        className="w-full border rounded-lg p-3"
      />

      <select className="border p-2 rounded-lg">
        <option>PKR</option>
        <option>USD</option>
      </select>

      <div className="flex items-center gap-2">
        <input type="checkbox" />
        <span>Enable Store</span>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Save Changes
      </button>

    </div>
  );
};

export default StoreSettings