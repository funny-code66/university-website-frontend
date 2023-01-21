import { Routes, Route } from "react-router-dom";
import Academic from "./Academic";
import University from "./University";
import CreateUniversity from "./CreateUniversity";
import CreateAcademic from "./CreateAcademic";

export function Universitymodule() {
    return (
        <Routes>
            <Route  exact path="/*" element={<University />} />
            <Route  path="/university" element={<University />} />
            <Route  path="/academic" element={<Academic />} />
            <Route  path="/createUniversity" element={<CreateUniversity />} />
            <Route  path="/academic/createAcademic" element={<CreateAcademic />} />
        </Routes>

    )
}

export default Universitymodule;