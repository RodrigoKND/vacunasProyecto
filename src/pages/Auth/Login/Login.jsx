import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full p-6 max-w-md bg-white shadow-lg">
                <header className="mb-8">
                    <div className="flex justify-center mb-4">
                        <div className="relative w-20 h-20 bg-blue-500 rounded-full overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl font-bold text-white">VT</span>
                            </div>
                            <div className="absolute bottom-0 w-full h-1/3 bg-blue-600"></div>
                        </div>

                    </div>
                    <h1 className="text-2xl font-bold text-center">VacciTemp</h1>
                    <p className="text-center mt-3">
                        Sistema de monitoreo de vacunas
                    </p>
                </header>
                <form>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email">Correo electrónico</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="correo@gmail.com"
                                required
                                className="border border-solid border-gray-300 px-4 py-2 w-full"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password">Contraseña</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={"password"}
                                    required
                                    className="border border-solid border-gray-300 px-4 py-2 w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit"
                        onClick={handleSubmit}
                        className="bg-black flex justify-center w-full mt-8 items-center text-white font-medium rounded-lg px-6 py-3">
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>

    )

}

export default Login