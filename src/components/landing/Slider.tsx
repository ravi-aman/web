"use client"; 

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";

const Slider = dynamic(() => import("infinite-react-carousel"), { ssr: false });

interface Service {
    title: string;
    image: string;
}

interface InfiniteCarouselProps {
    services: Service[];
    speed: number; 
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ services, speed }) => {
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full flex justify-center items-center py-10">
            <div className="w-[95%]">
                <Slider
                    autoplay
                    autoplaySpeed={speed}
                    arrows={true}
                    infinite
                    slidesToShow={windowWidth < 768 ? 1 : 5} // Show 1 slide on mobile, 5 on desktop
                    slidesToScroll={windowWidth < 768 ? 1 : 5}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="px-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <a href="#" className="block relative group">
                                <div className="relative h-[300px] rounded-[30px] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>
                                <div className="absolute bottom-5 left-5">
                                    <div className="px-2 py-2 text-sm text-white bg-white/30 backdrop-blur-lg font-bold rounded-full gap-2 flex">
                                        <Image
                                            className="w-5 h-5 bg-white/80 backdrop-blur-lg rounded-full"
                                            src="/landing/arrow.png"
                                            alt="Arrow"
                                            width={20}
                                            height={20}
                                        />
                                        {service.title}
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default InfiniteCarousel;
