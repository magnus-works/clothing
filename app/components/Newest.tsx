import Link from "next/link";
import { Button } from "@/components/ui/button";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Heart,
    Star,
    Eye,
    Repeat,
    ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import { AddToBag } from "@/components/Addtobag";
// import image1 from "../../public/HeroImages/686dcf10-6030-4b31-967d-356f8b747732.webp"; //Image for testing in local

async function getData() {
    const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
        _id,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name,
        "imageUrl": images[0].asset->url
    }`;

    const data = await client.fetch(query);

    return data;
}

export default async function Newest() {
    const data: simplifiedProduct[] = await getData();

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Our Newest products
                    </h2>

                    <Link
                        className="text-primary flex items-center gap-x-1"
                        href="/all"
                    >
                        See All{" "}
                        <span>
                            <ArrowRight />
                        </span>
                    </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
                    {data.map((product) => (
                        <div key={product._id} className="group relative">
                            <div className="relative max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md">
                                <div className="relative h-80 w-full">
                                    <Image
                                        src={product.imageUrl}
                                        layout="fill"
                                        objectFit="contain"
                                        alt="Gentle Cleanse & Make-Up Remover"
                                    />
                                </div>
                                <div
                                //className="hidden group-hover:block"
                                >
                                    <div className="absolute top-4 right-4 z-10 flex flex-col items-center gap-2 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-transform duration-500">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-full bg-card/80 text-card-foreground shadow-sm transition-colors hover:bg-card"
                                        >
                                            <Heart className="h-5 w-5" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-full bg-card/80 text-card-foreground shadow-sm transition-colors hover:bg-card"
                                        >
                                            <Eye className="h-5 w-5" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-full bg-card/80 text-card-foreground shadow-sm transition-colors hover:bg-card"
                                        >
                                            <Repeat className="h-5 w-5" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-full bg-card/80 text-card-foreground shadow-sm transition-colors hover:bg-card"
                                        >
                                            <ShoppingBag className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h5 className="text-gray-900 text-xl font-medium mb-1">
                                        {product.name}
                                    </h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        {product.categoryName}
                                    </p>
                                    <div className="flex items-center mb-4">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.11 3.405a1 1 0 00.95.69h3.59c.97 0 1.37 1.24.588 1.81l-2.897 2.1a1 1 0 00-.364 1.118l1.11 3.405c.3.921-.755 1.695-1.539 1.118l-2.897-2.1a1 1 0 00-1.175 0l-2.897 2.1c-.784.577-1.838-.197-1.539-1.118l1.11-3.405a1 1 0 00-.364-1.118l-2.897-2.1c-.782-.57-.382-1.81.588-1.81h3.59a1 1 0 00.95-.69l1.11-3.405z"></path>
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-sm font-medium text-gray-500 ml-2">
                                            (1410)
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-3xl font-bold text-gray-900">
                                            ${product.price}
                                        </span>
                                        <AddToBag/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Below code for testing in the local environment*/}

                {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                                <Image
                                    src={image1}
                                    alt="Product image"
                                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                                    width={300}
                                    height={300}
                                />
                            </div>

                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        {product.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {product.categoryName}
                                    </p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    ${product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
}
