export default function Comp3Cart({ icon, title, desc }) {
  return (
    <div className="aspect-square rounded-2xl border-[1px] border-black ease-in-out transition-all gap-1 hover:text-white cursor-pointer duration-500 hover:border-[#0360D9] bg-white hover:bg-[#0360D9] p-4 flex flex-col">
      <div className="w-[50%] lg:w-[40%] mb-2 flex justify-center items-center aspect-square rounded-full aspect-square bg-[#E6F5FC] text-[#0360D9] text-5xl lg:text-4xl">
        {icon}
      </div>
      <h1 className="text-xl font-bold font-ibm">{title}</h1>
      <p className="text-base">{desc}</p>
    </div>
  );
}
