import React from 'react';
import { Meta, StoryObj  } from '@storybook/react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuGroup,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
    DropdownMenuRadioGroup,
} from '@/components/ui/dropdown-menu';

export default {
    title: 'Flo/Dropdown',
        component: DropdownMenu,
} as Meta;

export const BasicDropdown: StoryObj<typeof DropdownMenu> = {
    render: () => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button>Open Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => console.log('Banane')}>Banane</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => console.log('Apfel')}>Apfel</DropdownMenuItem>
            <DropdownMenuCheckboxItem checked={true} onCheckedChange={() => {}}>is it checked?</DropdownMenuCheckboxItem>
            <DropdownMenuRadioGroup value="radio1">
                <DropdownMenuRadioItem value="radio1">Radio 1</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="radio2">Radio 2</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Look at the Group</DropdownMenuLabel>
            <DropdownMenuGroup>
                <DropdownMenuItem>Grouped Item 1</DropdownMenuItem>
                <DropdownMenuItem>Grouped Item 2</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSub>
                <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                    <DropdownMenuItem>hier gehts zu ...</DropdownMenuItem>
                    <DropdownMenuItem>hier gehts zu ...</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuSub>
        </DropdownMenuContent>
    </DropdownMenu>
    ),
};
