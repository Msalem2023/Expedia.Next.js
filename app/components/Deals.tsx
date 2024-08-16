import { Deals as Ads } from "./Data"
import Slider from "./Slider"

const Deals = () => {
    const ad = Ads.map((e) => e)
    return (
        <div className=" relative h-[800px] ">
            <img className="w-full h-full rounded-xl object-cover opacity-100 "
                src="https://forever.travel-assets.com/flex/flexmanager/mediaasset/714087-0_2-BEX_GO_Alps_Therin-00539RGB.jpg?impolicy=fcrop&w=1200&h=514&p=1&q=high"
                alt="Scenic view" />
            <div className="absolute top-20 left-0 right-0">
                <div className="flex flex-row justify-between  bg-[linear-gradient(to_top,rgba(1,82,66,0.8)_0%,transparent_100%)]">
                    <div>
                        <p className="text-white text-3xl font-bold">Last-minute weekend deals</p>
                    </div>
                    <div>
                        <button className="bg-white text-sky-600 text-xl font-semibold p-4 rounded-full">See all deals</button>
                    </div>
                </div>
                <div className=" h-full  bg-[rgba(1,82,66,0.8)] ">
                    <div className="flex ">
                        <Slider Image={ad} />
                    </div>
                </div>
            </div>
        </div>



    )
}
export default Deals