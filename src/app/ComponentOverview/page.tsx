"use client";

import Image from "next/image";
import InputField from "@/components/inputfield/InputField";
import * as React from "react";
import {useState} from "react";
import {toast} from "sonner"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"

import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Alert from "@/components/alert/Alert";
import {BellRing, Check, Moon, Sun} from "lucide-react";

import {cn} from "@/lib/utils";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import {Switch} from "@/components/ui/switch";
import {className} from "postcss-selector-parser";
import Link from "next/link";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import GoogleMapComponent from "@/components/nestedComponent/GoogleMapComponent";
import OpenStreetMapComponent from "@/components/nestedComponent/OpenSTreetMapComponent";
import {useTheme} from "next-themes";
import Autoplay from "embla-carousel-autoplay";
import {ComboboxDemo} from "@/components/Command/comboBoxComponent";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Slider} from "@/components/ui/slider";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

type SliderProps = React.ComponentProps<typeof Slider>


const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]


const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
];
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
        src: "/images/Messi.png",
        alt: "La Pulga, the Goat",
        text: "La Pulga, the Goat",
        height: 1024,
        width: 1600,
        border: true,
    },
    {
        src: "/images/Ronaldinho.png",
        alt: "Magician Dinho",
        text: "Magician Dinho",
        height: 2160,
        width: 3840,
        border: false,
    },
    {
        src: "/images/Iniesta.png",
        alt: "Maestro, visionary",
        text: "Maestro, visionary",
        height: 1486,
        width: 2048,
        border: true,
    },
];

type CarouselProps = {
    slides: CarouselContent[];
}; /*
type CardProps = React.ComponentProps<typeof Card>
*/


export default function Page(props: CarouselProps) {
    const {setTheme} = useTheme();

    const [mapType, setMapType] = useState("osm");
    const [position, setPosition] = React.useState("bottom");

    toast("Event has been created.")

    type AlertContent = {
        triggerText: string;
        textTitle: string;
        textDescription: string;
    };

    type AlertProps = {
        triggerColor?: string;
        alertBackground?: string;
        textColor: string;
        continueButton?: string;
        content?: [AlertContent];
    };


    return (
        <>
            <h1> All Components:</h1>

            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        Get started by editing&nbsp;
                        <code className="font-mono font-bold">src/app/page.tsx</code>
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
                                src="/images/vercel.svg"
                                alt="Vercel Logo"
                                className="dark:invert"
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </div>
                </div>
                <div
                    className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/images/next.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </div>
                <div className="flex pt-4 pb-4 ">
                    <div className="flex  pr-4 ">
                        <AlertDialog>
                            <div className="border-solid border-gray-500 border-2 flex justify-center ml-4 mr-4">
                                <AlertDialogTrigger> Messi Card</AlertDialogTrigger>
                            </div>
                            <AlertDialogContent className="bg-primary">
                                <AlertDialogHeader>
                                    <Card className="bg-primary">
                                        <CardHeader>
                                            <CardTitle className="flex justify-center font-extrabold">
                                                Messi the Goat
                                            </CardTitle>
                                            <CardDescription className="flex justify-center text-black">
                                                Here are some reasons why
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div
                                                className="grid gap-4 bg-blue-300 grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500 "/>
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium leading-none">
                                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                        Ballon d'Or's: ( 8 )
                                                    </p>
                                                    <p className=" text-sm text-muted-foreground">
                                                        2009, 2011, 2012, 2013, 2016, 2019, 2021, 2023
                                                    </p>
                                                    <div className=" w-full flex justify-center ">
                                                        <Image
                                                            src="/ballon-dor-svgrepo-com.png"
                                                            alt="ballon dor image"
                                                            width="128"
                                                            height="128"
                                                            className=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="grid gap-4 bg-white grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"/>
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium leading-none">
                                                        Golden Boots: ( 6 )
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        2009–10, 2011–12, 2012–13, 2016–17, 2017–18, 2018–19
                                                        <Image
                                                            src="/GoldenBoot.png"
                                                            alt="golden Boot image"
                                                            width="128"
                                                            height="128"
                                                        />
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="grid gap-4 bg-blue-300 grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"/>
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium leading-none">
                                                        La Liga MVP ( 9 )
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        2008/09, 2009/10 ,2010/11, 2011/12 , 2012/13,
                                                        2014/15, 2016/17, 2017/18 , 2018/19
                                                    </p>
                                                    <Image
                                                        src="/LaLigaMVP.png"
                                                        alt="golden Boot image"
                                                        width="128"
                                                        height="128"
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-center">
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            <Button
                                                variant={"outline"}
                                                className="hover:bg-blue-300 font-bold hover:font-extrabold"
                                            >
                                                {" "}
                                                Visit
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                Messi's Website
                                                <Link href={"https://messi.com/en/"} className=""/>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction className="bg-tertiary">
                                        Continue
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <AlertDialog>
                            <div className="border-solid border-gray-500 border-2 flex justify-center">
                                <AlertDialogTrigger>Card template</AlertDialogTrigger>
                            </div>
                            <AlertDialogContent className="bg-primary">
                                <AlertDialogHeader>
                                    <Card
                                        className={cn(
                                            "w-[380px] bg-secondary text-black font-bold",
                                            className,
                                        )}
                                        {...props}
                                    >
                                        <CardHeader>
                                            <CardTitle>Notifications</CardTitle>
                                            <CardDescription>
                                                You have 3 unread messages.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="grid gap-4">
                                            <div className=" flex items-center space-x-4 rounded-md border p-4">
                                                <BellRing/>
                                                <div className="flex-1 space-y-1">
                                                    <p className="text-sm font-medium leading-none">
                                                        Push Notifications
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Send notifications to device.
                                                    </p>
                                                </div>
                                                <Switch className="checked:bg-primary accent-blue-700"/>
                                            </div>
                                            <div>
                                                {notifications.map((notification, index) => (
                                                    <div
                                                        key={index}
                                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                                    >
                                                        <span
                                                            className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"/>
                                                        <div className="space-y-1">
                                                            <p className="text-sm font-medium leading-none">
                                                                {notification.title}
                                                            </p>
                                                            <p className="text-sm text-muted-foreground">
                                                                {notification.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full">
                                                <Check className="mr-2 h-4 w-4"/> Mark all as read
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction className="bg-tertiary">
                                        Continue
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>

                <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                    <AlertDialog>
                        <div
                            className={`border-solid border-gray-500 border-2 flex justify-center bg-secondary`}
                        >
                            <AlertDialogTrigger> Input field+ Dropdown </AlertDialogTrigger>
                        </div>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <InputField
                                    Input1Label="first name "
                                    Input2Label="last name "
                                    InputId1="text"
                                    InputId2="text"
                                    Input1BorderColor="purple"
                                    Input2BorderColor="black"
                                    Input3BorderColor="blue"
                                />

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">Open</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuRadioGroup
                                            value={position}
                                            onValueChange={setPosition}
                                        >
                                            <DropdownMenuRadioItem value="top">
                                                Top
                                            </DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="bottom">
                                                Bottom
                                            </DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="right">
                                                Right
                                            </DropdownMenuRadioItem>
                                        </DropdownMenuRadioGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction className="">Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                    <AlertDialog>
                        <div className="border-solid border-gray-500 border-2 flex justify-center">
                            <AlertDialogTrigger>Alert</AlertDialogTrigger>
                        </div>
                        <AlertDialogContent className="bg-primary">
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription className="text-black">
                                    This action cannot be undone. This will permanently delete
                                    your account and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction className="bg-tertiary">
                                    Continue
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                    <Alert
                        alertBackground={"bg-blue-500"}
                        triggerColor={"bg-red-500"}
                        textColor={"#000000"}
                        continueButton={"bg-blue-500"}
                    />
                    <AlertDialog>
                        <div className="border-solid border-gray-500 border-2 flex justify-center">
                            <AlertDialogTrigger>
                                Caroussel Slider first (bad)
                            </AlertDialogTrigger>
                        </div>
                        <AlertDialogContent className="bg-primary">
                            <AlertDialogHeader>
                                <Carousel className="w-full max-w-xs">
                                    <CarouselContent>
                                        {Array.from({length: 5}).map((_, index) => (
                                            <CarouselItem key={index}>
                                                <div className="p-1">
                                                    <Card>
                                                        <CardContent
                                                            className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold">
                                {" "}
                                  {index + 1}
                              </span>
                                                            {index === 0 && (
                                                                <Image
                                                                    src="/Messi.png"
                                                                    alt="Messi with Worldcup"
                                                                    width="300"
                                                                    height="300"
                                                                />
                                                            )}
                                                            {index === 1 && (
                                                                <Image
                                                                    src="/Ronaldinho.png"
                                                                    alt="Messi with Worldcup"
                                                                    width="300"
                                                                    height="300"
                                                                />
                                                            )}
                                                            {index === 2 && (
                                                                <Image
                                                                    src="/Iniesta.png"
                                                                    alt="Messi with Worldcup"
                                                                    width="300"
                                                                    height="300"
                                                                />
                                                            )}
                                                            {index === 3 && (
                                                                <ul>
                                                                    <li>Goat Messi</li>
                                                                    <li>Magic Dinho</li>
                                                                    <li>Maestro Iniesta</li>
                                                                </ul>
                                                            )}
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious/>
                                    <CarouselNext/>
                                </Carousel>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction className="bg-tertiary">
                                    Continue
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                    <br/>

                    <a
                        href="/carousel/"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className="mb-3 text-2xl font-semibold">
                            Caroussel Page{" "}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
                        </h2>
                        <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                            Checkout the caroussel Cause we can :)
                        </p>
                    </a>
                    <a
                        href="/ComponentOverview/"
                        className="group  w-fit rounded-lg border border-transparent p-8 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className="mb-3 text-2xl font-semibold">
                            ComponentOverview{" "}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
                        </h2>
                        <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                            Checkout the ComponentOverview Cause we can :)
                        </p>
                    </a>
                    <a
                        href="/app/"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className="mb-3 text-2xl font-semibold">
                            startpage{" "}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
                        </h2>
                        <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                            Checkout the startpage Cause we can :)
                        </p>
                    </a>
                </div>

                <div className="flex justify-center ">
                    <div className="p-8">
                        <AlertDialog>
                            <div
                                className={`border-solid border-gray-500 border-2 flex justify-center bg-$}`}
                            >
                                <AlertDialogTrigger> done carousel </AlertDialogTrigger>
                            </div>
                            <AlertDialogContent>
                                <AlertDialogHeader>
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
                                        <CarouselPrevious/>
                                        <CarouselNext/>
                                    </Carousel>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction className="">Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                    <div className="p-8">
                        <AlertDialog>
                            <div
                                className={`border-solid border-gray-500 border-2 flex justify-center bg-$}`}
                            >
                                <AlertDialogTrigger> add name </AlertDialogTrigger>
                            </div>
                            <AlertDialogContent>
                                <AlertDialogHeader></AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction className="">Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                    <div className="p-8">
                        <AlertDialog>
                            <div
                                className={`border-solid border-gray-500 border-2 flex justify-center bg-$}`}
                            >
                                <AlertDialogTrigger>
                                    {" "}
                                    Card with theme changer and map{" "}
                                </AlertDialogTrigger>
                            </div>
                            <AlertDialogContent className="w-screen max-h-screen">
                                <AlertDialogHeader>
                                    <Card className=" bg-secondary text-black font-bold w-auto">
                                        <CardHeader>
                                            <CardTitle className="flex justify-center">
                                                Location
                                            </CardTitle>
                                            <CardDescription className="flex justify-center">
                                                All of our Locations
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="grid gap-2">
                                            <div className=" flex items-center space-x-4 rounded-md border p-4">
                                                <BellRing/>
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
                                                            <Sun
                                                                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                                                            <Moon
                                                                className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                                                            <span className="sr-only">Toggle theme</span>
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent
                                                        align="end"
                                                        className="z-50 bg-black "
                                                    >
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
                                                <h1 className="flex justify-center">
                                                    Wähle die Kartenart:{" "}
                                                </h1>
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
                                                    style={{
                                                        height: "300px",
                                                        marginTop: "20px",
                                                        width: "300px",
                                                    }}
                                                >
                                                    {mapType === "google" && <GoogleMapComponent/>}
                                                    {mapType === "osm" && <OpenStreetMapComponent/>}
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full">
                                                <Check className="mr-2 h-4 w-4"/> Send more Information
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction className="">Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>


                        <ComboboxDemo/>


                    </div>

                    <div>

                        <Button
                            variant="outline"
                            onClick={() =>
                                toast("Event has been created", {
                                    description: "Sunday, December 03, 2023 at 9:00 AM",
                                    action: {
                                        label: "Undo",
                                        onClick: () => console.log("Undo"),
                                    },
                                })
                            }
                        >
                            Show Toast
                        </Button>
                    </div>
                </div>
                <div className="flex-col">
                    <div className="flex ">
                        <Table>
                            <TableCaption>A list of your recent invoices.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Invoice</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.invoice}>
                                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                        <TableCell>{invoice.paymentStatus}</TableCell>
                                        <TableCell>{invoice.paymentMethod}</TableCell>
                                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={3}>Total</TableCell>
                                    <TableCell className="text-right">$2,500.00</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                    <div className="p-8">
                        <Slider
                            defaultValue={[50]}
                            max={100}
                            step={1}
                            className={cn("w-[60%]", className)}
                            {...props}
                        />
                    </div>


                    <div className="px-5">
                        <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="account">Account</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Account</CardTitle>
                                        <CardDescription>
                                            Make changes to your account here. Click save when you are done.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" defaultValue="Pedro Duarte"/>
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="username">Username</Label>
                                            <Input id="username" defaultValue="@peduarte"/>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            variant="outline"
                                            onClick={() =>
                                                toast("Changes have been saved made at:", {
                                                    description: "Sunday, December 03, 2023 at 9:00 AM",
                                                    action: {
                                                        label: "Undo",
                                                        onClick: () => console.log("Undo"),
                                                    },
                                                })
                                            }
                                        >
                                            Save changes
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="password">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Password</CardTitle>
                                        <CardDescription>
                                            Change your password here. After saving, you will be logged out.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="current">Current password</Label>
                                            <Input id="current" type="password"/>
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="new">New password</Label>
                                            <Input id="new" type="password"/>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            variant="outline"
                                            onClick={() =>
                                                toast("The new password has been saved at: ", {
                                                    description: "Sunday, December 03, 2023 at 9:00 AM",
                                                    action: {
                                                        label: "Undo",
                                                        onClick: () => console.log("Undo"),
                                                    },
                                                })
                                            }
                                        >
                                            Save new Password
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div className="p-5">
                        <Card className="w-[350px]">
                            <CardHeader>
                                <CardTitle>Create project</CardTitle>
                                <CardDescription>Deploy your new project in one-click.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" placeholder="Name of your project"/>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="framework">Framework</Label>
                                            <Select>
                                                <SelectTrigger id="framework">
                                                    <SelectValue placeholder="Select"/>
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    <SelectItem value="next">Next.js</SelectItem>
                                                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                                    <SelectItem value="astro">Astro</SelectItem>
                                                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                                    <SelectItem value="Tailwind">Tailwind.css</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline">Cancel</Button>
                                <Button>Deploy</Button>
                            </CardFooter>
                        </Card>
                        <div className="p-8">
                            <Button className={"border-4 border-r-4 border-violet-400"}>Kroos de Bastard </Button>
                        </div>

                        <div>
                            <div className="grid grid-cols-2 gap-2">
                                {SHEET_SIDES.map((side) => (
                                    <Sheet key={side}>
                                        <SheetTrigger asChild>
                                            <Button variant="outline">{side}</Button>
                                        </SheetTrigger>
                                        <SheetContent side={side}>
                                            <SheetHeader>
                                                <SheetTitle>Edit profile</SheetTitle>
                                                <SheetDescription>
                                                    Make changes to your profile here. Click save when you are done.
                                                </SheetDescription>
                                            </SheetHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="name" className="text-right">
                                                        Name
                                                    </Label>
                                                    <Input id="name" value="Florian Rogenmoser" className="col-span-3" />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="username" className="text-right">
                                                        Username
                                                    </Label>
                                                    <Input id="username" value="@FloCodin" className="col-span-3" />
                                                </div>
                                            </div>
                                            <SheetFooter>
                                                <SheetClose asChild>
                                                    <Button type="submit">Save changes</Button>
                                                </SheetClose>
                                            </SheetFooter>
                                        </SheetContent>
                                    </Sheet>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
