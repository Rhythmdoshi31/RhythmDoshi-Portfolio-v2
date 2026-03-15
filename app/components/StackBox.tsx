const stack = [
  "typescript","java","js","react","nextjs","nodejs","express",
  "tailwindcss","redux","mysql","pg","mongodb","redis",
  "shadcn-ui","postman","cursor"
];

const needsBg = ["nextjs","express","cursor","shadcn-ui"];

export default function StackBox() {
  return (
    <div className="innerContainer p-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] gap-6 place-items-center">

        {stack.map((tech) => (
          <div
            key={tech}
            className={`
              size-9 flex items-center justify-center rounded-xl
              ${needsBg.includes(tech) ? "dark:bg-white" : ""}
            `}
          >
            <img
              src={`/techstack/${tech}.svg`}
              className="size-8 rounded-md"
              alt={tech}
            />
          </div>
        ))}

      </div>
    </div>
  );
}