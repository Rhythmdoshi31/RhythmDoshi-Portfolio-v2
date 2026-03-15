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
    <div className="w-full h-[30vh]">
      <div className="innerContainer h-full flex items-end justify-between p-4 pb-12">
        <div>
          <h1 className="text-xl font2 text2 underline">Rhythm Doshi</h1>
          <h4 className="text-sm font1 tracking-tight text2">Github</h4>
          <h4 className="text-sm font1 tracking-tight text2">Linkedin</h4>
          <h4 className="text-sm font1 tracking-tight text2">+91-9981603789</h4>
        </div>
        <div className="flex flex-col items-center justify-between h-full w-1/2 pt-4">
          <RotatingText texts={texts1} />
          <RotatingText texts={texts2} />
        </div>
      </div>
    </div>
  );
}
