import { useState, lazy, Suspense } from "react";

import Dashboard from "./PanelComponents/Dashboard";
import SideBar from "./PanelComponents/SideBar";
import CreateCustomer from "./PanelComponents/CreateCustomer";
import Loading from "./Loading";
import ViewCustomer from "./PanelComponents/ViewCustomer";
import CreateLoan from "./PanelComponents/CreateLoan";

const ViewLoan = lazy(() => import("./PanelComponents/ViewLoan"));
const LoanDeposit = lazy(() => import("./PanelComponents/LoanDeposit"));
const RecentTransaction = lazy(() =>
  import("./PanelComponents/RecentTransaction")
);

export default function Panel() {
  const [activePage, setActivePage] = useState("dashboard");

  const [loading, setLoading] = useState(false);
  const ScreenFun = () => {
    const classData = "w-full md:w-[80%] ";

    switch (activePage) {
      case "dashboard":
        return (
          <Dashboard
            className={classData}
            setLoading={setLoading}
            setActivePage={setActivePage}
          />
        );

      case "create-customer":
        return <CreateCustomer setLoading={setLoading} />;

      case "view-customer":
        return <ViewCustomer setLoading={setLoading} />;

      case "create-loan":
        return <CreateLoan setLoading={setLoading} />;

      case "view-loan":
        return (
          <Suspense fallback={<div>Loading....</div>}>
            <ViewLoan setLoading={setLoading} setActivePage={setActivePage} />
          </Suspense>
        );

      // case "payment-deposit":
      //   return (
      //     <Suspense fallback={<div>Loading...</div>}>
      //       <LoanDeposit
      //         setLoading={setLoading}
      //         setActivePage={setActivePage}
      //       />
      //     </Suspense>
      //   );

      // case "recent-payments":
      //   return (
      //     <Suspense fallback={<div>Loading...</div>}>
      //       <RecentTransaction setLoading={setLoading} />
      //     </Suspense>
      //   );
    }
  };

  return (
    <div className="flex flex-row w-full h-lvh overflow-hidden relative">
      <SideBar
        className=""
        setActivePage={setActivePage}
        activePage={activePage}
      />

      {loading && <Loading />}

      {ScreenFun()}
    </div>
  );
}
