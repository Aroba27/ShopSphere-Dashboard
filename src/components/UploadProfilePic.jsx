import React, { useRef, useState } from "react";

const UploadProfilePic = () => {
  const fileInputRef = useRef(null)
  const [file, setFile] = useState(null)

  function handleChange(e) {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  }

 
  return (
    <>
      <div className="flex items-center gap-6">
        
        <input
        ref={fileInputRef}
          type="file"
          id="avatarInput"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={handleChange}
        />

        <div className="h-32 w-32 rounded-full bg-gray-200 border border-gray-300 overflow-hidden flex items-center justify-center">
          {file ? (
            <img
              src={file}
              alt="Uploaded preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500 text-sm">Avatar</span>
          )}
        </div>

        <div className="flex flex-col">
          <button
           onClick={() => fileInputRef.current.click()}
            className="w-fit px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-sm"
          >
            Upload Photo
          </button>

          <span className="text-xs text-gray-500 mt-2">
            JPG, PNG. Max size 2MB
          </span>
        </div>
      </div>
    </>
  );
};

export default UploadProfilePic;
