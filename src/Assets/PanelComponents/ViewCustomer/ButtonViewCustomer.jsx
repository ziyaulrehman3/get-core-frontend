export default function ButtonViewCustomer({ value, icon, name }) {
  const materialList = {
    name: {
      name: "Customer",
      hide: false,
    },
    mobile: {
      name: "Contact Information",
      hide: false,
    },
    address: {
      name: "Residance",
      hide: false,
    },
    panNo: {
      name: "Pan Number",
      hide: false,
    },
    aadharNo: {
      name: "Aadhar Number",
      hide: false,
    },
    bankName: {
      name: "Customer",
      hide: false,
    },
    accountNo: {
      name: "Account Number",
      hide: false,
    },
    bankName: {
      name: "Bank Name",
      hide: false,
    },
    bankIfsc: {
      name: "Bank IFSC Code",
      hide: false,
    },
    panUrl: {
      name: "Customer",
      hide: true,
    },
    aadharUrl: {
      name: "Aadhar Card",
      hide: true,
    },
    bankUrl: {
      name: "Bank Passbook",
      hide: true,
    },
    panUrl: {
      name: "Pan Card",
      hide: true,
    },
    photoUrl: {
      name: "Customer Photo",
      hide: true,
    },
    otherUrl: {
      name: "Any Other Document",
      hide: true,
    },
  };

  return (
    <div className="flex flex-row justify-between w-full items-center overflow-hidden relative">
      <div className="flex flex-row h-full gap-2 ">
        <div className="h-full aspect-square rounded-xl text-3xl bg-[#E8EDF2] flex justify-center items-center">
          {icon}
        </div>
        <div className="h-full">
          <h1 className="font-semibold">{materialList[name].name}</h1>
          <h2 className="text-[#4F7396]">
            {materialList[name].hide ? (
              <a href={value} target="__blank" rel="noopener noreferrer">
                View Document ↗
              </a>
            ) : (
              value
            )}
          </h2>
        </div>
      </div>

      <button
        name={name}
        className="w-20 h-8 bg-[#E8EDF2] rounded-3xl font-medium cursor-pointer hover:opacity-90 hover:shadow-sm absolute right-1 top-2 md:static"
      >
        Edit
      </button>
    </div>
  );
}
