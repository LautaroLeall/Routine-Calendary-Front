import { NavLink } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { FaHome, FaCalendarAlt, FaTasks, FaUser } from "react-icons/fa"

const items = [
    { to: "/dashboard", label: "Dashboard", icon: <FaHome /> },
    { to: "/rutinas", label: "Rutinas", icon: <FaTasks /> },
    { to: "/calendario", label: "Calendario", icon: <FaCalendarAlt /> },
    { to: "/perfil", label: "Perfil", icon: <FaUser /> },
]

export default function Sidebar() {
    return (
        <motion.aside
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-64 bg-gray-900 text-white flex flex-col p-4"
        >
            <h1 className="text-xl font-bold mb-6">Rutina</h1>

            <nav className="flex flex-col gap-2">
                {items.map(({ to, label, icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-md transition
                            ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
                        }
                    >
                        {icon}
                        {label}
                    </NavLink>
                ))}
            </nav>
        </motion.aside>
    )
}
