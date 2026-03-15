import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function SocialLinks () {
    return (
       <div className="innerContainer h-full flex">
          <div className="flex-1 border-r flex items-center justify-between px-3 pl-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/linkedin.webp"
                alt="linkedin"
                width={24}
                height={24}
                className="rounded-md"
              />
              <h3>LinkedIn</h3>
            </div>
            <ArrowUpRight className="w-4 h-4 text-text2" />
          </div>

          <div className="flex-1 border-r flex items-center justify-between px-3 pl-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/github.webp"
                alt="github"
                width={24}
                height={24}
                className="rounded-md"
              />
              <h3>Github</h3>
            </div>
            <ArrowUpRight className="w-4 h-4 text-text2" />
          </div>

          <div className="flex-1 border-r flex items-center justify-between px-3 pl-4">
            <div className="flex items-center gap-2">
              <Image src="/images/x.webp" alt="x" width={24} height={24} className="rounded-md"/>
              <h3>X</h3>
            </div>
            <ArrowUpRight className="w-4 h-4 text-text2" />
          </div>

          <div className="flex-1 flex items-center justify-between px-3 pl-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/leetcode.webp"
                alt="leetcode"
                width={24}
                height={24}
                className="rounded-md"
              />
              <h3>LeetCode</h3>
            </div>
            <ArrowUpRight className="w-4 h-4 text-text2" />
          </div>
        </div>         
    )
}