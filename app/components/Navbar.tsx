"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, ShoppingCart } from "lucide-react";
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
                <div className="flex-1">
                    <div className="flex rounded-full border border-gray-200 w-[370px] h-12 items-center p-2">
                        <Input
                            type="search"
                            placeholder="I'm Looking For..."
                            className="border-hidden outline-none ring-0"
                        />
                        <div className="rounded-full bg-green-100 h-10   w-10 flex items-center justify-center mr-2">
                            <Search className="h-4 w-4 text-green-600" />
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        Next<span className="text-primary">Commerce</span>
                    </h1>
                </div>
                <div className="flex flex-1 justify-end items-center gap-4">
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
        </div>
        // <header className="mb-8 border-b">
        //     <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        //         <Link href="/">
        // <h1 className="text-2xl md:text-4xl font-bold">
        //     Next<span className="text-primary">Commerce</span>
        // </h1>
        //         </Link>

        //         <nav className="hidden gap-12 lg:flex 2xl:ml-16">
        //             {links.map((link, idx) => (
        //                 <div key={idx}>
        //                     {pathname === link.href ? (
        //                         <Link
        //                             className="text-lg font-semibold text-primary"
        //                             href={link.href}
        //                         >
        //                             {link.name}
        //                         </Link>
        //                     ) : (
        //                         <Link
        //                             href={link.href}
        //                             className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
        //                         >
        //                             {link.name}
        //                         </Link>
        //                     )}
        //                 </div>
        //             ))}
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
