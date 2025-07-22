import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from 'next/font/google';
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav'
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import { Toaster } from "react-hot-toast";

const font = Poppins({
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Travel App",
  description: "Travel App landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      > 
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
        <Toaster
          toastOptions={{
            className:"",
            style:{
              fontSize:'13px'
            },
          }}
        />
      </body>
    </html>
  );
}
