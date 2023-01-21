import { Routes, Route } from "react-router-dom";
import Create from "./create";
import Currency from "./currency";

export function CurrencyManagement() {
    return (
        <Routes>
            <Route  path="/*" element={<Currency />} />
            
            <Route  path="/Create" element={<Create />} />
 
        </Routes>

    )
}

export default CurrencyManagement;