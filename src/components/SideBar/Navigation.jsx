import { useState } from "react"
import { Link } from "react-router-dom"
import {
    Battery100Icon, BellAlertIcon, ChartBarSquareIcon, ClipboardDocumentCheckIcon,
    ClockIcon, Cog6ToothIcon, DocumentMagnifyingGlassIcon, QuestionMarkCircleIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline"

const navigation = [
    {
        icon: <Battery100Icon className="h-6 w-6 me-2" />,
        label: "Monitoreo en Tiempo Real",
        key: "dashboard",
        basename: "/dashboard"
    },
    {
        icon: <DocumentMagnifyingGlassIcon className="h-6 w-6 me-2" />,
        label: "Gestión de Esp32 y Vacunas",
        key: "management",
        basename: "/management"
    },
    // {
    //     icon: <ClockIcon className="h-6 w-6 me-2" />,
    //     label: "Historial de Temperatura",
    //     key: "history",
    //     basename: "/history"
    // },
    {
        icon: <BellAlertIcon className="h-6 w-6 me-2" />,
        label: "Alarmas y Notificaciones",
        key: "alarms",
        basename: "/alarms"
    },
    {
        icon: <UserCircleIcon className="h-6 w-6 me-2" />,
        label: "Gestión de Usuarios",
        key: "users",
        basename: "/users"
    },
    {
        icon: <Cog6ToothIcon className="h-6 w-6 me-2" />,
        label: "Configuración del Sistema",
        key: "config",
        basename: "/config"
    },
    {
        icon: <ClipboardDocumentCheckIcon className="h-6 w-6 me-2" />,
        label: "Reportes y Exportación",
        key: "reports",
        basename: "/reports"
    },
    {
        icon: <QuestionMarkCircleIcon className="h-6 w-6 me-2" />,
        label: "Soporte y Mantenimiento",
        key: "support",
        basename: "/support"
    }
]


function Navigation() {
    const [activeSection, setActiveSection] = useState('dashboard')
    return (
        <nav className="mb-10">
            {navigation.map((item) => (
                <Link
                    key={item.key}
                    to={item.basename}
                    className={`flex items-center text-sm px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white ${activeSection === item.key ? 'bg-gray-700 text-white' : ''
                        }`}
                    onClick={() => setActiveSection(item.key)}
                >
                    {item.icon}
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}

export default Navigation