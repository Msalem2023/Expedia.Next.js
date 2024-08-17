import Image from "next/image"
import { Deals as Ads } from "./Data"
import Slider from "./Slider"

const Deals = () => {
    return (
        <div className=" relative lg:h-[800px]">
            <Image className="w-full h-full rounded-xl object-cover opacity-100 "
                src="https://forever.travel-assets.com/flex/flexmanager/mediaasset/714087-0_2-BEX_GO_Alps_Therin-00539RGB.jpg?impolicy=fcrop&w=1200&h=514&p=1&q=high"
                alt="Scenic view" />
            <div className="absolute lg:top-20 top-5 left-0 right-0">
                <div className="flex flex-row justify-between  bg-[linear-gradient(to_top,rgba(1,82,66,0.8)_0%,transparent_100%)]">
                    <div>
                        <p className="text-white text-3xl font-bold p-2">Last-minute deals</p>
                    </div>
                    <div>
                        <button className="bg-white text-sky-600 text-xl font-semibold p-4 rounded-full hidden lg:block" >See all deals</button>
                    </div>
                    {/* <div className="  "> */}
                        <div className="flex h-full bg-[rgba(1,82,66,0.8)]">
                            <Slider Image={Ads} />
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>



    )
}
export default Deals