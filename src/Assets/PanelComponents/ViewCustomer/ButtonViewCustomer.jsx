import {
  IoPersonOutline,
  IoCallOutline,
  IoHomeOutline,
  IoCardOutline,
  IoDocumentOutline,
  IoImageOutline,
  IoBusinessOutline,
} from "react-icons/io5";

export default function ButtonViewCustomer({ value, icon, name, onEdit }) {
  const materialList = {
    name: {
      name: "Customer",
      icon: <IoPersonOutline />,
      hide: false,
    },
    mobile: {
      name: "Contact Number",
      icon: <IoCallOutline />,
      hide: false,
    },
    address: {
      name: "Residence",
      icon: <IoHomeOutline />,
      hide: false,
    },
    panNo: {
      name: "Pan Number",
      icon: <IoCardOutline />,
      hide: false,
    },
    aadharNo: {
      name: "Aadhar Number",
      icon: <IoCardOutline />,
      hide: false,
    },
    accountNo: {
      name: "Account Number",
      icon: <IoBusinessOutline />,
      hide: false,
    },
    bankName: {
      name: "Bank Name",
      icon: <IoBusinessOutline />,
      hide: false,
    },
    bankIfsc: {
      name: "Bank IFSC Code",
      icon: <IoBusinessOutline />,
      hide: false,
    },
    panUrl: {
      name: "Pan Card",
      icon: <IoDocumentOutline />,
      hide: true,
    },
    aadharUrl: {
      name: "Aadhar Card",
      icon: <IoDocumentOutline />,
      hide: true,
    },
    bankUrl: {
      name: "Bank Passbook",
      icon: <IoDocumentOutline />,
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
    email: {
      name: "Email",
      icon: <IoPersonOutline />,
      hide: false,
    },
  };

  return (
    <div className="flex flex-row justify-between w-full items-center overflow-hidden relative">
      <div className="flex flex-row h-full gap-2 ">
        <div
          className="h-full aspect-square rounded-xl bg-[#E8EDF2] flex justify-center items-center"
          style={{
            width: "2.5rem",
            height: "2.5rem",
            minWidth: "2.5rem",
            minHeight: "2.5rem",
            maxWidth: "2.5rem",
            maxHeight: "2.5rem",
          }}
        >
          {/* Force icon size to 1.5rem (24px) */}
          <span
            style={{
              fontSize: "1.5rem",
              width: "1.5rem",
              height: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </span>
        </div>
        <div className="h-full">
          <h1 className="font-semibold">{materialList[name]?.name}</h1>
          <h2 className="text-[#4F7396]">
            {materialList[name]?.hide ? (
              value ? (
                <a href={value} target="__blank" rel="noopener noreferrer">
                  View Document ↗
                </a>
              ) : (
                "No Document"
              )
            ) : (
              value
            )}
          </h2>
        </div>
      </div>

      <button
        onClick={onEdit}
        name={name}
        className="w-20 h-8 bg-[#E8EDF2] rounded-3xl font-medium cursor-pointer hover:opacity-90 hover:shadow-sm absolute right-1 top-2 md:static"
      >
        Edit
      </button>
    </div>
  );
}
