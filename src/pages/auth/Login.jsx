import { useAuthStore } from "../../store/auth.store"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const login = useAuthStore((state) => state.login)
    const navigate = useNavigate()

    const handleLogin = () => {
        login({ name: "LautyGod" })
        navigate("/dashboard")
    }

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold text-center">Iniciar sesión</h1>

            <button
                onClick={handleLogin}
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
                Entrar
            </button>
        </div>
    )
}
