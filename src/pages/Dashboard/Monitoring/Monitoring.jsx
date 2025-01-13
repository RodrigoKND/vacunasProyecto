import { AlertTriangleIcon, BatteryIcon, ThermometerIcon } from 'lucide-react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const temperatureData = [
    { time: '00:00', avgTemp: 3.8 },
    { time: '04:00', avgTemp: 3.9 },
    { time: '08:00', avgTemp: 4.1 },
    { time: '12:00', avgTemp: 4.3 },
    { time: '16:00', avgTemp: 4.2 },
    { time: '20:00', avgTemp: 4.0 },
]

const recentAlerts = [
    { id: 1, device: 'ESP32-A1', type: 'Temperatura Alta', time: '10:30 AM' },
    { id: 2, device: 'ESP32-C3', type: 'Bateria Baja', time: '11:45 AM' },
    { id: 3, device: 'ESP32-B2', type: 'Conexión Perdida', time: '02:15 PM' },
]

const espStatusSummary = [
    { status: 'Normal', count: 90 },
    { status: 'Advertencia', count: 7 },
    { status: 'Crítico', count: 3 },
]

function Monitoring() {
    return (
        <>
            <header className='mb-6'>
                <h2 className="text-3xl font-semibold">Dashboard</h2>
            </header>

            <div className="container mx-auto space-y-6">
                {/* Resumen de estadísticas */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <article className="bg-white p-4 rounded-lg shadow-lg">
                        <header className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <h2 className="text-sm font-medium">Total ESP32</h2>
                            <span className="h-4 w-4 text-muted-foreground">
                                {/* Icono de termómetro */}
                                <ThermometerIcon className="h-4 w-4 text-muted-foreground" />
                            </span>
                        </header>
                        <div>
                            <p className="text-2xl font-bold">10</p>
                            <p className="text-xs text-muted-foreground">Dispositivos activos</p>
                        </div>
                    </article>

                    <article className="bg-white p-4 rounded-lg shadow-lg">
                        <header className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <h2 className="text-sm font-medium">Temperatura Promedio</h2>
                            <span className="h-4 w-4 text-muted-foreground">
                                {/* Icono de termómetro */}
                                <ThermometerIcon className="h-4 w-4 text-muted-foreground" />
                            </span>
                        </header>
                        <div>
                            <p className="text-2xl font-bold">
                                10°C
                            </p>
                            <p className="text-xs text-muted-foreground">En todos los dispositivos</p>
                        </div>
                    </article>

                    <article className="bg-white p-4 rounded-lg shadow-lg">
                        <header className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <h2 className="text-sm font-medium">Batería Promedio</h2>
                            <span className="h-4 w-4 text-muted-foreground">
                                {/* Icono de batería */}
                                <BatteryIcon className="h-4 w-4 text-muted-foreground" />
                            </span>
                        </header>
                        <div>
                            <p className="text-2xl font-bold">
                                65%
                            </p>
                            <p className="text-xs text-muted-foreground">Nivel de carga</p>
                        </div>
                    </article>

                    <article className="bg-white p-4 rounded-lg shadow-lg">
                        <header className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <h2 className="text-sm font-medium">Alertas Hoy</h2>
                            <span className="h-4 w-4 text-muted-foreground">
                                {/* Icono de alerta */}
                                <AlertTriangleIcon className="h-4 w-4 text-muted-foreground" />
                            </span>
                        </header>
                        <div>
                            <p className="text-2xl font-bold">3</p>
                            <p className="text-xs text-muted-foreground">Requieren atención</p>
                        </div>
                    </article>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 my-6">
                <div className="col-span-1 bg-white p-4 rounded-lg shadow-lg">
                    <header className="mb-4">
                        <h2 className="text-lg font-semibold">Tendencia de Temperatura</h2>
                        <p className="text-gray-500 text-sm">Promedio de las últimas 24 horas</p>
                    </header>
                    <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={temperatureData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="time" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="avgTemp" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="col-span-1 bg-white p-4 rounded-lg shadow-lg">
                    <header className="mb-4">
                        <h2 className="text-lg font-semibold">Alertas Recientes</h2>
                        <p className="text-gray-500 text-sm">Últimas alertas del sistema</p>
                    </header>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2">Dispositivo</th>
                                <th className="py-2">Tipo</th>
                                <th className="py-2">Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentAlerts.map((alert) => (
                                <tr key={alert.id} className="border-b">
                                    <td className="py-2">{alert.device}</td>
                                    <td className="py-2">{alert.type}</td>
                                    <td className="py-2">{alert.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
                <header className="mb-4">
                    <h2 className="text-lg font-semibold">Resumen de Estado de las ESP32</h2>
                    <p className="text-gray-500 text-sm">Distribución del estado de los dispositivos</p>
                </header>
                <div className="flex justify-between items-center">
                    {espStatusSummary.map((status, index) => (
                        <div key={index} className="text-center">
                            <p className="text-2xl font-bold">{status.count}</p>
                            <span
                                className={`mt-1 inline-block px-2 py-1 rounded-full text-xs font-semibold border border-gray-300 text-gray-700`}
                            >
                                {status.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Monitoring