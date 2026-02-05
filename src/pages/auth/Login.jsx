import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "../../schemas/auth.schema"
import { useAuthStore } from "../../store/auth.store"
import { useNavigate, Link } from "react-router-dom"

export default function Login() {
    const login = useAuthStore((state) => state.login)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (data) => {
        login({ email: data.email })
        navigate("/dashboard")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h1 className="text-2xl font-bold text-center">Iniciar sesión</h1>

            <div>
                <input
                    {...register("email")}
                    placeholder="Email"
                    className="w-full border p-2 rounded"
                />
                {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
            </div>

            <div>
                <input
                    type="password"
                    {...register("password")}
                    placeholder="Contraseña"
                    className="w-full border p-2 rounded"
                />
                {errors.password && (
                    <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
                Entrar
            </button>

            <p className="text-sm text-center">
                ¿No tenés cuenta?{" "}
                <Link to="/register" className="underline">
                    Registrate
                </Link>
            </p>
        </form>
    )
}
