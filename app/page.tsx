"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Stays from "./components/Stays";
import Trip from "./components/Trip";
import { AppProvider } from "./reducer";
import Slider from "./components/Slider";
import Property from "./components/Property";
import Filter from "./components/Filter";
import { FilterProvider, useAppContext } from "./FilterReducer";
import DateSelector from "./components/Date";
import Deals from "./components/Deals";
import Swipper from "./components/swipper";
import { Discover } from "./components/Data";

export default function Home() {

  return (
    <div className="">
          <Navbar />
        <div className="m-10">
          <Trip />
        </div>
        <div>
          <h5 className="text-3xl font-bold p-5">Discover your new favourite stay</h5>
          <Swipper Image={Discover.map((e) => (e.Img))} />
        </div>
        <div className="w-full">
          <Deals />
        </div>

    </div>
  );
}
