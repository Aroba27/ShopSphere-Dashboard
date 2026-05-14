import { useState } from "react";
const Toggle = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-gray-700">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5"
      />
    </div>
  );
};
const Notifications = () => {
  const [settings, setSettings] = useState({
    email: true,
    push: true,
    sms: false,
    newOrders: true,
    orderUpdates: true,
    newCustomers: false,
    reviews: true,
    promotions: false,
    newsletter: false,
    security: true,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

      <h2 className="text-xl font-semibold">Notifications</h2>

      <div className="bg-white p-4 rounded-xl border">
        <h3 className="font-medium mb-3">Communication</h3>
        <Toggle label="Email Notifications" checked={settings.email} onChange={() => handleToggle("email")} />
        <Toggle label="Push Notifications" checked={settings.push} onChange={() => handleToggle("push")} />
        <Toggle label="SMS Notifications" checked={settings.sms} onChange={() => handleToggle("sms")} />
      </div>

      <div className="bg-white p-4 rounded-xl border">
        <h3 className="font-medium mb-3">Activity</h3>
        <Toggle label="New Orders" checked={settings.newOrders} onChange={() => handleToggle("newOrders")} />
        <Toggle label="Order Updates" checked={settings.orderUpdates} onChange={() => handleToggle("orderUpdates")} />
        <Toggle label="New Customers" checked={settings.newCustomers} onChange={() => handleToggle("newCustomers")} />
        <Toggle label="Product Reviews" checked={settings.reviews} onChange={() => handleToggle("reviews")} />
      </div>

      <div className="bg-white p-4 rounded-xl border">
        <h3 className="font-medium mb-3">Marketing</h3>
        <Toggle label="Promotions & Offers" checked={settings.promotions} onChange={() => handleToggle("promotions")} />
        <Toggle label="Newsletter" checked={settings.newsletter} onChange={() => handleToggle("newsletter")} />
      </div>

      <div className="bg-white p-4 rounded-xl border">
        <h3 className="font-medium mb-3">Security</h3>
        <Toggle label="Security Alerts" checked={settings.security} onChange={() => handleToggle("security")} />
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Save Changes
      </button>
    </div>
  );
};

export default Notifications;