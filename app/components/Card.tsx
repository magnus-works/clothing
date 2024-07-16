"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Shirt from "./images/Shirt.jpg";
import BottomWear from "./images/BottomWear.jpeg";
import boys from "./images/boys.jpeg";
import ethinic from "./images/ethinic.jpg";
import girls from "./images/girls.jpeg";
import ladies from "./images/ladies.jpg";
import outerwear from "./images/outerwear.jpg";
import seasonal from "./images/seasonal.jpeg";
import sports from "./images/sports.jpg";
import Tshirt from "./images/Tshirt.jpg";
export default function Card() {
    return (
        <div>
            <div className="flex justify-center text-3xl font-bold p-12">
                Product Range
            </div>
            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}
const SkeletonOne = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row justify-center rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
            >
                <Image
                    src={Shirt}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="h-36 w-36"
                />
            </motion.div>
        </motion.div>
    );
};
const SkeletonTwo = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row justify-center rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
            >
                <Image
                    src={BottomWear}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="h-34 w-34"
                />
            </motion.div>
        </motion.div>
    );
};
const SkeletonThree = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row justify-center rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
            >
                <Image
                    src={Tshirt}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="h-34 w-34"
                />
            </motion.div>
        </motion.div>
    );
};
const SkeletonFour = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row justify-center rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
            >
                <Image
                    src={sports}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="h-36 w-36"
                />
            </motion.div>
        </motion.div>
    );
};
const SkeletonFive = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row justify-center rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
            >
                <Image
                    src={outerwear}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="h-36 w-36"
                />
            </motion.div>
        </motion.div>
    );
};
const SkeletonSix = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row justify-center rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
            >
                <Image
                    src={ethinic}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="h-36 w-36"
                />
            </motion.div>
        </motion.div>
    );
};
const SkeletonSeven = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row justify-center rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
            >
                <Image
                    src={seasonal}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="h-36 w-36"
                />
            </motion.div>
        </motion.div>
    );
};
const SkeletonEight = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row justify-center rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
            >
                <Image
                    src={boys}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="h-36 w-36"
                />
            </motion.div>
        </motion.div>
    );
};
const SkeletonNine = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row justify-center rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
            >
                <Image
                    src={girls}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="h-36 w-36"
                />
            </motion.div>
        </motion.div>
    );
};
const SkeletonTen = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row justify-center rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
            >
                <Image
                    src={ladies}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="h-36 w-36"
                />
            </motion.div>
        </motion.div>
    );
};
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "Shirts",
        description:
            "Formal, Casual, Slim Fit, Slim fit Kurthas, Full Sleeves, Half Sleeves.",
        header: <SkeletonOne />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Bottom Wear",
        description:
            "Jeans, Casual Pants, Polo Fit Trousers, Ankle Length Jeans, Funky Jeans.",
        header: <SkeletonTwo />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Mens T-Shirts",
        description:
            "Round Neck, V Neck, Collor T-shirts, Huddles(cap T-shirts), Full & Half Sleeves",
        header: <SkeletonThree />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Sports Wear",
        description: "Lower, Shorts, T-shirts, Kabaddi Set, Cricket Set",
        header: <SkeletonFour />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Outer Wear",
        description:
            "Coller T-Shirts, Shorts, Boxer Shorts, Golf Nicker, Girls Full Pant Set, Girls Full Pant Set, 3/4 Set Items.",
        header: <SkeletonFive />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Ethinic Wear",
        description:
            "Kurthas & Pyjamas, Modi Jocket, Blazer Suits, 3 Piece Suits, Dhoti Set 3 Piece, Wedding set, Wedding caps.",
        header: <SkeletonSix />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Seasonal",
        description:
            "Haldhi Kurtha, Couple Dresses, Ayappa Mala Shirts, Hanuman Mala Shirts, Shalwas",
        header: <SkeletonSeven />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Boys",
        description:
            "Jeans, Cargos, Shirts, T-Shirts, Denim Shirts, 3 Piece Suits, Huddles",
        header: <SkeletonEight />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Girls",
        description: "Frocks, Leggings, Denim Jeans, Weston items",
        header: <SkeletonNine />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Ladies",
        description:
            "Patiala Suits, Plazo Suits, Straight Cut Suits, Ankle Fit Leggings, Full Length Leggings, Plazo Pants, Patiala Pants, Cotton Nighties",
        header: <SkeletonTen />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];
