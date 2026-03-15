import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-12 w-full flex justify-center items-center bg1 border-y dark:border-y">
        <div className="h-full w-3xl flex justify-between items-center px-8 border-x dark:border-x">
            <Image
                src="/images/logo.svg"
                alt="Logo"
                width={32}
                height={32}
                
            />
            <div className="flex items-center justify-center gap-12">
                <h5>Home</h5>
                <h5>Projects</h5>
            </div>
        </div>
    </div>
  );
}