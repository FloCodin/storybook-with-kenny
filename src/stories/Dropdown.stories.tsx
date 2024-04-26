import React from 'react';
import { Meta } from '@storybook/react';
import Dropdown from '@/components/Dropdown';

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
} from '@/components/ui/dropdown-menu'; // Passe den Pfad entsprechend deiner Dateistruktur an

export default {
    title: 'Flo/Dropdown',
    component: DropdownMenu,
} as Meta;

export const BasicDropdown = () => (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <button>Open Dropdown</button>
</DropdownMenuTrigger>
<DropdownMenuContent>
<DropdownMenuItem>Banane</DropdownMenuItem>
<DropdownMenuItem>Apfel</DropdownMenuItem>
<DropdownMenuCheckboxItem checked>is it checked?</DropdownMenuCheckboxItem>
<DropdownMenuRadioGroup value="radio1 ">
<DropdownMenuRadioItem value="radio1">Radio 1</DropdownMenuRadioItem>
<DropdownMenuRadioItem value="radio2">Radio 2</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>
<DropdownMenuSeparator />
<DropdownMenuLabel>look at the Group</DropdownMenuLabel>
<DropdownMenuGroup>
<DropdownMenuItem>Grouped Item 1</DropdownMenuItem>
<DropdownMenuItem>Grouped Item 2</DropdownMenuItem>
</DropdownMenuGroup>
<DropdownMenuSub>
<DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
<DropdownMenuSubContent>
<DropdownMenuItem>hier gehts zu ... </DropdownMenuItem>
<DropdownMenuItem>hier gehts zu ...</DropdownMenuItem>
</DropdownMenuSubContent>
</DropdownMenuSub>
<DropdownMenuPortal />
</DropdownMenuContent>
</DropdownMenu>
);


export const DynamicDropdown: Story = (args) => {
    return (
        <DropdownMenu style={{ width: args.width }}>
            <DropdownMenuTrigger>
                <button>Open Dropdown</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Banane</DropdownMenuItem>
                <DropdownMenuItem>Apfel</DropdownMenuItem>
                <DropdownMenuCheckboxItem checked>is it checked?</DropdownMenuCheckboxItem>
                <DropdownMenuRadioGroup value="radio1 ">
                    <DropdownMenuRadioItem value="radio1">Radio 1</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="radio2">Radio 2</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>look at the Group</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>Grouped Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Grouped Item 2</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem>hier gehts zu ... </DropdownMenuItem>
                        <DropdownMenuItem>hier gehts zu ...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuPortal />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

DynamicDropdown.args = {
    width: '150px',
};

DynamicDropdown.argTypes = {
    width: { control: 'text' },
};