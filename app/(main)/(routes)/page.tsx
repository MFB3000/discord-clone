import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const state = false;

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <ModeToggle></ModeToggle>
    </div>
  )
}
