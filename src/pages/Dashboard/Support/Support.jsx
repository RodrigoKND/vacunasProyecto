function Support() {
    return (
        <>
            <form className="bg-white rounded-lg shadow-md p-6 w-auto mb-6">
                <header className="mb-8 flex items-center justify-between w-full">
                    <h2 className="text-3xl font-semibold">Soporte Técnico</h2>
                </header>
                <div className="space-y-4 mb-6">
                    <div>
                        <label htmlFor="description-problem" className="font-medium">Descripción del Problema</label>
                        <input type="text"
                            id="description-problem"
                            className="w-full text-gray-700 border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="type-report" className="font-medium">Prioridad</label>
                        <select id="type-report"
                            className="border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2 w-full">
                            <option value="" disabled hidden>Seleccione una opción</option>
                            <option value="Baja">Baja</option>
                            <option value="Media">Media</option>
                            <option value="Alta">Alta</option>
                            <option value="Crítica">Crítica</option>
                        </select>
                    </div>
                </div>

                <button className="bg-black text-white font-medium rounded-lg px-4 py-2">
                    Enviar Solicitud de Reporte
                </button>
            </form>

            <div className="bg-white rounded-lg shadow-md p-6 w-auto mb-6">
                <header className="mb-8 flex items-center justify-between w-full">
                    <h2 className="text-3xl font-semibold">Versión del Sistema</h2>
                </header>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Versión Actual: 1.0.0</p>
                            <p className="text-sm text-gray-400">Última actualización: 31/10/2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Support