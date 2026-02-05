import { NavLink } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { FaHome, FaCalendarAlt, FaTasks, FaUser } from "react-icons/fa"
import { useUIStore } from "../store/ui.store"

const items = [
    { to: "/dashboard", label: "Dashboard", icon: <FaHome /> },
    { to: "/rutinas", label: "Rutinas", icon: <FaTasks /> },
    { to: "/calendario", label: "Calendario", icon: <FaCalendarAlt /> },
    { to: "/perfil", label: "Perfil", icon: <FaUser /> },
]

export default function Sidebar() {
    const { isSidebarOpen } = useUIStore()

    return (
        <motion.aside
            animate={{ width: isSidebarOpen ? 256 : 80 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 text-white flex flex-col p-4 overflow-hidden"
        >
            <h1 className="text-xl font-bold mb-6 whitespace-nowrap">
                {isSidebarOpen ? "Rutina" : "R"}
            </h1>

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
                        {isSidebarOpen && <span>{label}</span>}
                    </NavLink>
                ))}
            </nav>
        </motion.aside>
    )
}
