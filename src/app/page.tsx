"use client";
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function Home() {
  return (
    <>
      <div className="text-rose-500 text-2xl font-bold font-sans">
        Hello World
      </div>
      <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
    </>
  );
}
