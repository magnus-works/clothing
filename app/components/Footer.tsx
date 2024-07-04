import {
    Box,
    CircleHelp,
    Gift,
    Repeat,
    ScrollText,
    MapPin,
    Facebook,
    Instagram,
    Youtube,
    Twitter,
} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Footer() {
    return (
        <div className="bg-slate-50">
            <div className="flex flex-col md:flex-row justify-around px-4 md:px-56 py-3 bg-green-50 text-center">
                <div className="flex flex-col items-center gap-1 mb-4 md:mb-0">
                    <Box className="h-8 w-8 text-green-400" />
                    <div>EASY RETURNS</div>
                </div>
                <div className="flex flex-col items-center gap-1 mb-4 md:mb-0">
                    <CircleHelp className="h-8 w-8 text-green-400" />
                    <div>NEED HELP?</div>
                </div>
                <div className="flex flex-col items-center gap-1 mb-4 md:mb-0">
                    <Gift className="h-8 w-8 text-green-400" />
                    <div>LOYALTY SCHEME</div>
                </div>
                <div className="flex flex-col items-center gap-1 mb-4 md:mb-0">
                    <Repeat className="h-8 w-8 text-green-400" />
                    <div>SUBSCRIPTIONS</div>
                </div>
                <div className="flex flex-col items-center gap-1 mb-4 md:mb-0">
                    <ScrollText className="h-8 w-8 text-green-400" />
                    <div>OUR STORY</div>
                </div>
                <div className="flex flex-col items-center gap-1 mb-4 md:mb-0">
                    <MapPin className="h-8 w-8 text-green-400" />
                    <div>STOCKISTS</div>
                </div>
            </div>
            <div className="text-2xl md:text-3xl text-center py-8 border-b-2">
                THE PIONEERS OF ORGANIC BEAUTY SINCE 1997
            </div>
            <div className="flex flex-col md:flex-row justify-around px-4 md:px-32 py-8 border-b-2">
                <div className="flex flex-col items-center md:items-start gap-3 mb-8 md:mb-0">
                    <div className="">STAY UP TO DATE</div>
                    <div className="flex gap-6">
                        <Facebook className="h-10 w-10 text-green-400" />
                        <Instagram className="h-10 w-10 text-green-400" />
                        <Youtube className="h-10 w-10 text-green-400" />
                        <Twitter className="h-10 w-10 text-green-400" />
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start gap-3 mb-8 md:mb-0">
                    <div className="">CERTIFICATIONS</div>
                    <div className="flex gap-6">
                        <Box className="h-10 w-10 text-green-400" />
                        <Box className="h-10 w-10 text-green-400" />
                        <Box className="h-10 w-10 text-green-400" />
                        <Box className="h-10 w-10 text-green-400" />
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start gap-3 mb-8 md:mb-0">
                    <div className="">Current Location</div>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="India">India</SelectItem>
                            <SelectItem value="America">America</SelectItem>
                            <SelectItem value="Europe">Europe</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between px-4 md:px-44 py-8 text-center md:text-left">
                <div className="mb-4 md:mb-0">
                    <div>
                        © Copyright 2024 Next Ecommerce. All Rights Reserved.
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <div>Privacy Policy</div>
                    <div>Terms & Conditions</div>
                </div>
                <div>797 Kulas Fords, Skilesberg, GA 33691-3559</div>
            </div>
        </div>
    );
}
