import { Outlet } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function AuthLayout() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen flex items-center justify-center bg-gray-100"
        >
            <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
                <Outlet />
            </div>
        </motion.div>
    )
}
