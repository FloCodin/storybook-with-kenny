"use client"

import Image from "next/image";
import InputField from "@/components/StorybookComponents/InputField";
import * as React from "react"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
} from "@/components/ui/alert-dialog"
import Alert from "@/components/StorybookComponents/Alert";
import {BellRing, Check} from "lucide-react"

import {cn} from "@/lib/utils"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Switch} from "@/components/ui/switch"
import {className} from "postcss-selector-parser";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


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
]
type CardProps = React.ComponentProps<typeof Card>
const carouselSources= []
const carouselAlt=[]
const carouselWidth=[]
const carouselHeight=[]

export default function Home() {
    const [position, setPosition] = React.useState("bottom")


    let props = notifications;
    return (
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
            <div className="flex pt-4 pb-4 ">
                <div className="flex  pr-4 ">
                    <Card className="bg-primary">
                        <CardHeader >
                            <CardTitle className="flex justify-center font-extrabold">Messi the Goat</CardTitle>
                            <CardDescription className="flex justify-center text-black">Here are some reasons why</CardDescription>
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
                                        <Image src="/ballon-dor-svgrepo-com.png" alt="ballon dor image" width="128"
                                               height="128" className=""/>
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
                                        <Image src="/GoldenBoot.png" alt="golden Boot image" width="128" height="128"/>
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
                                        2008/09, 2009/10 ,2010/11, 2011/12
                                        , 2012/13, 2014/15, 2016/17, 2017/18 , 2018/19
                                    </p>
                                    <Image src="/LaLigaMVP.png" alt="golden Boot image" width="128" height="128"/>
                                </div>

                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <Button variant={"outline"} className="hover:bg-blue-300 font-bold hover:font-extrabold"> Visit Messi's Website
                                <Link href={"https://messi.com/en/"} className=""/>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className={cn("w-[380px] bg-secondary text-black font-bold", className)} {...props}>
                        <CardHeader>
                            <CardTitle>Notifications</CardTitle>
                            <CardDescription>You have 3 unread messages.</CardDescription>
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
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"/>
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
                </div>
            </div>
            <div
                className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">


                <InputField
                    firstNameId={"DisMami"} firstNameLabel={"DisMami"} firstNameName={"DisMami"}
                    lastNameLabel={"DinPapi"} lastNameId={"DinPapi"} lastNameName={"DinPapi"}
                    firstNameBorderColor={"purple"} lastNameBorderColor={"yellow"}/>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Open</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <AlertDialog>
                    <div className="border-solid border-gray-500 border-2 flex justify-center">
                        <AlertDialogTrigger>Alert</AlertDialogTrigger>
                    </div>
                    <AlertDialogContent className="bg-primary">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription className="text-black">
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction className="bg-tertiary">Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

                <Alert
                    alertBackground={'bg-secondary'}
                    textDescription={"Anakin Skywalker's unparalleled potential and skill in the Force marked him as" +
                        " one of the most powerful Jedi in history. His journey from a slave on Tatooine to a Jedi" +
                        " Knight and ultimately Darth Vader showcases his immense impact on the galaxy. Despite his" +
                        " fall to the dark side, his eventual redemption and fulfillment of the Chosen One prophecy " +
                        "solidify his legacy as the greatest Jedi to have ever lived. "}
                    triggerColor={"royal-orange"}
                    textTitle={"Anakin Skywalker"}
                    textColor={'#000000'}
                    triggerText={"the Youngling Slayer"}
                    continueButton={"bg-tertiary"}
                />




                <a
                    href="/Karussell/"
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
                    <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">Checkout the caroussel
                        Cause we can :)
                    </p>
                </a>

            <a
                href="/ComponentOverview/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
                <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">Checkout the ComponentOverview
                    Cause we can :)
                </p>
            </a>
        </div>

            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">  {index + 1}</span>
                                        {index === 0 &&  <Image src="/Messi.png" alt="Messi with Worldcup" width="300" height="300"/>}
                                        {index === 1 &&  <Image src="/Ronaldinho.png" alt="Messi with Worldcup" width="300" height="300"/>}
                                        {index === 2 &&  <Image src="/Iniesta.png" alt="Messi with Worldcup" width="300" height="300"/>}
                                        {index === 3 &&
                                            <ul>
                                                <li >Goat Messi</li>
                                                <li >Magic Dinho</li>
                                                <li >Maestro Iniesta</li>
                                            </ul>
                                        }
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


        </main>
    );
}


