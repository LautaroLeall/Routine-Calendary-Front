// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-14 bg-white shadow flex items-center justify-between px-6"
    >
      <span className="font-semibold">Dashboard</span>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </motion.header>
  )
}
