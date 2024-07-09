import * as React from "react"

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"

export type CardContents = {
    title: string,
    titleDescription: string,
    contentName: string,
    selectTitle: string,
    selectOption1: string
    selectOption2: string
    selectOption3: string
    selectOption4: string
}

export type CardStyle = {
    cardWidth: string,
    cardColor: string,
    continueButtonColor: string,
    cancelButtonColor: string,
    content: [CardContents],
}


export default function CardComponent(props: CardStyle) {
    const TestContent: CardContents = {
        title: "Project Title",
        titleDescription: "here you can create your project",
        contentName: "Frameworks",
        selectTitle: "Framework",
        selectOption1: "Next.js",
        selectOption2: "React",
        selectOption3: "Vue.js",
        selectOption4: "Astro",
    }
    const TestObject: CardStyle = {
        cardWidth: "w-[400px]",
        cardColor: "bg-blue-500",
        continueButtonColor: "bg-green-500",
        cancelButtonColor: "bg-red-500",
        content: [TestContent],
    }

    return (
        <div className={`${props.cardColor}`}>
            <Card className={`${props.cardColor} ${props.cardWidth}`}>
                <CardHeader>
                    <CardTitle>{TestContent.title}</CardTitle>
                    <CardDescription className="text-black">{TestContent.titleDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">{TestContent.contentName}</Label>
                                <Input id="name" placeholder="Name of your project"/>
                            </div>
                            <div className="flex flex-col space-y-1.5 bg text-black">
                                <Label htmlFor="framework">{TestContent.selectTitle}</Label>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select"/>
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">{TestContent.selectOption1}</SelectItem>
                                        <SelectItem value="sveltekit">{TestContent.selectOption2}</SelectItem>
                                        <SelectItem value="astro">{TestContent.selectOption3}</SelectItem>
                                        <SelectItem value="nuxt">{TestContent.selectOption4}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" className={props.cancelButtonColor}>Cancel</Button>
                    <Button className={props.continueButtonColor}>Deploy</Button>
                </CardFooter>
            </Card>
        </div>
    )
}