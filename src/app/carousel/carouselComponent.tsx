"use client";

import * as React from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export type CarouselContent = {
    src: string;
    alt: string;
    text: string;
};

interface CarouselProps {
    /**
     * Duration of autoplay in milliseconds.
     */
    autoplayDuration: number;
    /**
     * Should the autoplay start when loading the page (init).
     */
    autoplayOnInit: boolean;

    /**
     * Be able to klick through without a stop.
     */
    loop: boolean;
    /**
     *  Creates a border around the images and the short description text.
     */
    border: boolean;
    content?: CarouselContent[];
}

const demoContent: CarouselContent[] = [
    {
        src: "./images/Messi.png",
        alt: "La Pulga, the Goat",
        text: "La Pulga, the Goat",
    },
    {
        src: "./images/Ronaldinho.png",
        alt: "Magician Dinho",
        text: "Magician Dinho",
    },
    {
        src: "./images/Iniesta.png",
        alt: "Maestro, visionary",
        text: "Maestro, visionary",
    },
];

export const CarouselComponent = ({
                                      autoplayDuration = 3000,
                                      autoplayOnInit = true,
                                      loop = true,
                                      border = true,
                                      content = demoContent,
                                  }: CarouselProps) => {
    return (
        <>
            <div >
                <Carousel
                    className="w-full max-w-lg"
                    opts={{
                        loop: loop,
                    }}
                    plugins={[
                        Autoplay({
                            delay: autoplayDuration,
                            playOnInit: autoplayOnInit,
                        }),
                    ]}
                >
                    <CarouselContent className=" ">
                        {content.map((slide, index) => {
                            return (
                                <CarouselItem key={index}>
                                    <div
                                        className={`justify-center p-1 ${border ? "border-black border-4 border-solid " : ""}`}
                                    >
                                        <Image
                                            src={slide.src}
                                            alt={slide.alt}
                                            width={500}
                                            height={500}
                                        />
                                        <span className="pl-16">{slide.text}</span>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>
        </>
    );
}
