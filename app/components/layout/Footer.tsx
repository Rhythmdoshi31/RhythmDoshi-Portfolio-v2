import RotatingText from "../ui/RotatingText";

export default function Footer() {
  const texts1 = [
    "Seeking the right opportunity. Let's talk.",
    "Open to work and excited to contribute.",
    "Eager to bring value to the right team."
  ];

  const texts2 = [
    "Into you hands",
    "will be placed",
    "the exact results",
    "of your own thoughts;",
    "you will recieve",
    "that which you earn",
    "no less",
    "no more.",
  ];
  return (
    <footer className="w-full h-[30vh]">
      <div className="innerContainer h-full flex items-end justify-between p-4 pb-12">
        <div className="flex-col flex">
          <h1 className="text-xl font2 text2 underline hover:!text-zinc-700 transition">Rhythm Doshi</h1>
          <a href="https://github.com/Rhythmdoshi31" className="hover:!text-zinc-700 transition text-sm font1 tracking-tight text2">Github</a>
          <a href="https://www.linkedin.com/in/rhythmdoshi04/" className="hover:!text-zinc-700 transition text-sm font1 tracking-tight text2">Linkedin</a>
          <a href="tel:+91-9981603789" className="text-sm font1 tracking-tight text2 hover:!text-zinc-700 transition">+91-9981603789</a>
        </div>
        <div className="flex flex-col items-end justify-between h-full w-1/2 pt-4">
          <RotatingText texts={texts1} />
          <RotatingText texts={texts2}/>
        </div>
      </div>
    </footer>
  );
}
