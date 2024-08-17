"use client"
import "./globals.css";
import { FilterProvider } from "./FilterReducer";
import { AppProvider } from "./reducer";
import { DataProvider } from "./Context";
import OptionModal from "./Modal/Option";
import DateModal from "./Modal/DateModal";
import { Toaster } from "react-hot-toast";
import ToasterProvider from "./providers/Providers";
import Footer from "./components/footer";
import RentModal from "./Modal/ListYourProperty";
import DestinationModal from "./Modal/DestinationModal";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body >

        <DataProvider>
          <FilterProvider>
            <AppProvider>
              <ToasterProvider/>
              <RentModal/>
              <OptionModal/>
              <DestinationModal/>
              <DateModal/>

              <div className="py-20">
              {children}
              </div>
              <Footer/>
            </AppProvider>
          </FilterProvider>
        </DataProvider>
      </body>
    </html>
  );
}
