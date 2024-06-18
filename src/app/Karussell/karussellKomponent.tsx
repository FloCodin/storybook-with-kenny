"use client"

import * as React from "react"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

type CarouselContent = {
    src: string,
    alt: string,
    text: string,
    height: number,
    width: number,
    border: boolean,

};
export const contentsDemo: CarouselContent[] = [
    {
        src: "./images/Messi.png",
        alt: "La Pulga, the Goat",
        text: "La Pulga, the Goat",
        height: 1024,
        width: 1600,
        border: true,
    },
    {
        src: "./images/Ronaldinho.png",
        alt: "Magician Dinho",
        text: "Magician Dinho",
        height: 2160,
        width: 3840,
        border: false,
    },
    {
        src: "./images/Iniesta.png",
        alt: "Maestro, visionary",
        text: "Maestro, visionary",
        height: 1486,
        width: 2048,
        border: true,
    },
];

type CarouselProps = {
    slides: CarouselContent[]
}
function karussell(props: CarouselProps) {
    const { slides } = props
    return (
        <>
            <Carousel
                className="w-full max-w-lg"
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                        playOnInit: true,
                    }),
                ]}
            >
                <CarouselContent className=" ">
                    {slides.map((slide, index) => {
                        return (
                            <CarouselItem key={index}>
                                <div className={`justify-center p-1 ${slide.border ? 'border-black border-4 border-solid ' : ''}`}>
                                    <Image
                                        src={slide.src}
                                        alt={slide.alt}
                                        height={slide.height}
                                        width={slide.width}
                                    />
                                    <span className="pl-16">{slide.text}</span>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
}

export default karussell;
