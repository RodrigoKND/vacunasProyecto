function FormAddVaccine() {
    return (
        <form className="mt-4">
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="vaccine-name" className="text-right">
                        Nombre
                    </label>
                    <input id="vaccine-name"
                        className="col-span-3 border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="temp-range-min" className="text-right">
                        Temp. Minima
                    </label>
                    <input id="temp-range-min" type="number"
                        placeholder="°C"
                        className="col-span-3 border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2" />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="temp-range-max" className="text-right">
                        Temp. Máxima
                    </label>
                    <input id="temp-range-max" type="number"
                        placeholder="°C"
                        className="col-span-3 border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2" />
                </div>

            </div>
            <footer className="flex justify-end mt-4">
                <button type="submit" className="bg-black flex items-center text-white font-medium rounded-lg px-4 py-2">
                    Agregar Esp32
                </button>
            </footer>
        </form>
    )
}

export default FormAddVaccine