import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Components/common/navbar";
import { AuthContextProvider } from "./contexts/AuthContext";
import AllModals from "./Components/Modals/AllModals";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  title: "LinkedIn Clone",
  description: "This is an extensive LinkedIn Clone by Lawrence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthContextProvider>
      <html lang="en">
        <body className={`${roboto.className} bg-[#F4F2EE] dark:bg-black`}>
          <AllModals />
          {children}
        </body>
      </html>
    </AuthContextProvider>
  );
}
