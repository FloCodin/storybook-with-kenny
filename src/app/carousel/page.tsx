"use client";

import * as React from "react";
import { useState } from "react";
import { BellRing, Check, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import GoogleMapComponent from "@/components/nestedComponent/GoogleMapComponent";
import OpenStreetMapComponent from "@/components/nestedComponent/OpenSTreetMapComponent";

type CarouselContent = {
  src: string;
  alt: string;
  text: string;
  height: number;
  width: number;
  border: boolean;
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

export default function Page() {
  const { setTheme } = useTheme();
  const [mapType, setMapType] = useState("osm");
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            currently on: &nbsp;
            <code className="font-mono font-bold">
              src/app/carousel/page.tsx
            </code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
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
              delay: 3000,
              playOnInit: true,
            }),
          ]}
        >
          <CarouselContent className=" ">
            {contents.map((slide, index) => {
              return (
                <CarouselItem key={index}>
                  <div
                    className={`justify-center p-1 ${slide.border ? "border-black border-4 border-solid " : ""}`}
                  >
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

        <div>
          <Card className=" bg-secondary text-black font-bold w-fit">
            <CardHeader>
              <CardTitle className="flex justify-center">Location</CardTitle>
              <CardDescription className="flex justify-center">
                All of our Locations
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                <BellRing />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Change youre Theme
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Click on the Icon on my right
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="z-10">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-secondary hover:bg-secondary"
                    >
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="z-50 bg-black ">
                    <DropdownMenuItem
                      className="bg-secondary dark:bg-tertiary hover:dark:bg-primary m-1"
                      onClick={() => setTheme("light")}
                    >
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="bg-secondary dark:bg-tertiary hover:dark:bg-primary m-1"
                      onClick={() => setTheme("dark")}
                    >
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="bg-secondary dark:bg-tertiary hover:dark:bg-primary m-1"
                      onClick={() => setTheme("system")}
                    >
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className={"pt-12"}>
                <h1 className="flex justify-center">Wähle die Kartenart: </h1>
                <div className="flex justify-center">
                  <select
                    className=" justify-center"
                    onChange={(e) => setMapType(e.target.value)}
                    value={mapType}
                  >
                    <option value="google">Google Maps</option>
                    <option value="osm">OpenStreetMap</option>
                  </select>
                </div>

                <div
                  style={{ height: "500px", marginTop: "20px", width: "500px" }}
                >
                  {mapType === "google" && <GoogleMapComponent />}
                  {mapType === "osm" && <OpenStreetMapComponent />}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Check className="mr-2 h-4 w-4" /> Send more Information
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
}
