"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function AddToBag() {
  const { toast } = useToast();

  return (
    <Button
      className="py-2 px-4 text-sm font-medium text-white bg-pink-600 rounded hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300"
      variant="outline"
      onClick={() => {
        toast({
          description: "Added To the Bag",
        });
      }}
    >
      Most liked
    </Button>
  );
}
