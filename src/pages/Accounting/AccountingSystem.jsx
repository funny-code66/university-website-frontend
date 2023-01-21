import { Routes, Route } from "react-router-dom";
import Sales from "./Sales";
import Cost from "./Cost";
import Debit from "./Debit";
import Expenses from "./Expenses";
import CreateSales from "./CreateSales";
import CreateCostOfSales from "./CreateCostOfSales";
import CreateExpanses from "./CreateExpanses";
export function AccountingSystem() {
    return (
        <Routes >
            <Route path="/*" element={<Sales />} />
            <Route path="/Sales" element={<Sales />} />
            <Route path="/cost" element={<Cost />} />
            <Route path="/debit" element={<Debit />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/CreateSales" element={<CreateSales />} />
            <Route path="/expenses/createExpanses" element={<CreateExpanses />} />
            <Route path="/cost/createCostOfSales" element={<CreateCostOfSales />} />
        </Routes>

    )
}

export default AccountingSystem;



