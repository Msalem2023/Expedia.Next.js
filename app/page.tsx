"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Trip from "./components/Trip";
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
          <Swipper image={Discover.map((e) => (e.Img))} />
        </div>
        <div className="w-full">
          <Deals />
        </div>

    </div>
  );
}
