import MyNetworkSidebar from "@/app/Components/common/MyNetworkSidebar";
import Footer from "../../Components/Footer";
import { Navbar } from "../../Components/common/navbar";
import SidebarLeft from "../../Components/common/sidebar-left";
import SidebarRight from "../../Components/common/sidebar-right";

export default function MyNetworkLayout({children}: {children: React.ReactNode;}) {

    return (
    <div className="flex gap-[21px] justify-center w-full">
        <div className="pt-3 relative inset-y-0 z-20 flex-col hidden w-[301px] h-full md:flex">
            <MyNetworkSidebar />
        </div>
        <div className="mt-3 md:w-[806px] w-full">
            {children}
        </div>
    </div>
    );
}