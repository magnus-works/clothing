"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MapPinned } from "lucide-react";
import avatar1 from "./images/avatar1.jpeg";
import avatar2 from "./images/avatar2.png";
import avatar3 from "./images/avatar3.png";

const SkeletonFour = () => {
    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
        >
            <motion.div
                variants={first}
                className="h-full w-1/3 rounded-2xl bg-yellow-100 p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <Image
                    src={avatar1}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    The products here are really great!
                </p>
                <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600  text-xs rounded-full px-2 py-0.5 mt-4">
                    Superb
                </p>
            </motion.div>
            <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-yellow-50 p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
                <Image
                    src={avatar2}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Cloth Quality is Excellent.
                </p>
                <p className="border border-yellow-500 bg-yellow-100 dark:bg-green-900/20 text-yellow-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Fantastic
                </p>
            </motion.div>
            <motion.div
                variants={second}
                className="h-full w-1/3 rounded-2xl bg-yellow-100 p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <Image
                    src={avatar3}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    I love Archana Garments and their products.
                </p>
                <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Great
                </p>
            </motion.div>
        </motion.div>
    );
};

const items = [
    {
        title: "Archana Garments",
        description: (
            <span className="text-sm">
                Discover the Finest Collection of Trendy and Traditional Wear.
            </span>
        ),
        header: <SkeletonFour />,
        className: "md:col-span-3",
        icon: <MapPinned className="h-6 w-6 text-primary" />,
    },
];

export default function SimpleMap() {
    return (
        <div className="flex flex-col md:flex-row gap-2 p-12">
            <div>
                <div className="flex justify-center text-4xl font-bold p-12">
                    Our <div className="text-primary ml-2">Location</div>
                </div>
                <div>
                    <BentoGrid className="max-w-4xl mx-auto">
                        {items.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                icon={item.icon}
                                className={cn("[&>p:text-lg]", item.className)}
                            />
                        ))}
                    </BentoGrid>
                </div>
            </div>

            <iframe
                className="w-[300px] sm:w-[450px] md:w-[1000px] border border-black-200 shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.998298209778!2d79.1393648!3d18.438386400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd91bb64fa125%3A0x4753d3761fa7d7c3!2sArchana%20Garments!5e0!3m2!1sen!2snl!4v1721220446394!5m2!1sen!2snl"
                // width="600"
                height="450"
                loading="lazy"
            ></iframe>
        </div>
    );
}
