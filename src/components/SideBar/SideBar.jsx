import { Bars3Icon } from '@heroicons/react/24/outline'
import Profile from '../user/Profile'
import Navigation from './Navigation'
import { useState } from 'react'

function SideBar() {
    const [visibilityMenu, setVisibilityMenu] = useState('-translate-x-full');

    const handleMenu = () => {
        setVisibilityMenu(prev => prev === '-translate-x-full' ? 'translate-x-0' : '-translate-x-full');
    };

    const isVisible = visibilityMenu === 'translate-x-0';
    return (
        <>
            <div className='lg:hidden fixed z-30 top-4 right-4'>
                <button className={`p-4 text-white ${isVisible ? "bg-gray-700": "bg-gray-800"} rounded-full`}
                    onClick={handleMenu}>
                    <Bars3Icon className="w-6 h-6" />
                </button>
            </div>
            {
                isVisible && (
                    <div
                        className="absolute inset-0 z-20 bg-gray-500 opacity-50 lg:hidden cursor-pointer"
                        onClick={handleMenu}
                    ></div>
                )
            }

            <aside
                className={`${visibilityMenu} fixed lg:relative z-20 lg:translate-x-0 h-screen max-h-screen transition-transform xl:w-1/4 xl:block bg-gray-800 shadow-md overflow-y-auto overflow-x-hidden`}>
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-blue-400">VacciTemp</h1>
                    <Profile />
                </div>
                <Navigation />
            </aside>

        </>
    )
}

export default SideBar