"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    ArrowRight,
    BadgeIndianRupee,
    ShoppingBag,
    ShoppingCart,
} from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { CalendarDays, Search, Heart, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

import { CircleUser, Menu, Package2 } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import React, { useState } from "react";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";
import { AnimatedButton } from "../../components/ui/moving-border";
const links = [
    { name: "Home", href: "/" },
    { name: "Men", href: "/Men" },
    { name: "Women", href: "/Women" },
    { name: "Kids", href: "/Kids" },
];

export default function Navbar() {
    const pathname = usePathname();
    // const { handleCartClick } = useShoppingCart();
    return (
        <div>
            <div className="flex justify-center bg-primary h-10 md:gap-48 lg:gap-96">
                <div>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button className="text-white" variant="link">
                                @Meet our new clothing store of different
                                brands!
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="flex justify-between space-x-4">
                                <Avatar>
                                    <AvatarImage src="https://github.com/vercel.png" />
                                    <AvatarFallback>VC</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">
                                        @clothing
                                    </h4>
                                    <p className="text-sm">
                                        This Clothing Store - created and
                                        maintained by @team magnus.
                                    </p>
                                    <div className="flex items-center pt-2">
                                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                                        <span className="text-xs text-muted-foreground">
                                            Created June 2024
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div className="hidden md:flex lg:flex h-10 items-center text-sm ">
                    <Button className="text-white" variant={"link"}>
                        Sign In
                    </Button>
                    <Separator className="h-4" orientation="vertical" />
                    <Button className="text-white" variant={"link"}>
                        Rewards
                    </Button>
                    <Separator className="h-4" orientation="vertical" />
                    <Button className="text-white" variant={"link"}>
                        Blog
                    </Button>
                </div>
            </div>
            <div className="flex p-2 mx-10 border-b border-gray-200">
                <div className="flex-1 justify-center items-center">
                    {/* <div className="flex rounded-full border border-gray-200 w-[370px] h-12 items-center p-2">
                        <Input
                            type="search"
                            placeholder="I'm Looking For..."
                            className="border-hidden outline-none ring-0"
                        />
                        <div className="rounded-full bg-green-100 h-10   w-10 flex items-center justify-center mr-2">
                            <Search className="h-4 w-4 text-green-600" />
                        </div>
                    </div> */}

                    <AnimatedButton
                        borderRadius="1.75rem"
                        containerClassName="w-60"
                        className="text-sm bg-white dark:bg-slate-900 text-green-700 font-bold dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <BadgeIndianRupee className="mr-2" />
                        Buy now Offers on the Way
                    </AnimatedButton>
                </div>

                <div className="hidden flex-1 md:flex justify-center items-center">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        Next<span className="text-primary">Commerce</span>
                    </h1>
                </div>
                <div className="hidden md:flex flex-1 justify-end items-center gap-4">
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />

                        <AvatarFallback>ENG</AvatarFallback>
                    </Avatar>
                    <div>
                        <Heart className="text-green-600" />
                    </div>
                    <div>
                        <User className="text-green-600" />
                    </div>
                    <div>
                        <ShoppingCart className="text-green-600" />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-lg font-semibold md:text-base"
                            >
                                <Package2 className="h-6 w-6 text-green-600 " />
                                <span className="sr-only">Acme Inc</span>
                            </Link>
                            {links.map((link, idx) => (
                                <div key={idx}>
                                    {pathname === link.href ? (
                                        <Link
                                            className="text-sx hover:text-foreground text-green-600"
                                            href={link.href}
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-sx   font-semibold text-grey-600 transition duration-100 hover:text-primary"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="shrink-0 md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">
                                        Toggle navigation menu
                                    </span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <nav className="grid gap-6 text-lg font-medium">
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2 text-lg font-semibold"
                                    >
                                        <Package2 className="h-6 w-6" />
                                        <span className="sr-only">
                                            Acme Inc
                                        </span>
                                    </Link>
                                    {links.map((link, idx) => (
                                        <div
                                            className="flex border-b border-gray-200 justify-between"
                                            key={idx}
                                        >
                                            {pathname === link.href ? (
                                                <SheetClose asChild>
                                                    <Link
                                                        className="text-sx hover:text-foreground text-green-600"
                                                        href={link.href}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </SheetClose>
                                            ) : (
                                                <SheetClose asChild>
                                                    <Link
                                                        href={link.href}
                                                        className="text-sx font-semibold text-grey-600 transition duration-100 hover:text-primary"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </SheetClose>
                                            )}
                                            <div>
                                                <ArrowRight />
                                            </div>
                                        </div>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                            <form className="ml-auto flex-1 sm:flex-initial">
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search products..."
                                        className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                                    />
                                </div>
                            </form>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        className="rounded-full"
                                    >
                                        <CircleUser className="h-5 w-5 text-green-700" />
                                        <span className="sr-only">
                                            Toggle user menu
                                        </span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                        My Account
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </header>
                </div>
            </div>
        </div>
        // <header className="mb-8 border-b">
        //     <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        //         <Link href="/">
        // <h1 className="text-2xl md:text-4xl font-bold">
        //     Next<span className="text-primary">Commerce</span>
        // </h1>
        //         </Link>

        //         <nav className="hidden gap-12 lg:flex 2xl:ml-16">
        // {links.map((link, idx) => (
        //     <div key={idx}>
        //         {pathname === link.href ? (
        //             <Link
        //                 className="text-lg font-semibold text-primary"
        //                 href={link.href}
        //             >
        //                 {link.name}
        //             </Link>
        //         ) : (
        //             <Link
        //                 href={link.href}
        //                 className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
        //             >
        //                 {link.name}
        //             </Link>
        //         )}
        //     </div>
        // ))}
        //         </nav>

        //         <div className="flex divide-x border-r sm:border-l">
        //             <Button
        //                 variant={"outline"}
        //                 // onClick={() => handleCartClick()}
        //                 className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
        //             >
        //                 <ShoppingBag />
        //                 <span className="hidden text-xs font-semibold text-gray-500 sm:block">
        //                     Cart
        //                 </span>
        //             </Button>
        //         </div>
        //     </div>
        // </header>
    );
}
