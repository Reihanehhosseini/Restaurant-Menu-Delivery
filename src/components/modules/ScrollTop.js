"use client"
import { usePathname } from "next/navigation";
import  { useEffect } from "react";

export default function ScrollTop() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("pp" , window.scrollY);
    
    window.scrollTo(0,0);
  }, [pathname]);
  return null;
}
