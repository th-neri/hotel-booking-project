import React from 'react'
import { assets } from '../../assets/assets'
import Navbar from '../Navbar'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const sidebarLinks = [
        { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
        { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
        { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
    ]

    return (
        <div className='flex flex-col w-16 md:w-64 border-r border-gray-300 h-full text-base pt-4 transition-all duration-300'>
            {sidebarLinks.map((item, index) => (
                <NavLink to={item.path} key={index} end='/owner' className={({ isActive }) =>
                    `flex items-center py-3 px-4 md:px-8 gap-3 ${isActive ? "border-r-4 md:border-r-[6px] border-blue-600 bg-blue-600/10 text-blue-600" :
                        "hover:bg-gray-100/90 border-white text-gray-700"}`}>
                    <img src={item.icon} alt={item.name} className='min-w-6 min-h-6' />
                    <p className='md:block hidden text0center'>{item.name}</p>
                </NavLink>
            ))}
        </div>
    )
}

export default Sidebar
