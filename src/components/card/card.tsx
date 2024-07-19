import * as React from "react"

import {Button} from "@/components/button/Button"
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

interface CardStyle {
    /**
     * Is the size of the div from the card in tailwind  classes (e.g. "w-[400px]").
     * */
    cardWidth?: string,
    /**
     * Set Tailwind color class (e.g. "border-violet-400" // bg-secondary.)
     * */
    cardColor?: string,
    /**
     * Set Tailwind color class (e.g. "border-violet-400" // bg-secondary.)
     * */
    continueButtonColor?: string,
    /**
     * The Label of the action Button.
     */
    continueButtonLabel?: string,
    /**
     * Set Tailwind color class (e.g. "border-violet-400" // bg-secondary.)
     * */
    cancelButtonColor?: string,
    /**
     * The Label of the cancel Button.
     */
    cancelButtonLabel?: string,
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
                                  cardWidth = "w-[350px]",
                                  cardColor = "bg-blue-500",
                                  continueButtonColor = "bg-green-500",
                                  continueButtonLabel = "Deploy",
                                  cancelButtonColor = "bg-red-500",
                                  cancelButtonLabel = "cancel",
                                  content = TestContent,
                              }: CardStyle) => {
    return (
        <div className={`${cardColor}` + ``}>
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
                <CardFooter className="flex justify-between font-black">
                    <Button buttonColor={cancelButtonColor} outlined={false}  label={cancelButtonLabel}/>
                    <Button buttonColor={continueButtonColor} outlined={true} label={continueButtonLabel} />


                </CardFooter>
            </Card>
        </div>
    )
}