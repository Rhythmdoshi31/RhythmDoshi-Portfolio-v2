export default function EducationSection() {
  return (
    <div className="innerContainer py-6 px-4">
      <ul className="list-disc marker:text-zinc-300 space-y-4">

        <li>
          <div className="flex items-center justify-between">
            <span className="text1 font1 tracking-tighter">
              B.Tech in Electronics & Communication Engineering - <br />
              <span className="italic px-4"> Lakshmi Narain College of Technology, Bhopal (8.16 CGPA)</span>
            </span>
            <span className="text2 font1 tracking-tighter italic">
              2022–2026
            </span>
          </div>
        </li>

        <li>
          <div className="flex items-center justify-between">
            <span className="text1 font1 tracking-tighter">
              Senior Secondary (Class XII)  
              <span className="italic"> - Ambuja Vidya Peeth, Rawan (90%)</span>
            </span>
            <span className="text2 font1 tracking-tighter italic">
              2022
            </span>
          </div>
        </li>

      </ul>
    </div>
  );
}