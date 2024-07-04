"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote: "I love how easy it is to find stylish outfits that fit perfectly. The range of brands and sizes is impressive!",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote: "Shopping here has been a breeze! The website is intuitive, and the customer service is top-notch. Highly recommend!",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "I always find something unique and trendy here. The quality is great, and the prices are reasonable. A must-visit for fashion lovers!",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote: "From casual wear to formal attire, this site has it all. I've been a loyal customer for years and have never been disappointed.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote: "The quick delivery and easy returns make shopping online stress-free. This is my go-to for updating my wardrobe!",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];
