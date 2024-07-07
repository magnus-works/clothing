"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";
import { FlipWords } from "@/components/ui/flip-words";

export default function HeroHighlightDemo() {
    const words = [
        "attire",
        "threads",
        "outfits",
        "clothing",
        "apparel",
        "styles",
        "trends",
    ];
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                Explore
                <FlipWords words={words} /> <br />
                that redefine
                <Highlight className="text-black dark:text-white">
                    your personal style
                </Highlight>
                effortlessly.
                <p className="max-w-md leading-relaxed text-lg text-gray-500 xl:text-lg mt-4">
                    We sell only the most exclusive and high quality products
                    for you. We are the best.
                </p>
            </motion.h1>
        </HeroHighlight>
    );
}
