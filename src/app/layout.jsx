import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import PrimaryNavbar from "@/components/PrimaryNavbar/PrimaryNavbar";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Dummy Shop",
  description: "A dummy e-commerce web site focus on designing",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ReduxProvider>
          <header className="space-y-5">
            <Navbar />
            <PrimaryNavbar />
          </header>
        </ReduxProvider>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
