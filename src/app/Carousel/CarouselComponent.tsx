"use client"

import * as React from "react"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

export type CarouselContent = {
    src: string,
    alt: string,
    text: string,
};
export type CarouselProps = {
    /**
     * Duration of autoplay in milliseconds.
     */
    autoplayDuration: number
    autoplayOnInit: boolean
    position: "start" | "center" | "end"
    loop: boolean
    border: boolean
    content: CarouselContent[]
}

export default function CarouselComponent(props: CarouselProps) {
    return (
        <>
            <Carousel
                className="w-full max-w-lg"
                opts={{
                    align: props.position,
                    loop: props.loop,
                }}
                plugins={[
                    Autoplay({
                        delay: props.autoplayDuration,
                        playOnInit: props.autoplayOnInit,
                    }),
                ]}
            >
                <CarouselContent className=" ">
                    {props.content.map((slide, index) => {
                        return (
                            <CarouselItem key={index}>
                                <div
                                    className={`justify-center p-1 ${props.border ? 'border-black border-4 border-solid ' : ''}`}>
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
        </>
    );
}