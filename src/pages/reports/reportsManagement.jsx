import { Routes, Route } from "react-router-dom";
import Expenses from "./expenses";
import Income from "./income";
import Profit from "./profit";
import Reports from "./reports";
import ReportsCost from "./reportsCost";


export function ReportsManagement() {
    return (
        <Routes>
            <Route  path="/*" element={<Reports />} /> 
            <Route  path="/Profit" element={<Profit />} />
            <Route  path="/Income" element={<Income />} />
            <Route  path="/Expenses" element={<Expenses />} />
            <Route  path="/ReportsCost" element={<ReportsCost />} />
        </Routes>

    )
}

export default ReportsManagement;