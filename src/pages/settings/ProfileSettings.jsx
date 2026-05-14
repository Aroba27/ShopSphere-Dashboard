import React, { useState } from "react";
import UploadProfilePic from "../../components/UploadProfilePic";
import InputField from "../../components/InputField";
import validateProfile from "../../utilis/validate";
const ProfileSettings = () => {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validationFunction = () => {
    const validationErrors = validateProfile(formData);
    setFormError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Submit", formData);
    }
  };
  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };
  return (
    <>
     

          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Profile Settings
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Manage your personal information and account details
                </p>
              </div>

              <UploadProfilePic />

              <div className="border-t border-gray-200 my-8"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  type={"text"}
                  label={"Full Name"}
                  placeholder={"Your name here"}
                  value={formData.name}
                  onChange={handleChange("name")}
                  error={formError.name}
                />

                <InputField
                  type={"email"}
                  label={" Email"}
                  placeholder={"Your email here"}
                  value={formData.email}
                  onChange={handleChange("email")}
                  error={formError.email}
                />

                <InputField
                  type={"number"}
                  label={"Phone Number"}
                  placeholder={"Your phone number here"}
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  error={formError.phone}
                />
              </div>
              <button
                onClick={validationFunction}
                className="mt-6 w-fit px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-sm"
              >
                Save
              </button>
            </div>
          </div>
       
    </>
  );


}

export default ProfileSettings