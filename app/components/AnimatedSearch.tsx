"use client";

import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";

export default function PlaceholdersAndVanishInputDemo() {
    const placeholders = [
        "Search for your perfect style.  ",
        "Find the latest trends instantly.",
        "Explore our extensive collection.",
        "Browse by category, brand, or size.",
        "Looking for something specific?",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    );
}
