import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
    {
        name: 'Temperatura Promedio',
        value: '2.8°C',
        color: 'text-blue-600',
    },
    {
        name: 'Temperatura Máxima',
        value: '3.2°C',
        color: 'text-red-600',
    },
    {
        name: 'Temperatura Minima',
        value: '2.5°C',
        color: 'text-green-600',
    },
    {
        name: 'Desviación Estándar',
        value: '0.2°C',
        color: 'text-purple-600',
    }
]

const historyData = [
    { date: '2023-01-01', avgTemp: 2.7 },
    { date: '2023-01-02', avgTemp: 2.8 },
    { date: '2023-01-03', avgTemp: 2.6 },
    { date: '2023-01-04', avgTemp: 2.9 },
    { date: '2023-01-05', avgTemp: 3.0 },
    { date: '2023-01-06', avgTemp: 2.8 },
    { date: '2023-01-07', avgTemp: 2.7 },
    { date: '2023-01-08', avgTemp: 2.6 },
]

function History() {
    return (
        <>
            <header className='mb-6'>
                <search>
                    <input
                        placeholder="Buscar por ID o nombre de ESP32"
                        className="border border-solid border-gray-300 px-4 py-2 w-full"
                    />
                </search>
            </header>
            <div className="bg-white p-6 mb-8">
                <div className='mb-4'>
                    <h3 className="text-2xl font-semibold">Historial de Temperatura</h3>
                    <p className="text-gray-500 text-sm mt-2">Últimos 7 días</p>
                </div>
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={historyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="avgTemp" stroke="#60a5fa" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 w-auto">
                <h3 className="text-2xl font-semibold">Estadisticas de Temperatura</h3>
                <div className="grid mt-3 grid-cols-2 gap-4">
                    {
                        data.map((item, index) => (
                            <div key={index}>
                                <p className="text-gray-500 text-sm font-medium">{item.name}</p>
                                <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default History