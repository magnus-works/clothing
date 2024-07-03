import Link from "next/link";
import { Button } from "@/components/ui/button";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import image1 from "../../public/HeroImages/686dcf10-6030-4b31-967d-356f8b747732.webp"; //Image for testing in local
import { JSX, SVGProps } from "react";


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

// const products = [
//     // Testing for local.
//     {
//         id: 1,
//         name: "Nike Windrunner",
//         categoryName: "Men",
//         price: 200,
//     },
//     {
//         id: 2,
//         name: "Nike Windrunner",
//         categoryName: "Men",
//         price: 200,
//     },
//     {
//         id: 3,
//         name: "Nike Windrunner",
//         categoryName: "Men",
//         price: 200,
//     },
//     {
//         id: 4,
//         name: "Nike Windrunner",
//         categoryName: "Men",
//         price: 200,
//     },
// ];

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

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((product) => (
                        <div key={product._id} className="group relative">
                            <div className="group relative w-full max-w-sm rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
                                <div className="relative aspect-[4/3] rounded-t-lg">
                                    <Image
                                        src={product.imageUrl}
                                        alt="Product Image"
                                        width={400}
                                        height={300}
                                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 z-10 flex items-center justify-between px-4 py-2 opacity-0 transition-opacity group-hover:opacity-100">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-full bg-card/80 text-card-foreground shadow-sm transition-colors hover:bg-card"
                                        >
                                            <ChevronLeftIcon className="h-5 w-5" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-full bg-card/80 text-card-foreground shadow-sm transition-colors hover:bg-card"
                                        >
                                            <ChevronRightIcon className="h-5 w-5" />
                                        </Button>
                                    </div>
                                    <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-full bg-card/80 text-card-foreground shadow-sm transition-colors hover:bg-card"
                                        >
                                            <HeartIcon className="h-5 w-5" />
                                            <span className="sr-only">
                                                Add to wishlist
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold tracking-tight">
                                            {product.name}
                                        </h3>
                                        <div className="text-2xl font-bold">
                                            ${product.price}
                                        </div>
                                    </div>
                                    <div className="mt-2 text-sm text-primary font-semibold">
                                        Category: {product.categoryName}
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                        <div className="flex items-center gap-1">
                                            <StarIcon className="h-4 w-4 fill-primary" />
                                            <StarIcon className="h-4 w-4 fill-primary" />
                                            <StarIcon className="h-4 w-4 fill-primary" />
                                            <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                                            <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                                            <span className="text-sm text-muted-foreground">
                                                4.3
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="rounded-full bg-card/80 text-card-foreground shadow-sm transition-colors hover:bg-card"
                                            ></Button>
                                            <Button
                                                size="sm"
                                                className="flex-shrink-0"
                                            >
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md"
                >
                    <div className="relative h-56 w-full">
                        <Image
                            src= {image1}
                            layout="fill"
                            objectFit="contain"
                            alt="Gentle Cleanse & Make-Up Remover"
                        />
                    </div>
                    <div className="p-5">
                        <h5 className="text-gray-900 text-xl font-medium mb-1">
                            Gentle Cleanse & Make-Up Remover 150ml
                        </h5>
                        <p className="text-gray-700 text-base mb-4">
                            Soft, clean skin starts with our bestselling
                            cleanser
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
                                £27.00
                            </span>
                            <button
                                className="py-2 px-4 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300"
                            >
                                Add to Bag
                            </button>
                        </div>
                    </div>
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

function ChevronLeftIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6" />
        </svg>
    );
}

function ChevronRightIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    );
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}
