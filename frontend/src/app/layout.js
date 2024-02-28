import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({ subsets: ["latin"] });

import Footer from "@/components/Footer";
import {StoreProvider} from "@/Store/StoreProvider";


export const metadata = {
  title: "Ekhonni",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
      <StoreProvider>
          <html lang="en">
              <body className={montserrat.className}>
                  {children}
                  <Footer/>
              </body>
          </html>
      </StoreProvider>
  );
}
