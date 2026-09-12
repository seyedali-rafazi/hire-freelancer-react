"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarNavlinkProps {
  children: ReactNode;
  path: string;
}

function SidebarNavlink({ children, path }: SidebarNavlinkProps) {
  const pathname = usePathname();
  const isActive = pathname === path;
  const sidebarStyles =
    "text-sm text-secondery-800 font-bold p-3 hover:bg-primary-700 hover:text-white transition-all duration-200";

  return (
    <Link
      href={path}
      className={
        isActive
          ? `${sidebarStyles} bg-primary-700 text-white`
          : sidebarStyles
      }>
      {children}
    </Link>
  );
}

export default SidebarNavlink;
