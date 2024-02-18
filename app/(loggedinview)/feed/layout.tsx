import Footer from "../../Components/Footer";
import { Navbar } from "../../Components/common/navbar";
import SidebarLeft from "../../Components/common/sidebar-left";
import SidebarRight from "../../Components/common/sidebar-right";

export default function FeedLayout({children}: {children: React.ReactNode;}) {

    return (
    <div className="w-full flex gap-[21px] justify-center">
        <div className="pt-3 inset-y-0 z-10 flex-col hidden flex-[0.3] h-full md:flex">
            <SidebarLeft />
        </div>
        <div className="mt-3 md:w-[556px] w-full">
            {children}
        </div>
        <div className="pt-3 inset-y-0 z-10 flex-col hidden w-[301px] h-full md:flex">
            <SidebarRight />
            {/* <Footer /> */}
        </div>
    </div>
    );
}