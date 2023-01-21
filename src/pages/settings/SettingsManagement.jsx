import { Routes, Route } from "react-router-dom";

import Branch from "./branch";
import Properties from "./properties";
import Settings from "./settings";
import StatusManagement from "./statusmanagement";
import User from "./user";
import Profiles from "./profiles";
import AddUser from "./adduser";
import AddBranch from "./addbranch";
import AddStatus from "./addstatus";

export function SettingsManagement() {
    return (
        <Routes>
            <Route  path="/*" element={<User />} /> 
            <Route  path="/User" element={<User />} /> 
            <Route  path="/Branch" element={<Branch />} />
            <Route  path="/Branch/AddBranch" element={<AddBranch />} />
            <Route  path="/Profiles" element={<Profiles />} />
            <Route  path="/StatusManagement" element={<StatusManagement />} />
            <Route  path="/Properties" element={<Properties />} />
            <Route  path="/Settings" element={<Settings />} />
            <Route  path="/AddUser" element={<AddUser />} />
            <Route  path="/StatusManagement/AddStatus" element={<AddStatus />} />
        </Routes>

    )
}

export default SettingsManagement;