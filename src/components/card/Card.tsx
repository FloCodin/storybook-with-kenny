import * as React from "react"

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"

type CardContents = {
    title: string,
    titleDescription: string,
    contentName: string,
    selectTitle: string,
    selectOption1: string
    selectOption2: string
    selectOption3: string
    selectOption4: string
}

interface CardStyle  {
    /**
    * Will be the size of the div from the card in tailwind classes ("w-[400px]")
    * */
    cardWidth?: string,
    /**
    * Will set the bg-color of the card in tailwind classes ("bg-blue-500")
    * */
    cardColor?: string,
    /**
    * will set the bg color of the continue button in tailwind classes ("bg-blue-500")
    * */
    continueButtonColor?: string,
    /**
    * will set the bg color of the cancel button in tailwind classes ("bg-blue-500")
    * */
    cancelButtonColor?: string,
    content?: CardContents,
}
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
export const CardComponent = ({
                                cardWidth= "w-[350px]",
                                cardColor= "bg-blue-500",
                                continueButtonColor= "bg-green-500",
                                cancelButtonColor= "bg-red-500",
                                content= TestContent,
                            }: CardStyle) => {
    return (
        <div className={`${cardColor}`+ ``}>
            <Card className={`${cardColor} ${cardWidth}`}>
                <CardHeader>
                    <CardTitle>{content.title}</CardTitle>
                    <CardDescription className="text-black">{content.titleDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4 bg-y">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">{content.contentName}</Label>
                                <Input id="name" placeholder="Name of your project"/>
                            </div>
                            <div className="flex flex-col space-y-1.5 bg text-black">
                                <Label htmlFor="framework">{content.selectTitle}</Label>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select"/>
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">{content.selectOption1}</SelectItem>
                                        <SelectItem value="sveltekit">{content.selectOption2}</SelectItem>
                                        <SelectItem value="astro">{content.selectOption3}</SelectItem>
                                        <SelectItem value="nuxt">{content.selectOption4}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" className={cancelButtonColor}>Cancel</Button>
                    <Button className={continueButtonColor}>Deploy</Button>
                </CardFooter>
            </Card>
        </div>
    )
}