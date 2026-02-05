import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import AuthLayout from "../layouts/AuthLayout"
import DashboardLayout from "../layouts/DashboardLayout"
import ProtectedRoute from "../components/auth/ProtectedRoute"

import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"

import Dashboard from "../pages/dashboard/Dashboard"
import Rutinas from "../pages/dashboard/Rutinas"
import Calendario from "../pages/dashboard/Calendario"
import Perfil from "../pages/dashboard/Perfil"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* AUTH */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                {/* DASHBOARD */}
                <Route
                    element={
                        <ProtectedRoute>
                            <DashboardLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/rutinas" element={<Rutinas />} />
                    <Route path="/calendario" element={<Calendario />} />
                    <Route path="/perfil" element={<Perfil />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
