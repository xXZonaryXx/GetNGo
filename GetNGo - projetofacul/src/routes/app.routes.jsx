import { Routes, Route, Navigate } from "react-router-dom";

import { Details } from "../pages/Deatails";
import { Home } from "../pages/Home";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}