"use client";
import { CardStack } from "../../components/ui/card-stack";
import { cn } from "@/lib/utils";
import Brand1 from "./images/brand1.png";
import Brand2 from "./images/brand2.png";
import Brand3 from "./images/brand3.png";
import Brand4 from "./images/brand4.png";
import Image from "next/image";
export function CardStackDemo() {
    return (
        <div className="mt-20 md:ml-20 flex md:justify-between gap-x-10 gap-y-10 flex-col md:flex-row">
            <div className="flex items-center justify-center">
                <CardStack items={CARDS} />
            </div>
            <div className="flex flex-col gap-y-4 lg:flex-row gap-x-4 md:gap-x-10 lg:gap-x-20 justify-center items-center">
                <div className="bg-yellow-100 rounded-[100px] border-4 border-yellow-500 shadow-xl">
                    <Image
                        src={Brand1}
                        alt="avatar"
                        height="100"
                        width="100"
                        className="h-44 w-44 p-4"
                    />
                </div>
                <div className="bg-yellow-100 rounded-[100px] border-4 border-yellow-500 shadow-xl">
                    <Image
                        src={Brand2}
                        alt="avatar"
                        height="100"
                        width="100"
                        className="h-44 w-44 p-4"
                    />
                </div>
                <div className="bg-yellow-100 rounded-[100px] border-4 border-yellow-500 shadow-xl">
                    <Image
                        src={Brand3}
                        alt="avatar"
                        height="100"
                        width="100"
                        className="h-44 w-44 p-4"
                    />
                </div>
                <div className="bg-yellow-100 rounded-[100px] border-4 border-yellow-500 shadow-xl">
                    <Image
                        src={Brand4}
                        alt="avatar"
                        height="100"
                        width="100"
                        className="h-44 w-44 p-4"
                    />
                </div>
            </div>
        </div>
    );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className,
            )}
        >
            {children}
        </span>
    );
};

const CARDS = [
    {
        id: 6,
        name: "Vision",
        designation: "Archana Garments",
        content: (
            <p>
                To be the <Highlight>most preferred vender partner</Highlight>
                to each one of our customers
            </p>
        ),
    },
    {
        id: 5,
        name: "Mission",
        designation: "Archana Garments",
        content: (
            <p>
                To Manufacture and export fashionable garments at a
                <Highlight>high standard </Highlight> , in a sustainable and
                ethical manner.
            </p>
        ),
    },
    {
        id: 4,
        name: "Our Strength",
        designation: "Archana Garments",
        content: (
            <p>
                <Highlight>1. Customer Centric Model </Highlight> - flexibility
                in lead times, quantities and styling.
            </p>
        ),
    },
    {
        id: 3,
        name: "Our Strength",
        designation: "Archana Garments",
        content: <p>2. Strong Product Development Setup.</p>,
    },
    {
        id: 2,
        name: "Our Strength",
        designation: "Archana Garments",
        content: (
            <p>
                3. Commitment to consistent
                <Highlight>high quality </Highlight> and maintain schedules.
            </p>
        ),
    },
    {
        id: 1,
        name: "Our Strength",
        designation: "Archana Garments",
        content: <p>4. Realistic prices.</p>,
    },
    {
        id: 0,
        name: "Our Strength",
        designation: "Archana Garments",
        content: <p>5. Ethical and Sustainable Manufacture policy</p>,
    },
];
