// import { Search } from "lucide-react";
import React from "react";
import ProductList from "../components/ProductList";
import { DollarSign, ShoppingBag, Package, AlertTriangle } from "lucide-react";
import Card from "../components/card";

const Products = ({ onDataLoaded }) => {


  const cardData = [
    {
      heading: "Total Products",
      total: "1,245",
      growth: "+8.4%",
      icon: <Package size={18} />,
    },
    {
      heading: "Active Listings",
      total: "1,120",
      growth: "+6.1%",
      icon: <ShoppingBag size={18} />,
    },
    {
      heading: "Low Stock",
      total: "32",
      growth: "+2.3%",
      icon: <AlertTriangle size={18} />,
    },
    {
      heading: "Avg Price",
      total: "$84.50",
      growth: "+3.7%",
      icon: <DollarSign size={18} />,
    },
  ];


  return (
    <div className="min-h-screen bg-gray-50 p-6 rounded-xl ml-4">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
            <p className="text-sm text-gray-500">
              Manage your inventory, pricing, and product performance
            </p>
          </div>

         {/* <div className="w-full md:w-auto">
  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-sm">
    + Add Product
  </button>
</div> */}
        </div>
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

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <ProductList onDataLoaded={onDataLoaded} />
      </div>
    </div>
  );
};

export default Products;