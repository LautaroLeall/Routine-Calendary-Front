import { FaBars } from "react-icons/fa"
import { useUIStore } from "../store/ui.store"

export default function Navbar() {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar)

  return (
    <header className="h-14 bg-white shadow flex items-center justify-between px-6">
      <button
        onClick={toggleSidebar}
        className="p-2 rounded hover:bg-gray-100 transition"
      >
        <FaBars />
      </button>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  )
}
