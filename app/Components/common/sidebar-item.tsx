'use client'

import { cn } from "@/lib/utils";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';
import { IconType } from "react-icons";


interface SidebarItemProps {
    icon: IconType
    label: string;
    href?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({icon: Icon, label, href}) => {

    const pathname = usePathname()
    const router = useRouter()

    const isActive = (pathname === '/' && href === '/') || pathname === href || pathname?.startsWith(`${href}/`)

    const onClick = () => {
        if(href){
            router.push(href);
        }
    }

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                'flex justify-center flex-col h-full items-center gap-x-2 text-slate-500 text-sm font-[500] transition-all hover:text-slate-900',
                isActive && "text-slate-900"
            )}
        >
            <div className="flex relative flex-col h-full justify-center items-center gap-x-1">
                <Icon
                    size={22}
                    className={cn('text-slate-500 hover:text-slate-900', isActive && 'text-slate-900 dark:text-white')}
                />
                <p className="whitespace-nowrap">{label}</p>

                <div className={cn('absolute bottom-0 w-full opacity-0 border-b-2 border-gray-700 h-full transition-all', isActive && 'opacity-100')}></div>
            </div>
            
        </button>
    )
}

export default SidebarItem