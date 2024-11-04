const theader = [
    {
        name: 'Fecha',
        value: '1',
    },
    {
        name: 'Tipo',
        value: '2',
    },
    {
        name: 'Descripción',
        value: '3',
    },
    {
        name: 'Estado',
        value: '4',
    }


]

//En state solo se puede poner Activa, Pendiente, Resuelta

const tbody = [
    {
        date: '28/05/2022',
        type: 'Temperatura Alta',
        description: 'La temperatura ha superado el rango de 28°C',
        state: 'Activa',
    },
    {
        date: '24/05/2022',
        type: 'Fallo en el sensor',
        description: 'El sensor de temperatura no está funcionando',
        state: 'Pendiente',
    }
]

function Alarms() {

    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-6 w-auto mb-6">
                <h3 className="text-2xl font-semibold">Alarmas y Notificaciones</h3>
                <p className="text-gray-500 text-sm mt-2">Ajuste de Notificaciones</p>
                <form className="space-y-2 mt-6">
                    <div className="flex items-center space-x-4 mb-4">
                        <label htmlFor="temperature" className="font-semibold">Notificaciones por email:</label>
                        {/*Button switch"*/}
                        <div className="flex items-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-300 transition-colors duration-300"></div>
                                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-300 transform peer-checked:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                        <label htmlFor="temperature" className="font-semibold">Notificaciones General de Fallas:</label>
                        {/*Button switch"*/}
                        <div className="flex items-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-300 transition-colors duration-300"></div>
                                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-300 transform peer-checked:translate-x-full"></div>
                            </label>
                        </div>
                    </div>

                    <button className="bg-black text-white font-medium rounded-lg px-4 py-2">
                        Guardar Configuración
                    </button>
                </form>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 w-auto">
                <h3 className="text-2xl font-semibold">Historial de Alarmas</h3>
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full bg-white border border-gray-200 overflow-x-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                {
                                    theader.map((item, index) => (
                                        <th key={index} className="py-3 px-4 text-left text-gray-600 font-semibold border-b">
                                            {item.name}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tbody.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-100 cursor-pointer">
                                        <td className="py-2 px-4 border-b">{item.date}</td>
                                        <td className="py-2 px-4 border-b">{item.type}</td>
                                        <td className="py-2 px-4 border-b">{item.description}</td>
                                        <td
                                            className={`py-2 px-4 border-b ${item.state === 'Activa' ? 'text-red-500' : item.state === 'Pendiente' ? 'text-yellow-900' : 'text-green-500'}`}>{item.state}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </>


    )
}

export default Alarms