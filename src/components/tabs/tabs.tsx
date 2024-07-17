import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"


export type TabContentProps = {
    tabTitle1?: string
    tabTitle2?: string
    tab1Desc?: string
    tab2Desc?: string
}

interface TabProps {
    /**
     * Background color of the tabs set in tailwind classes for example: "border-violet-400".
     */
    tabBG?: string,
    /**
     * Color from the tab background set in tailwind classes for example: "border-violet-400".
     */
    tabColor?: string
    content?: TabContentProps
    /**
     * The save button color set in tailwind classes for example: "border-violet-400".
     */
    buttonColor?: string
    /**
     * Width set in tailwind classes for example: "w-[400px]".
     */
    tabSize?: string
}
const demoContent: TabContentProps = {
    tabTitle1: "Account",
    tabTitle2: "Password",
    tab1Desc: "Make changes to your account here. Click save when you are done.",
    tab2Desc: " Change your password here. After saving, you will be logged out.",
}
export const TabsDemo = ({
                             tabBG= "bg-secondary",
                             content= demoContent,
                             tabColor= "bg-gray-600",
                             buttonColor= "bg-tertiary",
                             tabSize= "w-[400px]",
                         }: TabProps) => {
    return (
        <Tabs defaultValue="account" className={ `${tabSize}`} >
            <TabsList className={`${tabColor}  grid w-full grid-cols-2 text-black`}>
                <TabsTrigger value="account" >{content.tabTitle1}</TabsTrigger>
                <TabsTrigger value="password">{content.tabTitle2}</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card className={`${tabBG}`}>
                    <CardHeader>
                        <CardTitle>{content.tabTitle1}</CardTitle>
                        <CardDescription className="text-black">
                            {content.tab1Desc}
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
                        <Button className={buttonColor}>Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card className={`${tabBG}`}>
                    <CardHeader>
                        <CardTitle>{content.tabTitle2}</CardTitle>
                        <CardDescription className="text-black ">
                            {content.tab2Desc}
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
                        <Button className={buttonColor}>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}