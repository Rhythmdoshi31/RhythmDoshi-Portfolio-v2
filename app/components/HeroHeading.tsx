import Image from "next/image";
import RotatingText from "./ui/RotatingText";

export default function Heroheading() {
  const texts = [
  "Full Stack Engineer",
  "I love creating, crafting and learning",
  "And you'll always gravitate towards what you love",
];
  return (
    <div className="innerContainer">
      <div className="h-[24vh] w-full flex items-center justify-start">
        <div
          id="imageDiv"
          className="h-full w-1/4 bg1 border-r flex items-center justify-center"
        >
          <div className="relative size-[90%] rounded-full border p-[3px]">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/images/heroImage.webp"
                alt="Rhythm"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div id="infoDiv" className="h-full w-3/4">
          <div className="h-[55%] border-b flex items-end px-2 pb-[1px] gap-2 font2 tracking-tighter text-xs text-zinc-300">
            <span className="inline">text-3xl</span>
            <span className="inline">text-zinc-50</span>
            <span className="inline">font-medium</span>
          </div>
          <div className="h-[25%] border-b flex items-center px-2 gap-2">
            <h1 className="font2 text-3xl text1">Rhythm Doshi</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="size-4.5 text-info select-none"
              aria-label="Verified"
            >
              <path
                fill="#009CF6"
                d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
              ></path>
            </svg>
          </div>
          <div className="h-[20%] px-2 flex items-center font1 tracking-tighter text-sm">
            <RotatingText texts={texts}/>
          </div>
        </div>
      </div>
    </div>
  );
}
