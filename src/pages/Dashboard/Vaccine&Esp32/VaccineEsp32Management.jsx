import { useState } from "react"
import Esp32 from "./Esp32/Esp32"
import Vaccine from "./Vaccine/Vaccine"

const optionsNavigation = [
    {
        key: 'ESP32',
        name: 'ESP32',
    },
    {
        key: 'Vacunas',
        name: 'Vacunas',
    },
]

function VaccineEsp32Management() {
    const [activeTab, setActiveTab] = useState('Esp32')
    //Esto es para verificar si pasan bien el nombre de la ESP32, ya que puede ser esp o Esp p ESP
    const pagePrincipal = 'ESP32'.toUpperCase()
    const mayuscActiveTab = activeTab.toUpperCase()
    return (
        <>
            <div className="flex flex-row gap-4 justify-center">
                <div className="bg-white p-6 lg:mb-8 mb-4 rounded-lg shadow-lg w-full lg:w-1/2">
                    <h3 className="text-2xl font-semibold">Total de ESP32</h3>
                    <p className="text-gray-500 text-md mt-2">
                        10 dispositivos conectados
                    </p>
                </div>
                <div className="bg-white p-6 lg:mb-8 mb-4 rounded-lg shadow-lg w-full lg:w-1/2">
                    <h3 className="text-2xl font-semibold">Total de Vacunas</h3>
                    <p className="text-gray-500 text-md mt-2">
                        10 vacunas registradas
                    </p>
                </div>
            </div>

            <div className="bg-white p-6 mb-8 rounded-lg shadow-md">
                <div className='mb-4'>
                    <h3 className="text-2xl font-semibold">Gestión de ESP32 y Vacunas</h3>
                    <p className="text-gray-500 text-sm mt-2">
                        Administrar dispositivos ESP32 y sus vacunas asociadas
                    </p>
                </div>

                {/*Listado de ESP32 y Vacunas - Tabs*/}
                <div className="bg-gray-100 shadow-md w-max my-4 space-y-4">
                    <ul className="flex font-medium text-sm p-1">
                        {
                            optionsNavigation.map((item) => (
                                <li key={item.key}
                                    onClick={() => setActiveTab(item.key)}
                                    className={
                                        `
                                        cursor-pointer px-4 py-2
                                        ${mayuscActiveTab === item.key.toUpperCase() ? "bg-white" : "text-gray-400"}
                                        `
                                    }>
                                    {item.name}
                                </li>
                            ))
                        }

                    </ul>
                </div>
                {
                    mayuscActiveTab === pagePrincipal ? <Esp32 /> : <Vaccine />
                }

            </div>

        </>
    )
}

export default VaccineEsp32Management