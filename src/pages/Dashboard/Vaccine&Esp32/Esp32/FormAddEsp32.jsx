import { XMarkIcon } from "@heroicons/react/24/outline"

function FormAddESP32() {
    return (
        <form className="mt-4">
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="esp-id" className="text-right">
                        ID
                    </label>
                    <input id="esp-id"
                        className="col-span-3 border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="esp-name" className="text-right">
                        Nombre
                    </label>
                    <input id="esp-name" className="col-span-3 border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2" />
                </div>

                {/*Select */}
                <div className="grid grid-cols-4 items-center gap-4 w-full">
                    <label htmlFor="esp-responsible" className="text-right">
                        Encargado
                    </label>
                    <select id="esp-responsible"
                        className="border cursor-pointer border-solid border-gray-300 col-span-3 rounded-lg shadow-sm px-4 py-2">
                        <option value="Select a Responsible" disabled>Selecciona un responsable</option>
                        <option value="juan">Juan Pérez</option>
                        <option value="maria">María García</option>
                        <option value="carlos">Carlos Rodríguez</option>
                    </select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="esp-vaccine" className="text-right">
                        Vacuna
                    </label>
                    <select id="esp-vaccine"
                        className="border cursor-pointer col-span-3 border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2">
                        <option value="Select a Vaccine" disabled>Selecciona una vacuna</option>
                        <option value="covid-19">Covid 19</option>
                        <option value="hepatitis-a">Hepatitis A</option>
                        <option value="hepatitis-b">Hepatitis B</option>
                    </select>
                </div>
            </div>
            <footer className="flex justify-end mt-4">
                <button type="submit"
                    className="bg-black flex items-center text-white font-medium rounded-lg px-4 py-2">
                    Agregar Esp32
                </button>
            </footer>
        </form>
    )
}

export default FormAddESP32