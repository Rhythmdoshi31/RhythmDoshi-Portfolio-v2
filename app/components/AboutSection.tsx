export default function AboutSection () {
    return (
        <>
            <div className="innerContainer h-full px-4 text-[15px]">
          <div className="flex flex-col gap-4 font1 tracking-tighter py-4">
            <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-zinc-300 text1">
              <li>
                Final-year full-stack developer who enjoys building things for
                the web with strong attention to small details.
              </li>

              <li>
                Experienced with{" "}
                <span className="font-medium">
                  Next.js, React, Express, Node.js, TypeScript{" "}
                </span>
                and modern full-stack technologies, focused on creating
                high-quality, user-centric web applications.
              </li>

              <li>
                Passionate about exploring new technologies and turning ideas
                into reality through polished personal projects.
              </li>

              <li>
                <span className="font-medium">Highlights</span>

                <ul className="list-disc pl-6 mt-2 flex flex-col gap-2 marker:text-zinc-300 text1">
                  <li>Hacktoberfest 2025 — <span className="font-medium underline">Supercontributor</span> (Open Source)</li>
                  <li>
                    Solved <span className="font-medium underline">700+ DSA problems</span> (and counting, because it&apos;s
                    fun)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        </>
    )
}