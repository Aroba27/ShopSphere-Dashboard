import React from "react";
import Card from "../components/card";
import Chart from "../components/Chart";
import { DollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react";
import Orders from "../components/Orders";

const Dashboard = () => {
  const cardData = [
    {
      heading: "Revenue",
      total: "$12,430",
      growth: "+12.5%",
      icon: <DollarSign size={18} />,
    },
    {
      heading: "Orders",
      total: "1,240",
      growth: "+9.2%",
      icon: <ShoppingCart size={18} />,
    },
    {
      heading: "Customers",
      total: "5,000",
      growth: "-2.8%",
      icon: <Users size={18} />,
    },
    {
      heading: "Growth Rate",
      total: "16.5%",
      growth: "+16.5%",
      icon: <TrendingUp size={18} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 rounded-xl ml-4">

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Overview of your business performance and activity
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {cardData.map((c) => (
          <Card
            key={c.heading}
            heading={c.heading}
            total={c.total}
            growth={c.growth}
            icon={c.icon}
          />
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">
        <Chart />
      </div>
      <Orders />

    </div>
  );
};

export default Dashboard;