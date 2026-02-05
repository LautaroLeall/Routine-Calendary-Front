import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../../schemas/auth.schema"
import { Link, useNavigate } from "react-router-dom"

export default function Register() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit = () => {
        navigate("/login")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h1 className="text-2xl font-bold text-center">Crear cuenta</h1>

            <div>
                <input
                    {...register("name")}
                    placeholder="Nombre"
                    className="w-full border p-2 rounded"
                />
                {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
            </div>

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
                Registrarse
            </button>

            <p className="text-sm text-center">
                ¿Ya tenés cuenta?{" "}
                <Link to="/login" className="underline">
                    Iniciar sesión
                </Link>
            </p>
        </form>
    )
}
