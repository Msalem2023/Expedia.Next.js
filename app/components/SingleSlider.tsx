import Image from 'next/image';
import { useState } from 'react';
import { BiHeart } from 'react-icons/bi';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

interface SingleProps {
    image: string[];
    discription?: boolean;
    City?: string;
    Name?: string;
    rate?: number;
    price?: number;
    Stay?: number;
    PricePernight?: number;
    discount?: number;
    taxes?: string;
}

const Single: React.FC<SingleProps> = ({
    image,
    discription,
    price,
    Stay,
    PricePernight,
    taxes,
    discount,
    rate,
    City,
    Name
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const PricePerNight = PricePernight ?? 0;
    const stay = Stay ?? 0;
    const discountValue = discount ?? 0;
    const finalPrice = PricePerNight * stay * (1 - discountValue / 100);

    const handleRight = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === image.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleLeft = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? image.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full">
            <div className="relative w-full h-[300px] max-w-full overflow-hidden">
                <div className="relative flex items-center w-full h-full">
                    {image.length > 1 && (
                        <MdArrowBackIosNew
                            onClick={handleLeft}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 z-50"
                            size={30}
                            color="black"
                        />
                    )}
                    <BiHeart className="absolute top-2 right-2 text-rose-500 bg-white rounded-full p-2" size={30} />
                    <div className="w-full h-full">
                        <Image
                            className="w-full h-full object-cover rounded-lg"
                            src={image[currentIndex]}
                            alt="Explore"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    {image.length > 1 && (
                        <MdArrowForwardIos
                            onClick={handleRight}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 z-50"
                            size={30}
                            color="black"
                        />
                    )}
                </div>
            </div>
            {Name && (
                <div className="p-4">
                    <p className="text-white font-semibold text-lg">{City}</p>
                    <h5 className="text-xl text-white font-bold pt-2">{Name}</h5>
                    <p className="text-white font-semibold text-lg">{rate}/10.0</p>
                    <h5 className="text-xl text-white font-bold pt-2">EGP {finalPrice.toFixed(2)}</h5>
                    <p className="text-white font-semibold text-lg">Price Per Night: EGP {PricePernight}</p>
                    <p className="text-white font-semibold text-lg">for {Stay} Nights</p>
                    <p className="text-white font-semibold text-lg">{taxes} taxes & fees</p>
                    <p className="text-white font-semibold text-lg bg-green-500 w-1/3 text-center rounded-lg px-2 py-1">{discount}% off</p>
                </div>
            )}
        </div>
    );
};

export default Single;
