import { Routes, Route } from "react-router-dom";
import Commission from "./Commission";
import General from "./General";
import CreateMailing from "./CreateMailing";
import CreateInvoice from "./CreateInvoice";

export function InvoiceManagement() {
    return (
        <Routes>
            <Route  path="/*" element={<Commission />} />
            {/* <Route  path="/Commission" element={<Commission />} /> */}
            <Route  path="/general" element={<General />} />
            <Route  path="/createMailing" element={<CreateMailing />} />
            <Route  path="/createInvoice" element={<CreateInvoice />} />
        </Routes>

    )
}

export default InvoiceManagement;