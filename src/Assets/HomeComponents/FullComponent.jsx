import LowerPortion from "./LowerPortion";
import TopPortion from "./TopPortion";

const FullComponent = () => {
  return (
    <div id="AboutUs" className="flex flex-col gap-8 py-8">
      <TopPortion />
      <LowerPortion />
    </div>
  );
};

export default FullComponent;
