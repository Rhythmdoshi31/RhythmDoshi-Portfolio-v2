"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const update = () => setHash(window.location.hash);

    update(); // initial

    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);

    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
    };
  }, []);

  const isHome = pathname === "/" && hash !== "#projects";
  const isProjects =
    pathname.startsWith("/project") || hash === "#projects";

  return (
    <nav className="sticky top-2 z-50 h-12 w-full flex justify-center items-center bg1 border-y">
      
      <div className="h-full max-w-3xl w-full flex justify-between items-center px-8 border-x">
        
        <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />

        <div className="flex gap-8">
          
          <Link href="/" onClick={() => setHash("")}>
            <h5 className={`${isHome ? "text1" : "text2 hover:text1"}`}>
              Home
            </h5>
          </Link>

          <Link href="/#projects" onClick={() => setHash("#projects")}>
            <h5 className={`${isProjects ? "text1" : "text2 hover:text1"}`}>
              Projects
            </h5>
          </Link>

        </div>

      </div>
    </nav>
  );
}