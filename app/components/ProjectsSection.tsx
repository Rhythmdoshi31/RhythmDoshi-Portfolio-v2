import { ArrowUpRight } from "lucide-react";
import Heading from "./layout/Heading";
import Projects from "./Projects";
import ProjectLines from "./ProjectLines";
import type { Project } from "../types/Project.types";
import Link from "next/link";

export default function ProjectsSection() {
  const arr1: Project[] = [
    { slug:"betterdrive", heading: "BetterDrive", subheading: "Google Drive That Feels Right", image:"/projects/p1.webp"},
    { slug:"societysync", heading: "SocietySync", subheading: "Society Management Platform", image:"/projects/p2.webp"},
  ];
  
  const arr2: Project[] = [
    { slug:"livelychat", heading: "LivelyChat", subheading: "Online Chat Application", image:"/projects/p3.webp"},
    { slug:"cineclair", heading: "CineClair", subheading: "Movie & TV Recommendation Hub", image:"/projects/p4.webp"},
  ];
  
  const arr3: Project[] = [
    { slug:"portfolio", heading: "Portfolio", subheading: "My Personal Website v2", image:"/projects/p5.webp"},
    // { slug:"buzztube", heading: "BuzzTube", subheading: "Video Sharing Platform", image:"/projects/leetcode-difficulty-hider.webp"},
    { slug:"leetcode-hider", heading: "LeetCode Difficulty Hider", subheading: "Chrome Extension for Distraction-Free DSA Practice", image:"/projects/leetcode-difficulty-hider.webp"}
  ];

  return (
    <div>
      <Heading name="Projects" />

      <div className="w-full border-b">
        <div className="innerContainer h-fit py-4 flex items-center justify-start px-4 font1 tracking-tighter text2 text-sm">
          <h3>A collection of some of the projects I&apos;ve worked on.</h3>
        </div>
      </div>

      <ProjectLines />

      {/* large: 2 cols in Projects + 1 ProjectLines below */}
      <div className="hidden sm:block w-full border-b h-fit">
        <Projects projectData={arr1}/>
      </div>

      {/* small: 2 single rows each with ProjectLines below */}
      <div className="sm:hidden">
        <div className="w-full border-b h-fit">
          <Projects projectData={[arr1[0]]}/>
        </div>
        <ProjectLines />
        <div className="w-full border-b h-fit">
          <Projects projectData={[arr1[1]]}/>
        </div>
      </div>

      <ProjectLines />

      <div className="hidden sm:block w-full border-b h-fit">
        <Projects projectData={arr2}/>
      </div>
      <div className="sm:hidden">
        <div className="w-full border-b h-fit">
          <Projects projectData={[arr2[0]]}/>
        </div>
        <ProjectLines />
        <div className="w-full border-b h-fit">
          <Projects projectData={[arr2[1]]}/>
        </div>
      </div>

      <ProjectLines />

      <div className="hidden sm:block w-full border-b h-fit">
        <Projects projectData={arr3}/>
      </div>
      <div className="sm:hidden">
        <div className="w-full border-b h-fit">
          <Projects projectData={[arr3[0]]}/>
        </div>
        <ProjectLines />
        <div className="w-full border-b h-fit">
          <Projects projectData={[arr3[1]]}/>
        </div>
      </div>


      <div className="w-full border-b">
        <div className="innerContainer h-5 flex items-center justify-end px-4 py-3">
          <h5 className="text-sm text1 font2 tracking-tighter underline flex items-center gap-1 hover:!text-zinc-700 transition ease-in">
            <Link href={"https://github.com/Rhythmdoshi31?tab=repositories"}>More Projects on Github</Link>
            <ArrowUpRight size={14} />
          </h5>
        </div>
      </div>
    </div>
  );
}
