"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface CustomeNavlinkProps {
  children: ReactNode;
  path: string;
}

export default function CustomeNavlink({ children, path }: CustomeNavlinkProps) {
  const pathname = usePathname();
  const isActive = pathname === path;
  const sidebarStyles =
    "flex items-center gap-x-3 text-secondery-600 hover:bg-primary-100/50 hover:text-primary-700 py-2.5 px-3 transition-all duration-300 rounded-xl font-medium text-sm";
  return (
    <li>
      <Link
        href={path}
        className={
          isActive
            ? `${sidebarStyles} bg-primary-100/80 text-primary-600`
            : sidebarStyles
        }>
        {children}
      </Link>
    </li>
  );
}
