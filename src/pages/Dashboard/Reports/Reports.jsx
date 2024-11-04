import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"

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
        name: 'Esp32',
        value: '3',
    },
    {
        name: 'Formato',
        value: '4',
    },
    {
        name: 'Acción',
        value: '5',
    }


]


const tbody = [
    {
        date: '28/05/2022',
        type: 'Semanal',
        esp32Report: 'Todos',
        format: 'PDF',
        actions: 'Descargar',
    },
    {
        date: '24/05/2022',
        type: 'Mensual',
        esp32Report: 'Esp-32-A',
        format: 'Excel',
        actions: 'Descargar',
    }
]

function Reports() {
    return (
        <>
            <form className="bg-white rounded-lg shadow-md p-6 w-auto mb-6">
                <header className="mb-8 flex items-center justify-between w-full">
                    <h2 className="text-3xl font-semibold">Generación de Reportes</h2>
                </header>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="type-report" className="font-medium">Tipo de Reporte</label>
                            <select id="type-report"
                                className="border cursor-pointer border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2 w-full">
                                <option disabled value="" hidden>Seleccione una opción</option>
                                <option value="Diario">Diario</option>
                                <option value="Semanal">Semanal</option>
                                <option value="Mensual">Mensual</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="format-report" className="font-medium">Formato de Reporte</label>
                            <select id="format-report"
                                className="border cursor-pointer border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2 w-full">
                                <option disabled value="" hidden>Seleccione una opción</option>
                                <option value="pdf">PDF</option>
                                <option value="excel">Excel</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="esp-report" className="font-medium">Seleccionar Esp32</label>
                            <select id="esp-report"
                                className="border cursor-pointer border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2 w-full">
                                <option value="Todo">Todo</option>
                                <option value="Esp-32-A">Esp32-A</option>
                                <option value="Esp-32-B">Esp32-B</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="my-6">
                    <label htmlFor="calibration" className="font-medium">Rango de Fechas</label>
                    <div className="flex items-center space-x-2">
                        <input id="calibration" type="date" placeholder="0.0"
                            className="border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2" />
                        <span>-</span>
                        <input id="calibration" type="date" placeholder="0.0"
                            className="border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2" />
                    </div>
                </div>

                <button className="bg-black text-white font-medium rounded-lg px-4 py-2">
                    Generar Reporte
                </button>
            </form>

            <div className="bg-white rounded-lg shadow-md p-6 w-auto">
                <h3 className="text-2xl font-semibold">Historial de Reportes</h3>
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full bg-white border border-gray-200">
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
                                        <td className="py-2 px-4 border-b">{item.esp32Report}</td>
                                        <td className="py-2 px-4 border-b">{item.format}</td>
                                        <td
                                            className="py-2 px-4 border-b">
                                            <label className="flex items-center justify-center w-auto rounded-lg border border-gray-400">
                                                <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                                                {item.actions}

                                            </label>
                                        </td>
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

export default Reports