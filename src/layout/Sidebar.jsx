import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  BoxIcon,
  ShoppingCartIcon,
  UsersIcon,
  SettingsIcon,
  LogOutIcon,
} from "lucide-react";

import { logout } from "../utilis/auth";

const Sidebar = () => {
  const navigate = useNavigate();

  const TopMenu = [
    { name: "Dashboard", icon: <HomeIcon size={20} />, path: "/" },
    { name: "Products", icon: <BoxIcon size={20} />, path: "/products" },
    { name: "Orders", icon: <ShoppingCartIcon size={20} />, path: "/orders" },
    { name: "Users", icon: <UsersIcon size={20} />, path: "/users" },
  ];

  const BottomMenu = [
    { name: "Settings", icon: <SettingsIcon size={20} />, path: "/settings" },
    { name: "LogOut", icon: <LogOutIcon size={20} />, action: "logout" },
  ];

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;

    logout(); 
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-16 md:w-45 bg-white border-r border-gray-100 flex flex-col justify-between py-6">

      <div className="flex items-center gap-2 px-4 mb-6">
        <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-lg font-semibold">
          S
        </div>
        <span className="hidden md:block font-semibold text-gray-900">
          ShopSphere
        </span>
      </div>

      
      <div className="flex flex-col gap-1 px-2">
        {TopMenu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition
              ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
              }`
            }
          >
            <span className="flex items-center justify-center">
              {item.icon}
            </span>
            <span className="hidden md:block">{item.name}</span>
          </NavLink>
        ))}
      </div>

    
      <div className="flex flex-col gap-1 px-2">
        {BottomMenu.map((item) => {
         
          if (item.action === "logout") {
            return (
              <button
                key={item.name}
                onClick={handleLogout}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition text-red-500 hover:bg-red-50 w-full text-left"
              >
                <span>{item.icon}</span>
                <span className="hidden md:block">{item.name}</span>
              </button>
            );
          }

    
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`
              }
            >
              <span>{item.icon}</span>
              <span className="hidden md:block">{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;