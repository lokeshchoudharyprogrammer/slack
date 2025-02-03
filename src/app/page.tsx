"use client";
import { Button } from "@/components/ui/button"
import AuthScreen from "@/features/auth/components/auth-screen";
import { Loader2 } from "lucide-react"
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const {signOut}=useAuthActions()

  return (
    <>
     <p className="text-2xl">Logged in !</p>
     <Button onClick={()=>signOut()}>Sign Out</Button>
    </>
  );
}
 