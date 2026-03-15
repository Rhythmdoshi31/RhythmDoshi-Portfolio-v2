import { ArrowUpRight } from "lucide-react";
import Heading from "./layout/Heading";
import Projects from "./Projects";
import ProjectLines from "./ProjectLines";

export default function ProjectsSection() {
  return (
    <div>
      <Heading name="Projects" />

      <div className="w-full border-b">
        <div className="innerContainer h-12 flex items-center justify-start px-4 font1 tracking-tighter text2 text-sm">
          <h3>A collection of some of the projects I&apos;ve worked on.</h3>
        </div>
      </div>

      <ProjectLines />

      <div className="w-full border-b h-fit">
        <Projects />
      </div>

      <ProjectLines />

      <div className="w-full border-b h-fit">
        <Projects />
      </div>

      <ProjectLines />

      <div className="w-full border-b h-fit">
        <Projects />
      </div>
      <div className="w-full border-b">
        <div className="innerContainer h-5 flex items-center justify-end px-4 py-3">
          <h5 className="text-sm text1 font2 tracking-tighter underline flex items-center gap-1">
            More Projects on Github
            <ArrowUpRight size={14} />
          </h5>
        </div>
      </div>
    </div>
  );
}
