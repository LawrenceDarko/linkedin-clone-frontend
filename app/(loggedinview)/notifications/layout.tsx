import MyNetworkSidebar from "@/app/Components/common/MyNetworkSidebar";
import Footer from "../../Components/Footer";
import NotificationSidebar from "@/app/Components/common/NotificationSidebar";

export default function NotificationLayout({children}: {children: React.ReactNode;}) {

    return (
    <div className="w-full flex gap-[21px] justify-center">
        <div className="pt-3 inset-y-0 z-20 flex-col hidden w-[230px] h-full md:flex">
            <NotificationSidebar />
        </div>
        <div className="mt-3 md:w-[556px] w-full">
            {children}
        </div>
        <div className="pt-3 inset-x-0 z-20 flex-col hidden w-[301px] h-full md:flex">
            <Footer />
        </div>
    </div>
    );
}