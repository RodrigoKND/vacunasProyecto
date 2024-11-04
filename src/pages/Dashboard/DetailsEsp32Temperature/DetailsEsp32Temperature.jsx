import { ArrowLeftIcon } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { Bar, Legend, ResponsiveContainer, Tooltip, XAxis, BarChart } from "recharts"

const temperatureData = [
    { time: '00:00', temp: 2.5 },
    { time: '04:00', temp: 2.7 },
    { time: '08:00', temp: 3.1 },
    { time: '12:00', temp: 2.9 },
    { time: '16:00', temp: 2.8 },
    { time: '20:00', temp: 2.6 },
]
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

function DetailsEsp32Temperature() {
    const param = useParams()
    const espName = param.esp32name
    return (
        <>
            <header className='mb-6'>
                <div className='mb-6'>
                    <Link to={`/esp32/${espName}`}>
                        <ArrowLeftIcon className='w-6 h-6 text-gray-500' />
                    </Link>
                </div>
                <h2 className="text-3xl font-semibold">{espName}</h2>
            </header>

            <article className="bg-white w-full rounded-lg shadow-md cursor-pointer">
                <Link to={`/temperature/${espName}`}>
                    <div className='p-6'>
                        <h3 className="text-2xl font-semibold">Temperatura</h3>
                        <p className="text-gray-500 text-sm mt-2">Últimas 24 horas</p>
                    </div>
                    <div className='h-[350px] p-2'>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={temperatureData}
                                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                <XAxis dataKey="time" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="temp" fill="#3D81F3" />
                            </BarChart>
                        </ResponsiveContainer>

                    </div>
                </Link>
            </article >

            <div className="bg-white rounded-lg shadow-md p-6 w-auto mt-6">
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

export default DetailsEsp32Temperature