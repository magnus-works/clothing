import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import React from "react";
import { FlipWords } from "../../components/ui/flip-words";
// import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";
import { motion } from "framer-motion";
import HeroHighlight from "../../app/components/HeroHighlight";
import MovingCards from "./MovingCards";
import { BentoGrid } from "@/components/ui/bento-grid";
import Card from "./Card";
import Whatsapp from "./Whatsapp";

import image1 from "../../public/HeroImages/686dcf10-6030-4b31-967d-356f8b747732.webp"; // get image from the local
import image2 from "../../public/HeroImages/ba06b5a3-3cc0-4730-957a-a484b2fcbaa9.webp"; // get image from the local

async function getData() {
    const query = "*[_type == 'heroImages'][0]";
    const data = await client.fetch(query);
    return data;
}

export default async function Hero() {
    const data = await getData();
    return (
        <div>
            <Whatsapp />
            <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-screen-2xl lg:px-8 lg:h-[850px]">
                <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                    <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                        <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:mb-8 md:text-5xl"></h1>
                        <HeroHighlight />
                    </div>

                    <div className="mt-6 mb-12 flex w-full md:mb-16 lg:w-2/3">
                        <div className=" md:h-[700px] relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                            <Image
                                src={urlFor(data.image1).url()}
                                // src={image1}  if you want to get the image from the local
                                alt="Great Photo"
                                className="md:h-[700px] w-full object-cover object-center"
                                priority
                                width={300}
                                height={300}
                            />
                        </div>

                        <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[700px]">
                            <Image
                                src={urlFor(data.image2).url()}
                                // src={image2}  if you want to get the image from the local
                                alt="Great Photo"
                                className="md:h-[700px] w-full object-cover object-center"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Special Category Bar for navigation  */}
            {/* <div className="flex flex-col items-center justify-between md:items-center md:justify-center gap-8 md:flex-row">
                <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
                    <Link
                        href="/Men"
                        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                    >
                        Men
                    </Link>
                    <Link
                        href="/Women"
                        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                    >
                        Women
                    </Link>
                    <Link
                        href="/Kids"
                        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                    >
                        Kids
                    </Link>
                    <Link
                        href="/Mens-TShirts"
                        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                    >
                        T-Shirts
                    </Link>
                    <Link
                        href="/Shirts"
                        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                    >
                        Shirts
                    </Link>
                    <Link
                        href="/Bottom-Wear"
                        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                    >
                        Bottom Wear
                    </Link>
                    <Link
                        href="/Sports-Wear"
                        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                    >
                        Sports Wear
                    </Link>
                    <Link
                        href="/Outer-Wear"
                        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                    >
                        Outer Wear
                    </Link>
                    <Link
                        href="/Ethinic-Wear"
                        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                    >
                        Ethinic Wear
                    </Link>
                    <Link
                        href="/Seasonal"
                        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                    >
                        Seasonal Wear
                    </Link>
                </div>
            </div> */}
            <div className="text-3xl font-bold p-12">
                <Card />
                {/* <MovingCards /> */}
            </div>
        </div>
    );
}
