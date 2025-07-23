import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

function FileUpload({ label, file, onFileChange, onUpload }) {
  return (
    <div className="border-2 border-gray-200 rounded-lg bg-white relative">
      <label className="block mb-2 text-sm font-medium text-gray-700 absolute -top-6 left-0">
        {label}
      </label>

      <div className="py-6 text-center">
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={onFileChange}
          className="hidden"
          id={label.replace(/\s+/g, "-").toLowerCase()} // Unique ID
        />

        <label
          htmlFor={label.replace(/\s+/g, "-").toLowerCase()}
          className={`cursor-pointer flex flex-col items-center justify-center ${
            file ? "text-green-600" : "text-gray-600"
          } text-md font-semibold`}
        >
          <IoCloudUploadOutline className="text-3xl" />

          <span className={`${file ? "text-green-600" : "text-[#4F7396]"} `}>
            Upload {label}
          </span>
        </label>

        {file && (
          <p className="mt-2 text-sm text-green-600">Selected: {file.name}</p>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
