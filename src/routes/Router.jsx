import { BrowserRouter, Routes, Route } from "react-router-dom"

import DashboardLayout from "../layouts/DashboardLayout"

import Dashboard from "../pages/dashboard/Dashboard"
import Rutinas from "../pages/dashboard/Rutinas"
import Calendario from "../pages/dashboard/Calendario"
import Perfil from "../pages/dashboard/Perfil"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/rutinas" element={<Rutinas />} />
                    <Route path="/calendario" element={<Calendario />} />
                    <Route path="/perfil" element={<Perfil />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
