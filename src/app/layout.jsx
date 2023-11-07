import "./globals.css";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import CustomNavbar from "@/components/navbar";
import CustomFooter from "@/components/footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Ibadahku",
  description: "Ibadah yu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomNavbar />
        {children}
        <CustomFooter />
      </body>
    </html>
  );
}
