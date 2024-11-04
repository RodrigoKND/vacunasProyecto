import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link, useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const temperatureData = [
    { time: '00:00', temp: 2.5 },
    { time: '04:00', temp: 2.7 },
    { time: '08:00', temp: 3.1 },
    { time: '12:00', temp: 2.9 },
    { time: '16:00', temp: 2.8 },
    { time: '20:00', temp: 2.6 },
]

function DetailsEsp32() {
    const param = useParams()
    const espName = param.name
    return (
        <>
            <header className='mb-6'>
                <div className='mb-6'>
                    <Link to='/management'>
                        <ArrowLeftIcon className='w-6 h-6 text-gray-500' />
                    </Link>
                </div>
                <h2 className="text-3xl font-semibold">{espName}</h2>
            </header>

            <div className='flex flex-col lg:flex-row gap-4 mb-4 w-full'>
                <article className="bg-white lg:w-2/4 w-full rounded-lg shadow-md cursor-pointer">
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
                </article>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full lg:grid-cols-2 mb-6">
                    <div
                        className="bg-white rounded-lg col-span-12 lg:col-span-6 shadow-md p-6 flex flex-col items-center">
                        <h3 className="text-2xl font-semibold">Temperatura Actual</h3>
                        <p className="text-gray-500 text-sm my-2">Monitoreo en Tiempo Real</p>
                        <div className="text-4xl font-bold text-blue-600 lg:mt-6">2.8°C</div>
                        {/*Acá se muestra el Rango de la Temperatura*/}
                        <div className="w-full bg-gray-200 rounded-full h-4 my-4">
                            <div className="bg-blue-500 h-4 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                        <p className="text-gray-500 text-sm">Dentro del rango óptimo</p>
                    </div>

                    <div className="bg-white rounded-lg col-span-12 lg:col-span-6 shadow-md p-6">
                        <header className='flex items-center justify-between w-full'>
                            <h3 className="text-sm font-medium">ESP32-A1</h3>
                            <div className='flex items-center space-x-2'>
                                <p className="text-sm font-bold">ESP32-001</p>
                                <div className='rounded-full bg-green-300 p-2'></div>
                            </div>
                        </header>
                        <p className="text-gray-500 text-sm my-2">Diagnóstico general</p>
                        <div className="flex flex-col justify-between text-md gap-2 text-muted mt-6">
                            <p>
                                Rango: 2 °C - 10 °C
                            </p>
                            <span>Batería: 95%</span>
                            <div className="flex items-center justify-between font-medium">
                                <span>Responsable:</span>
                                <p>Carlos Rodríguez</p>
                            </div>
                            <div className="flex items-center font-medium justify-between">
                                <span>Vacuna:</span>
                                <p>Hepatitis A</p>
                            </div>
                            <span>Última actualización: {new Date().toLocaleTimeString()}</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg col-span-12 shadow-md p-6">
                        <header className='flex items-center justify-between w-full'>
                            <h3 className="text-sm font-medium">ESP32-A1</h3>
                            <p className="text-sm font-bold">ESP32-001</p>
                        </header>
                        <p className="text-gray-500 text-sm my-2">Alertas Recientes - últimas 24 horas </p>
                        <div className="mt-6">
                            <div className="flex items-center justify-between">
                                <span className="text-yellow-600 font-semibold">Temperatura Alta</span>
                                <span className="text-sm text-gray-500">Hace 2 horas</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-green-700 font-semibold">Resuelta</span>
                                <span className="text-sm text-gray-500">Hace 1 hora</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex justify-between gap-6 w-full flex-col mb-3 lg:flex-row'>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-2xl font-semibold">Control de Temperatura</h3>
                    <p className="text-gray-500 text-sm mt-2">Ajuste Manual del Sistema</p>
                    <form className="space-y-2 mt-6">
                        <div className="flex lg:items-baseline items-center space-x-4 my-4">
                            <div>
                                <label htmlFor="temperature" className="font-medium text-sm">Temperatura Deseada</label>
                                <input type="number"
                                    id="temperature"
                                    className="w-full placeholder:text-black text-gray-700 border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2"
                                    placeholder="2.8 °C" />
                            </div>
                        </div>

                        <button className="bg-black text-white font-medium rounded-lg px-4 py-2">
                            Aplicar Cambios
                        </button>
                    </form>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-2xl font-semibold">Programación de Temperatura</h3>
                    <p className="text-yellow-700 text-sm font-medium">Se seleccionó la Esp32-A</p>
                    <form className="space-y-4">
                        <div className="grid grid-cols-3 items-end gap-4 my-4">
                            <div>
                                <label htmlFor="start-time">Hora de Inicio</label>
                                <input id="start-time" type="time" className="border border-gray-400 rounded-md px-2 w-full py-1" />
                            </div>
                            <div>
                                <label htmlFor="end-time">Hora de Fin</label>
                                <input id="end-time" type="time" className="border border-gray-400 rounded-md px-2 w-full py-1" />
                            </div>
                            <div>
                                <label htmlFor="scheduled-temp">Temperatura</label>
                                <input id="scheduled-temp" type="number" placeholder="2.8" className="border border-gray-400 rounded-md px-2 w-full py-1" />
                            </div>
                        </div>
                        <button className="bg-black text-white font-medium rounded-lg px-4 py-2">
                            Agregar Programación
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default DetailsEsp32