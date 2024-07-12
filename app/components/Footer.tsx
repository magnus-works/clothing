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
    Smartphone,
    MapPinned,
    Phone,
    LocateFixed,
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
                STRONG PRODUCT DEVELOPMENT SETUP
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
            <div>
                <div className="flex flex-col lg:flex-row md:justify-between px-4 md:px-32 py-8 text-center md:text-left">
                    <div className="mb-4 md:mb-0 md:flex">
                        <div className="md:flex md:justify-center md:items-center">
                            © Copyright 2024 Team Magnus. All Rights Reserved.
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2 mb-4 mt-2 md:my-0 justify-start md:justify-center">
                        <div className="text-2xl font-bold">
                            Archana Selections
                        </div>
                        <div className="text-2xl font-bold">
                            Archana Garments
                        </div>
                    </div>
                    <div className="gap-y-2">
                        <div className="">
                            <div className="text-lg font-bold flex gap-2 justify-center md:justify-start">
                                <MapPinned className="text-green-500" />
                                Main Store:
                            </div>
                            <div className="text-gray-700">
                                #4-5-305/306 Ashoknagar, Karimnagar -505001,
                                Telangana.
                            </div>
                            <div>
                                <div className="flex text-center justify-center md:justify-start">
                                    <Smartphone className="text-green-500" />:
                                    <div className="font-bold ml-2">
                                        +91 9440009232
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 text-gray-700">
                            <div className="font-bold text-black text-lg flex gap-2 justify-center md:justify-start">
                                <LocateFixed className="text-green-500" />
                                Branch :
                            </div>
                            #19-2-55/1, Markandaya Colony, Godavarikhani,
                            Peddapelli -505209, Telangana.
                            <div>
                                <div className="flex text-center justify-center md:justify-start">
                                    <Phone className="text-green-500" />:
                                    <div className="font-bold ml-2 text-black">
                                        +91 8886651252
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="font-semibold">
                                        archanagarmentsknr@gmail.com
                                    </div>
                                    <div className="flex justify-center md:justify-start">
                                        <div className="text-green-800 font-bold">
                                            GST:
                                        </div>
                                        36ALWPP0190P1Z6
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
