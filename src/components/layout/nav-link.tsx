"use client";
import { SettingsNavigation } from "@/base/tina/__generated__/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

function NavLink({ label, link, external }: SettingsNavigation) {
  const active = usePathname() === link;
  //   const target = external ? {target: ""}: {}
  return (
    <Button
      asChild
      variant="link"
      className={cn(active ? "text-foreground" : "text-muted-foreground")}
    >
      <Link href={link?.length ? link : "/"} target={external ? "_blank" : ""}>
        {label}
      </Link>
    </Button>
  );
}

export default NavLink;
