import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline"

function Configuration() {
    return (
        <>
            <form className="bg-white rounded-lg shadow-md p-6 w-auto mb-6">
                <header className="mb-8">
                    <h2 className="text-3xl font-semibold">Configuración del Sistema</h2>
                </header>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 my-6">
                        <div>
                            <label htmlFor="update-frequency" className="font-medium">Frecuencia de Actualización</label>
                            <select className="border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2 w-full">
                                <option disabled value="" hidden>Seleccione una opción</option>
                                <option value="1min">Cada minuto</option>
                                <option value="5min">Cada 5 minutos</option>
                                <option value="15min">Cada 15 minutos</option>
                                <option value="30min">Cada 30 minutos</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="update-frequency" className="font-medium">Unidad de Temperatura</label>
                            <select className="border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2 w-full">
                                <option disabled value="" hidden>Seleccione una opción</option>
                                <option value="celsius">Celsius (°C)</option>
                                <option value="fahrenheit">Fahrenheit (°F)</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="esp-config" className="font-medium">Seleccionar Esp32</label>
                            <select id="esp-config"
                                className="border cursor-pointer border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2 w-full">
                                <option value="Todo">Todo</option>
                                <option value="Esp-32-A">Esp32-A</option>
                                <option value="Esp-32-B">Esp32-B</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button className="bg-black text-white font-medium rounded-lg px-4 py-2">
                    Guardar Configuración
                </button>
            </form>

            <div className="bg-white rounded-lg shadow-md p-6 w-auto mt-6">
                <h3 className="text-2xl font-semibold">Mantenimiento del Sistema</h3>
                <div className="space-y-4 mt-6 flex items-baseline gap-4">
                    <button
                        className="font-medium rounded-lg flex px-4 py-2 border border-solid border-gray-300 hover:bg-gray-100 cursor-pointer">
                        <ArrowUpOnSquareIcon className="w-5 h-5 mr-2" />
                        Restaurar Configuración
                    </button>
                    <button className="bg-red-400 text-white font-medium rounded-lg px-4 py-2 cursor-pointer">
                        Reiniciar SIstema
                    </button>
                </div>
            </div>
        </>
    )
}

export default Configuration