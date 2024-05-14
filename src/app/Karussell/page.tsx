"use client"

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import * as React from "react";
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
const contents: CarouselContent[] = [
    {
        src: "/Messi.png",
        alt: "La Pulga, the Goat",
        text: "La Pulga, the Goat",
        height: 1024,
        width: 1600,
        border: true,
    },
    {
        src: "/Ronaldinho.png",
        alt: "Magician Dinho",
        text: "Magician Dinho",
        height: 2160,
        width: 3840,
        border: false,
    },
    {
        src: "/Iniesta.png",
        alt: "Maestro, visionary",
        text: "Maestro, visionary",
        height: 1486,
        width: 2048,
        border: true,
    },
];

type CarouselProps = {
    slides: CarouselContent[],
}

export default function Page(props: CarouselProps) {
    const {slides} = props;
    const plugin = React.useRef(
        Autoplay({ delay: 2000,  playOnInit:true,})
    )
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        Get started by editing&nbsp;
                        <code className="font-mono font-bold">src/app/Karussell/page.tsx</code>
                    </p>
                    <div
                        className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                        <a
                            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{" "}
                            <Image
                                src="/vercel.svg"
                                alt="Vercel Logo"
                                className="dark:invert"
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </div>
                </div>

                <Carousel
                    className="w-full max-w-lg"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay:3000,
                            playOnInit: true,
                        }),
                    ]}
                >
                    <CarouselContent className=" ">
                        {contents.map((slide, index) => {
                            return (<CarouselItem key={index}>
                                <div
                                    className={`justify-center p-1 ${slide.border ? 'border-black border-4 border-solid ' : ''}`}>
                                    <Image
                                        src={slide.src}
                                        alt={slide.alt}
                                        height={slide.height}
                                        width={slide.width}

                                    />
                                    <span className="pl-16">
                                        {slide.text}</span>
                                </div>
                            </CarouselItem>)
                        })}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>

                </Carousel>
            </main>
        </>
    );
}