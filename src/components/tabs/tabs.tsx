import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
export type TabContentProps ={
    TabTitle1?: string
    TabTitle2?: string
    color?: string
}
export type TabProps ={

    orientation: "vertical" | "horizontal"
    // gaht bi : Content, Trigger, List und root evt längt orientation suscht [data-orientation] values bliebe glich

    content: TabContentProps

}
export function TabsDemo(props: TabProps ) {

    const demoContent: TabContentProps={
        TabTitle1: "Account",
        TabTitle2: "Password",
        color: "bg-blue-500"
    }


    return (
        <Tabs defaultValue="account" className="w-[400px]" orientation={props.orientation}>
            <TabsList className="grid w-full grid-cols-2" aria-orientation={props.orientation}>
                <TabsTrigger value="account">{props.content.TabTitle1}</TabsTrigger>
                <TabsTrigger value="password">{props.content.TabTitle2}</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card>
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                            Make changes to your account here. Click save when you are done.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={`${props.content.color }`+"space-y-2"}>
                        <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" defaultValue="@peduarte" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
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
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}