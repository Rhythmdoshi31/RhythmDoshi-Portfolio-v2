import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-12 w-full flex justify-center items-center bg1 border-y dark:border-y">
        <div className="h-full w-3xl flex justify-between items-center px-8 border-x dark:border-x">
            <Image
                src="/images/logo.svg"
                alt="Logo"
                width={32}
                height={32}
                
            />
            <div className="flex items-center justify-center gap-12">
                <Link href="/">
                    <h5>Home</h5>
                </Link >
                <Link href="#projects">
                    <h5>Projects</h5>
                </Link>
            </div>
        </div>
    </nav>
  );
}