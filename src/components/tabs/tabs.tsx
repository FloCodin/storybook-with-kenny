import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"


export type TabContentProps = {
    TabTitle1?: string
    TabTitle2?: string
}
export type TabProps = {

    orientation?: "vertical" | "horizontal"
    // gaht bi : Content, Trigger, List und root evt längt orientation suscht [data-orientation] values bliebe glich
    color?: string,
    tabColor?: string
    content: TabContentProps
    ButtonColor?: string
}
export function TabsDemo(props: TabProps) {

    const demoContent: TabContentProps = {
        TabTitle1: "Account",
        TabTitle2: "Password",
    }
    const demoTabProps: TabProps = {
        color: "bg-secondary",
        orientation: "vertical",
        content: demoContent,
        tabColor: "bg-gray-600",
        ButtonColor: "bg-tertiary",
    }

    return (
        <Tabs defaultValue="account" className={"w-[400px]"} orientation={props.orientation}>
            <TabsList className={ `${demoTabProps.tabColor} grid w-full grid-cols-2 text-black` } aria-orientation={props.orientation}>
                <TabsTrigger value="account">{props.content.TabTitle1}</TabsTrigger>
                <TabsTrigger value="password">{props.content.TabTitle2}</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card className={`${demoTabProps.color}`}>
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription className="text-black">
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
                        <Button className={props.ButtonColor}>Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card className={`${demoTabProps.color}`}>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription className="text-black ">
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
                        <Button className={props.ButtonColor}>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}