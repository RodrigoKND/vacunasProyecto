import { useState } from "react";
import { ArrowRightCircleIcon, PlusIcon } from "@heroicons/react/24/outline"
import Modal from "../../../../components/ui/Modal";
import FormAddESP32 from "./FormAddEsp32";
import { Link } from "react-router-dom";

const theader = [
    {
        name: 'ID',
        value: '1',
    },
    {
        name: 'Nombre',
        value: '2',
    },
    {
        name: 'Responsable',
        value: '3',
    },
    {
        name: 'Vacuna',
        value: '4',
    },
    {
        name: 'Rangos de Temperatura',
        value: '5',
    },
    {
        name: 'Detalles',
        value: '6',
    }


]


const tbody = [
    {
        ID: 'ESP-01',
        name: 'ESP-A',
        responsible: 'Carlos Rodriguez',
        vaccine: 'Covid 19',
        rangeTemperature: '20°C - 40°C'
    },
    {
        ID: 'ESP-02',
        name: 'ESP-B',
        responsible: 'Maria Garcia',
        vaccine: 'Hepatitis B',
        rangeTemperature: '25°C - 30°C'
    }
]

function Esp32() {
    const [isAddingESP32, setIsAddingESP32] = useState(false);
    return (
        <>
            {/*Campos de búsqueda y el botón de agregar nuevo ESP32*/}
            <div className="flex justify-between gap-14 lg:gap-0 mb-4 w-full">
                <div className="flex items-center space-x-2">
                    <input
                        placeholder="Buscar por ID o nombre"
                        className="w-full border border-solid border-gray-300 px-4 py-1"
                    />
                    <select className="border w-full border-solid border-gray-300 px-4 py-1">
                        <option value="filter by responsible" disabled hidden>Filtrar por responsable</option>
                        <option value="all">Todos</option>
                        <option value="Juan Pérez">Juan Pérez</option>
                        <option value="María García">María García</option>
                        <option value="Carlos Rodríguez">Carlos Rodríguez</option>
                    </select>
                </div>
                <button onClick={() => setIsAddingESP32(true)}
                    className="bg-black flex items-center text-white font-medium rounded-lg px-4 py-2">
                    <PlusIcon className="w-5 h-5 mr-1" />
                    ESP32
                </button>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr className="text-center">
                            {
                                theader.map((item, index) => (
                                    <th key={index} className="py-3 px-4 text-gray-600 font-semibold border-b">
                                        {item.name}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tbody.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100 cursor-pointer text-center">
                                    <td className="py-2 px-4 border-b">{item.ID}</td>
                                    <td className="py-2 px-4 border-b">{item.name}</td>
                                    <td className="py-2 px-4 border-b">{item.responsible}</td>
                                    <td className="py-2 px-4 border-b">{item.vaccine}</td>
                                    <td className="py-2 px-4 border-b">{item.rangeTemperature}</td>
                                    <td className="py-2 px-4 border-b flex justify-center">
                                        <Link to={`/esp32/${item.name}`}>
                                            <ArrowRightCircleIcon className="h-8 w-8 hover:text-blue-500 rounded-full" />
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

            {/*Modal para agregar nuevo ESP32*/}
            <Modal isVisible={isAddingESP32} setIsVisible={setIsAddingESP32}
                textTitle={"Agregar Nuevo ESP32"}
                textParagraph={"Ingrese los detalles del nuevo dispositivo ESP32"}>
                <FormAddESP32 />
            </Modal>
        </>
    )
}

export default Esp32