import React, { useEffect, useState } from "react";

export default function EditModal({
  open,
  onClose,
  field,
  value,
  onSave,
  customerId,
}) {
  const [input, setInput] = useState(value);

  useEffect(() => {
    setInput(value);
  }, [value, open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/10 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg h-[350px] w-[80%] lg:w-[600px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-2">CustomerId</h2>
        <input
          className="rounded-2xl border border-4 p-4 w-full mb-4 bg-gray-100 text-gray-500 cursor-not-allowed"
          style={{ borderColor: "#D1DBE8" }}
          value={customerId}
          placeholder="ID : ABC1234"
          readOnly
          disabled
        />

        <h2 className="text-xl font-semibold mb-4">Edit {field}</h2>
        <input
          className="rounded-2xl border border-4 p-4 border w-full mb-4"
          style={{ borderColor: "#D1DBE8" }}
          placeholder={`${field.toUpperCase()}`}
          type={
            ["panUrl", "aadharUrl", "bankUrl", "photoUrl", "otherUrl"].includes(
              field
            )
              ? "file"
              : "text"
          }
          value={
            ["panUrl", "aadharUrl", "bankUrl", "photoUrl", "otherUrl"].includes(
              field
            )
              ? undefined
              : input
          }
          onChange={(e) => {
            if (
              [
                "panUrl",
                "aadharUrl",
                "bankUrl",
                "photoUrl",
                "otherUrl",
              ].includes(field)
            ) {
              const file = e.target.files[0];
              // console.log("Selected file:", file);
              setInput(file);
              // store it in state if needed
            } else {
              setInput(e.target.value); // assuming setInput is defined
            }
          }}
        />
        <div className="flex justify-end gap-2">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => {
              onSave(input);
              onClose();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
