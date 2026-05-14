import React, { useState } from "react";
import ProfileSettings from "./settings/ProfileSettings";
import StoreSettings from "./settings/StoreSettings";
import Notifications from "./settings/Notifications";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6 rounded-xl ml-4">
        <div className="flex gap-6">
          <div className="w-64 bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Settings
            </h2>

            <div className="flex flex-col gap-2 h-screen">
              <div
                onClick={() => setActiveTab("profile")}
                className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium cursor-pointer"
              >
                Profile
              </div>
              <div
                onClick={() => setActiveTab("store")}
                className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                Store
              </div>
              
              <div
                onClick={() => setActiveTab("notifications")}
                className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                Notifications
              </div>
            </div>
          </div>

 <div className="flex-1">
        {activeTab === "profile" && <ProfileSettings/>}
        {activeTab === "store" && <StoreSettings/>}
         {activeTab === "notifications" && <Notifications/>}
      </div>
        </div>
      </div>

     
    </>
  );
};
export default Settings;
