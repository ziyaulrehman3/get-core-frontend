import React from "react";

function Input({
  name,
  placeholder,
  value,
  onChange,
  type = "",
  className = "",
}) {
  return (
    <div className={`w-full ${className}`}>
      <label className="block text-md font-semibold text-gray-600 ">
        {placeholder}
      </label>
      <input
        type={type ?? "text"}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Input;
