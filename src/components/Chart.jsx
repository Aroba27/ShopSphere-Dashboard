import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const lineData = [
  { name: "Mon", sales: 400 },
  { name: "Tue", sales: 700 },
  { name: "Wed", sales: 500 },
  { name: "Thu", sales: 900 },
  { name: "Fri", sales: 1200 },
  { name: "Sat", sales: 800 },
  { name: "Sun", sales: 1500 },
];

const pieData = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Accessories", value: 300 },
];

const COLORS = ["#2563EB", "#3B82F6", "#93C5FD"];

const Chart = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">

      <div className="col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition">

    
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Sales Overview
            </h2>
            <p className="text-sm text-gray-500">
              Last 7 days performance
            </p>
          </div>

          <span className="text-xs font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
            +18.2%
          </span>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={lineData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E0E7FF"
            />
            <XAxis
              dataKey="name"
              stroke="#94A3B8"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#94A3B8"
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition">

      
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Sales by Category
          </h2>
          <p className="text-sm text-gray-500">
            Distribution overview
          </p>
        </div>

     
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                  className="hover:opacity-80 transition"
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              iconType="circle"
              wrapperStyle={{ fontSize: "12px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;