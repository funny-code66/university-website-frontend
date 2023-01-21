import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import Academic from "@/pages/universitymodule/Universitymodule";


// import Sales from "@/pages/Accounting/Sales";
// import Cost from "@/pages/Accounting/Cost";
// import Debit from "@/pages/Accounting/Debit";
// import Expenses from "@/pages/Accounting/Expenses";
// import CreateSales from "@/pages/Accounting/CreateSales";
// import CreateCostOfSales from "@/pages/Accounting/CreateCostOfSales";
// import CreateExpanses from "@/pages/Accounting/CreateExpanses";


export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes} 
      />
      <div className="ml-[359px] p-4 lg-max:ml-[110px] ">
        {/* <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton> */}
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route path={path} element={element} />
              ))
              )}
            {/* <Route  exact path="/*" element={<Sales />} />
            <Route  path="/Sales" element={<Sales />} />
            <Route  path="/CreateExpanses" element={<CreateExpanses />} />
            <Route  path="/Cost" element={<Cost />} />
            <Route  path="/Debit" element={<Debit />} />
            <Route  path="/Expenses" element={<Expenses />} />
            <Route  path="/Sales/CreateSales" element={<CreateSales />} />
            <Route  path="/CreateCostOfSales" element={<CreateCostOfSales />} /> */}
        </Routes>
        {/* <div className="text-blue-gray-600">
          <Footer />
        </div> */}
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
