import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function SocialLinks () {
    return (
       <div className="innerContainer h-32 md:h-16 grid grid-cols-2 md:grid-cols-4">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rhythmdoshi04/" className="group hover-bg2 transition ease-in border-r flex items-center justify-between px-3 pl-4 border-b md:border-b-0">
            <div className="flex items-center gap-2">
              <Image
                src="/images/linkedin.webp"
                alt="LinkedIn Profile"
                width={24}
                height={24}
                className="rounded-md"
              />
              <h3>LinkedIn</h3>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:rotate-45 transition ease-in-out" />
          </a>

          
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rhythmdoshi31" className="group hover-bg2 transition ease-in flex-1 border-r flex items-center justify-between px-3 pl-4 border-b md:border-b-0">
            <div className="flex items-center gap-2">
              <Image
                src="/images/github.webp"
                alt="Github Profile"
                width={24}
                height={24}
                className="rounded-md"
              />
              <h3>Github</h3>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:rotate-45 transition ease-in-out" />
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://x.com/rhythmdoshi04" className="group hover-bg2 transition ease-in flex-1 border-r flex items-center justify-between px-3 pl-4">
            <div className="flex items-center gap-2">
              <Image src="/images/x.webp" alt="X Profile" width={24} height={24} className="rounded-md"/>
              <h3>X</h3>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:rotate-45 transition ease-in-out" />
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/u/Rhythmdoshi31/" className="group hover-bg2 transition ease-in flex-1 flex items-center justify-between px-3 pl-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/leetcode.webp"
                alt="LeetCode Profile"
                width={24}
                height={24}
                className="rounded-md"
              />
              <h3>LeetCode</h3>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:rotate-45 transition ease-in-out" />
          </a>
        </div>         
    )
}