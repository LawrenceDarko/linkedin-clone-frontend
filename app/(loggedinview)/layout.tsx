import { Navbar } from "../Components/common/navbar";
import { ThemeProvider } from "../Components/theme-provider";


export default function InAppViewLayout({children}: {children: React.ReactNode}){
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="h-[60px] fixed inset-x-0 w-full z-20">
                <Navbar />
            </div>
            <div className="pt-[60px]">
                {children}
            </div>
        </ThemeProvider>
    )
}