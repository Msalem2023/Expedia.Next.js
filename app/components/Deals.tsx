import Image from "next/image";
import { Deals as Ads } from "./Data";
import Slider from "./Slider";

const Deals = () => {
    return (
        <div className="relative w-full h-auto lg:h-[800px]">
            <Image
                className="w-full h-auto lg:h-full object-cover rounded-xl"
                src="https://forever.travel-assets.com/flex/flexmanager/mediaasset/714087-0_2-BEX_GO_Alps_Therin-00539RGB.jpg?impolicy=fcrop&w=1200&h=514&p=1&q=high"
                alt="Scenic view"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 lg:p-8 bg-[rgba(1,82,66,0.8)]">
                <p className="text-white text-2xl lg:text-3xl font-bold text-center mb-4">Last-minute deals</p>
                <button className="bg-white text-sky-600 text-sm lg:text-xl font-semibold p-2 lg:p-4 rounded-full mb-4 lg:mb-6">
                    See all deals
                </button>
                <div className="w-full lg:w-[80%] xl:w-[70%]">
                    <Slider Image={Ads} />
                </div>
            </div>
        </div>
    );
};

export default Deals;
