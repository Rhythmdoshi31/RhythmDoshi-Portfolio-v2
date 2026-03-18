import Project from "./ui/Project";
import type { ProjectProps } from "../types/Project.types";
export default function Projects({ projectData }: ProjectProps) {
  return (
    <div className="innerContainer">

      {/* projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* row 1 */}
        <div className="p-2 h-[38vh] border-r hover:bg-zinc-50 dark:hover:bg-[#1c1c1e] transition ease-in cursor-pointer">
          <Project {...projectData[0]}/>
        </div>

        <div className="p-2 h-[38vh] border-l hover:bg-zinc-50 cursor-pointer dark:hover:bg-[#1c1c1e] transition ease-in">
          <Project {...projectData[1]} />
        </div>
      </div>

    </div>
  );
}