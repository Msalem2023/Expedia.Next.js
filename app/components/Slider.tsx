import { useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import Single from './SingleSlider';

interface Ad {
    rate: number;
    taxes: string;
    Stay: number;
    discount: number;
    PricePernight: number;
    City: string;
    Name: string;
    Img: string[];
}

interface SingleProps {
    Image: Ad[];
}

const Slider: React.FC<SingleProps> = ({ Image }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleRight = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= Image.length ? 0 : prevIndex + 1
        );
    };

    const handleLeft = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? Image.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="relative flex items-center">
                {currentIndex > 0 && (
                    <MdArrowBackIosNew
                        onClick={handleLeft}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 z-50"
                        size={24}
                        color="black"
                    />
                )}
                <div className="flex w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${(currentIndex / Image.length) * 100}%)` }}
                    >
                        {Image.map((e, index) => (
                            <div key={index} className="flex-shrink-0 w-[calc(100%/1.5)] p-2">
                                <Single
                                    rate={e.rate}
                                    taxes={e.taxes}
                                    Stay={e.Stay}
                                    discount={e.discount}
                                    PricePernight={e.PricePernight}
                                    City={e.City}
                                    Name={e.Name}
                                    image={e.Img}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {currentIndex + 1 < Image.length && (
                    <MdArrowForwardIos
                        onClick={handleRight}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 z-50"
                        size={24}
                        color="black"
                    />
                )}
            </div>
        </div>
    );
};

export default Slider;
