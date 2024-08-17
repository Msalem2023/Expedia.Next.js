import Image from "next/image"
import { Deals as Ads } from "./Data"
import Slider from "./Slider"

const Deals = () => {
    return (
        <div className="relative h-[400px] lg:h-[810px]">
            {/* Background Image */}
            <Image
                className="w-full h-full rounded-xl object-cover opacity-100"
                src="https://forever.travel-assets.com/flex/flexmanager/mediaasset/714087-0_2-BEX_GO_Alps_Therin-00539RGB.jpg?impolicy=fcrop&w=1200&h=514&p=1&q=high"
                alt="Scenic view"
                layout="fill"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 lg:p-8">
                {/* Header Section */}
                <div className="bg-[linear-gradient(to_top,rgba(1,82,66,0.8)_0%,transparent_100%)] p-4 rounded-lg">
                    <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center">
                        <p className="text-white text-xl lg:text-3xl font-bold">Last-minute deals</p>
                        <button className="bg-white text-sky-600 text-md lg:text-xl font-semibold p-2 lg:p-4 rounded-full mt-2 lg:mt-0 lg:hidden">
                            See all deals
                        </button>
                    </div>
                </div>

                {/* Slider Section */}
                <div className="flex-1 flex items-end">
                    <div className="bg-[rgba(1,82,66,0.8)] p-4 rounded-lg w-full">
                        <Slider Image={Ads} />
                    </div>
                </div>

                {/* Button for Large Screens */}
                <button className="bg-white text-sky-600 text-md lg:text-xl font-semibold p-2 lg:p-4 rounded-full hidden lg:block self-end mb-4">
                    See all deals
                </button>
            </div>
        </div>



    )
}
export default Deals