import React, { useCallback, useState } from "react";
import {
  Download,
  Plus,
  ShoppingBag,
  Package,
  RotateCcw,
  CheckCircle,
} from "lucide-react";
import Card from "../components/card";
import OrderList from "../components/OrderList";
import CreateOrderModal from "../components/CreateOrderModal";
import { ExportToCSV } from "../utilis/CSVExport";
import {ExportButton} from "../components/ExportButton"

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    productName: "",
    totalProducts: 0,
    totalQuantity: 0,
    total: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOrdersData = useCallback((data) => {
    setOrders(data);
  }, []);

  const orderColumns = [
    { header: "Order ID", accessor: (o) => o.id },
    { header: "Product", accessor: (o) => o.products[0]?.title },
    { header: "Quantity", accessor: (o) => o.totalQuantity },
    { header: "Total", accessor: (o) => o.total },
  ];

  const handleCreate = () => {
    setFormData({
      id: "",
      products: "",
      totalProducts: "",
      totalQuantity: "",
      total: "",
    });
    setIsModalOpen(true);
  };

  const handleSave = (newOrder) => {
    const newId =
      orders.length > 0 ? Math.max(...orders.map((o) => o.id)) + 1 : 1;
    const order = {
      id: newId,
      totalProducts: newOrder.totalProducts,
      totalQuantity: newOrder.totalQuantity,
      total: newOrder.total,

      products: [
        {
          title: newOrder.productName,
        },
      ],
    };
    setOrders((prev) => [order, ...prev]);
    setIsModalOpen(false);
  };


  const cardData = [
    {
      heading: "Total Orders",
      total: "67",
      growth: "+25.2%",
      icon: <ShoppingBag size={18} />,
    },
    {
      heading: "Order Items",
      total: "15",
      growth: "+15.5%",
      icon: <Package size={18} />,
    },
    {
      heading: "Return Orders",
      total: "0",
      growth: "-1.8%",
      icon: <RotateCcw size={18} />,
    },
    {
      heading: "Fulfilled Orders",
      total: "16.5",
      growth: "+16.5%",
      icon: <CheckCircle size={18} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 rounded-xl ml-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Orders</h2>
          <p className="text-sm text-gray-500">
            Track and manage all customer orders
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ExportButton
            data={orders}
            columns={orderColumns}
            filename="orders.csv"
          />

          <button
            onClick={() => handleCreate(orders)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-sm"
          >
            <Plus size={16} />
            Create Order
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
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
        <OrderList
          onDataLoaded={handleOrdersData}
          orders={orders}
          setOrders={setOrders}
        />
      </div>
      <CreateOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        onSave={handleSave}
      />
    </div>
  );
};

export default Orders;
