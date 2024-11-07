
function UserManagement() {
    return (
        <div className="space-y-6 p-6">
            {/* Gestión de Usuarios */}
            <div className="bg-white shadow rounded-lg p-6">
                <div className="border-b pb-4 mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Gestión de Usuarios</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                    Nombre
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                    Correo
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                    Rol
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">Juan Pérez</td>
                                <td className="px-6 py-4 whitespace-nowrap">juan@ejemplo.com</td>
                                <td className="px-6 py-4 whitespace-nowrap">Administrador</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="hover:text-blue-900 text-sm border px-2 py-1 rounded">
                                        Editar
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">María García</td>
                                <td className="px-6 py-4 whitespace-nowrap">maria@ejemplo.com</td>
                                <td className="px-6 py-4 whitespace-nowrap">Personal</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="hover:text-blue-900 text-sm border px-2 py-1 rounded">
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Agregar Nuevo Usuario */}
            <div className="bg-white shadow rounded-lg p-6">
                <div className="border-b pb-4 mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Agregar Nuevo Usuario</h2>
                </div>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="new-user-name" className="block text-sm font-medium text-gray-700">
                                Nombre
                            </label>
                            <input
                                id="new-user-name"
                                type="text"
                                className="w-full placeholder:text-black text-gray-700 border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="new-user-email" className="block text-sm font-medium text-gray-700">
                                Correo
                            </label>
                            <input
                                id="new-user-email"
                                type="email"
                                className="w-full placeholder:text-black text-gray-700 border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="new-user-role" className="block text-sm font-medium text-gray-700">
                            Rol
                        </label>
                        <select
                            id="new-user-role"
                            className="w-full placeholder:text-black text-gray-700 border border-solid border-gray-300 rounded-lg shadow-sm px-4 py-2"
                        >
                            <option value="" disabled>
                                Seleccionar rol
                            </option>
                            <option value="admin">Administrador</option>
                            <option value="tech">Personal</option>
                            <option value="viewer">Transportista</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-black flex justify-center w-full mt-8 items-center text-white font-medium rounded-lg px-4 py-2"
                    >
                        Agregar Usuario
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UserManagement;
