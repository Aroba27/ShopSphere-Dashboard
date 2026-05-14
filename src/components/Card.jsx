import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const Card = ({ heading, total, growth, icon }) => {
  const isPositive = growth.includes("+");

  return (
    <div className="flex flex-col justify-between p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 w-full">
      
      <div className="flex items-center justify-between">
        <h3 className="text-sm text-gray-500 font-medium">{heading}</h3>

        <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
          {icon}
        </div>
      </div>

      <p className="text-2xl font-bold text-gray-900 mt-4">
        {total}
      </p>

      <div className="flex items-center gap-1 mt-2">
        {isPositive ? (
          <ArrowUpRight size={16} className="text-green-500" />
        ) : (
          <ArrowDownRight size={16} className="text-red-500" />
        )}

        <span
          className={`text-sm font-medium ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {growth}
        </span>
      </div>

     
      <p className="text-xs text-gray-400 mt-1">
        vs last month
      </p>

    </div>
  );
};

export default Card;