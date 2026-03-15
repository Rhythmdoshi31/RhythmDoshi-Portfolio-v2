export default function ProjectsSection() {
  return (
    <div className="innerContainer">

      {/* projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* row 1 */}
        <div className="p-4 min-h-[30vh] border-r">
          Project 1
        </div>

        <div className="p-4 min-h-[30vh] border-l">
          Project 2
        </div>
      </div>

    </div>
  );
}