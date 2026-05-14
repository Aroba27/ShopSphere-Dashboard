import React from "react";

const InputField = ({ error, onChange, value, type, label, placeholder }) => {
  return (
    <>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">{label}</label>

        <input
          type={type}
          placeholder={placeholder}
          className={`mt-2 w-full text-sm px-4 py-2.5 rounded-lg border transition outline-none
  ${
    error
      ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200 focus:border-red-400"
      : "border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 hover:border-gray-300"
  }`}
          value={value}
          onChange={onChange}
        />
        <span className="text-xs text-red-500 mt-1">{error}</span>
      </div>
    </>
  );
};

export default InputField;
