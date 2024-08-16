import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SwipperProps {
    image: string[];  
}

const Swipper: React.FC<SwipperProps> = ({ image }) => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    console.log(width);

    return (
        <motion.div className="overflow-hidden cursor-pointer" ref={carouselRef}>
            <motion.div 
                className="flex" 
                drag="x" 
                dragConstraints={{ right: 0, left: -width }} 
                whileTap={{ cursor: "grabbing" }}
            >
                {image.map((e, i) => (
                    <motion.div className="lg:w-1/4 min-h-[30rem] min-w-[20rem] py-[40px] px-[20px]" key={i}>
                        <Image className='w-full h-full rounded-[2rem] pointer-events-none object-cover' src={e} alt={`Image ${i}`} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Swipper;
