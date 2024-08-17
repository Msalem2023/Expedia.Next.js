import { BiDrink, BiLike, BiRestaurant, BiWalk } from "react-icons/bi"
import { FaSwimmer } from "react-icons/fa"
import { IoArrowForwardOutline, IoDiamond } from "react-icons/io5"
import { MdFreeBreakfast, MdOutlinePets, MdSpa } from "react-icons/md"

interface InfoProps{
    Name:string,
    Review:number,
    Rating:string|undefined,
    NumberOfReviews:number,
    describtion:string|undefined
}

const HotelInfo:React.FC<InfoProps> = ({Name,Review,Rating,NumberOfReviews,describtion}) => {
    const style = "flex items-center gap-3 text-lg text-dark-900 py-2"

    return (
        <>
            <h3 className="font-bold text-2xl ">{Name}</h3>
            <p>{describtion}</p>
            <div className="flex flex-row gap-2 mt-4">
                <p className="bg-green-500 text-center rounded-lg text-white gap-3 px-3 py-1">{Review}</p>
                <p className="font-bold text-xl py-1 ">{Rating?.toUpperCase()}</p>
            </div>
            <a href="#" className="mt-5 text-sky-600 hover:underline flex items-center gap-3" >See all {NumberOfReviews} reviews <IoArrowForwardOutline size={20} /> </a>
            <h3 className="text-xl font-bold my-3">Highlights</h3>
            <div className="w-full lg:w-3/6 p-3 rounded-lg bg-blue-600 opacity-70 my-2">
                <p className="flex items-center gap-3 text-lg text-dark-900" ><IoDiamond size={24} /> Pool - a rare find in Berlin!</p>
            </div>
            <div className="w-full lg:w-3/6 p-3 rounded-lg bg-blue-600 opacity-70 my-2">
                <p className="flex items-center gap-3 text-lg text-dark-900" ><BiLike size={24} /> Pool - a rare find in Berlin!</p>
            </div>
            <div className="w-full lg:w-3/6 p-3 rounded-lg bg-blue-600 opacity-70 my-2">
                <p className="flex items-center gap-3 text-lg text-dark-900" ><BiWalk size={24} /> Near Checkpoint Charlie</p>
            </div>
            <h3 id="amenities" className="text-xl font-bold my-3">Popular Amenties</h3>
            <div className="flex flex-row justify-between mt-4 w-full lg:w-3/6">
                <div >
                    <p className={`${style}`} ><BiRestaurant size={30} /> Restaurant</p>
                    <p className={`${style}`} ><MdOutlinePets size={30} /> Pet friendly</p>
                    <p className={`${style}`} ><MdFreeBreakfast size={30} /> Breakfast</p>
                </div>
                <div>
                    <p className={`${style}`} ><FaSwimmer size={24} /> Pool</p>
                    <p className={`${style}`}><BiDrink size={24} /> Bar</p>
                    <p className={`${style}`} ><MdSpa size={24} /> Spa</p>
                </div>
            </div>
        </>

    )
}

export default HotelInfo