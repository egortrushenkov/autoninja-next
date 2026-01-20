'use client'
 
import { useEffect } from 'react'
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    ym: (...args: any[]) => void;
  }
}

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    if (typeof window !== "undefined" && typeof window.ym === "function") {
      window.ym(94235766, 'hit', url);
    }
  }, [pathname, searchParams]);

  return null;
}