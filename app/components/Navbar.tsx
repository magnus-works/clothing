"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, BadgeIndianRupee, ShoppingCart } from "lucide-react";
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
import { AnimatedButton } from "../../components/ui/moving-border";
import image1 from "../../public/MenuPhotos/Home.jpg";
import image2 from "../../public/MenuPhotos/MenMenu.jpg";
import image3 from "../../public/MenuPhotos/Women.jpg";
import image4 from "../../public/MenuPhotos/Kids.jpg";
import AnimatedSearch from "./AnimatedSearch";
import Image from "next/image";
const links = [
    { name: "Home", href: "/", img: image1 },
    { name: "Men", href: "/Men", img: image2 },
    {
        name: "Women",
        href: "/Women",
        img: image3,
    },
    { name: "Kids", href: "/Kids", img: image4 },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div>
            <div className="flex justify-center bg-primary h-10 md:gap-48 lg:gap-96">
                <div className="">
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
                    <AnimatedButton
                        borderRadius="1.75rem"
                        containerClassName="w-60"
                        className="text-sm bg-white dark:bg-slate-900 text-green-700 font-bold dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <BadgeIndianRupee className="mr-2" />
                        Buy now Offers on the Way
                    </AnimatedButton>
                </div>

                <div className="ml-2 flex-1 md:flex justify-center items-center">
                    <h1 className="text-lg justify-center items-center sm:text-2xl md:text-3xl font-bold">
                        Archana<span className="text-primary"> Garments</span>
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
                                            className="flex border-b border-gray-200 justify-center items-center"
                                            key={idx}
                                        >
                                            <div className="mx-4 mb-1">
                                                <Image
                                                    className="rounded-full"
                                                    src={link.img}
                                                    width={30}
                                                    alt=""
                                                    height={30}
                                                />
                                            </div>
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
                                            <div className="flex flex-1 justify-end">
                                                <ArrowRight />
                                            </div>
                                        </div>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                            <form className="ml-auto flex-1 sm:flex-initial">
                                <AnimatedSearch />
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
    );
}
