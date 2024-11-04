import { useState } from "react";
import { PencilSquareIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline"
import FormAddVaccine from "./FormAddVaccine";
import Modal from "../../../../components/ui/Modal";

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
        name: 'Acciones',
        value: '5',
    }


]


const tbody = [
    {
        ID: 'VACC-01',
        name: 'COVID-19',
        responsible: 'Juan Pérez',
        vaccine: 'COVID-19',
        actionEdit: true,
        actionDelete: true,
    },
    {
        ID: 'VACC-02',
        name: 'Hepatitis A',
        responsible: 'María García',
        vaccine: 'Hepatitis A',
        actionEdit: true,
        actionDelete: true,
    }
]

function Vaccine() {
    const [isAddingVaccine, setIsAddingVaccine] = useState(false);
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
                <button onClick={() => setIsAddingVaccine(true)}
                    className="bg-black flex items-center text-white font-medium rounded-lg px-4 py-2">
                    <PlusIcon className="w-5 h-5 mr-1" />
                    Vacuna
                </button>
            </div>
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
                                    <td className="py-2 px-4 border-b">{item.ID}</td>
                                    <td className="py-2 px-4 border-b">{item.name}</td>
                                    <td className="py-2 px-4 border-b">{item.responsible}</td>
                                    <td className="py-2 px-4 border-b">{item.vaccine}</td>
                                    <td
                                        className="py-2 px-4 border-b flex">
                                        <button
                                            className="mr-2 w-full flex items-center justify-center border border-gray-400 px-2 rounded-lg hover:bg-gray-200 py-1">
                                            <PencilSquareIcon className="h-4 w-4 mr-1" />
                                            Editar
                                        </button>
                                        <button className="w-full border border-gray-400 px-2 rounded-lg flex items-center justify-center hover:bg-gray-200 py-1">
                                            <TrashIcon className="h-4 w-4 mr-1" />
                                            Eliminar
                                        </button>

                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

            <Modal isVisible={isAddingVaccine} setIsVisible={setIsAddingVaccine}
                textTitle={"Agregar Nueva Vacuna"}
                textParagraph={"Ingrese los detalles de la nueva vacuna"}>
                <FormAddVaccine />
            </Modal>
        </>
    )
}

export default Vaccine