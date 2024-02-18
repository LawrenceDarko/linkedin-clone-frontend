'use client'

import { usePathname } from "next/navigation"
import Link from "next/link";

// Icons
import { TiHome } from "react-icons/ti";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { GoBell } from "react-icons/go";
import { IoPersonCircleOutline } from "react-icons/io5";
import SidebarItem from "./sidebar-item";
import ToggleButton from "../ToggleButton";


const navRoutes = [
    {
        icon: TiHome,
        label: 'Home',
        href: '/feed'
    },
    {
        icon: BsFillPeopleFill,
        label: 'My Network',
        href: '/mynetwork'
    },
    {
        icon: MdBusinessCenter,
        label: 'Jobs',
        href: '/jobs'
    },
    {
        icon: HiOutlineChatBubbleOvalLeftEllipsis,
        label: 'Messages',
        href: '/messaging/thread'
    },
    {
        icon: GoBell,
        label: 'Notifications',
        href: '/notifications'
    },
    {
        icon: IoPersonCircleOutline,
        label: 'Me',
        // href: '/notifications'
    }
]


const NavbarRoutes = () => {

    
    return (
        <div className="flex justify-center items-center h-full gap-x-5">
            {navRoutes.map((route, index) => (
                <SidebarItem
                    key={index}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
            <ToggleButton />
        </div>
    )
}

export default NavbarRoutes