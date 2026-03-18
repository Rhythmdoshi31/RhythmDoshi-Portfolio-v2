"use client";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import IconBox from "./ui/IconBox";
import { useState } from "react";

export default function EducationSection() {
  // const [chevronA, setChevronA] = useState(false);
  // const [chevronB, setChevronB] = useState(false);
  return (
    <div className="innerContainer py-4 px-2 flex flex-col gap-4">
      {/* Item 1 */}
      {/* <div className={`${chevronA ? "h-[30vh]" : ""} rounded-xl`}> */}
        <div
          // onClick={() => setChevronA(!chevronA)}
          className="flex items-start justify-between hover:bg-zinc-50 rounded-xl p-2"
        >
          {/* LEFT */}
          <div className="flex items-start gap-3">
            {/* Icon */}
            <IconBox>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
              </svg>
            </IconBox>

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <h1 className="text1 font1 tracking-tighter">
                B.Tech in Electronics & Communication Engineering
              </h1>

              <h2 className="text1 font1 tracking-tighter">
                Lakshmi Narain College of Technology, Bhopal
              </h2>

              <span className="text2 font2 tracking-tighter text-sm mt-1">
                11.2022 - 06.2026
              </span>
            </div>
          </div>

          {/* RIGHT ICON */}
          <h4 className="text2 font1 text-sm hover:!text-black transition ease-in-out hover:underline">8.16 CGPA</h4>
          {/* {chevronA ? (
            <ChevronsDownUp className="size-4 text2" />
          ) : (
            <ChevronsUpDown className="size-4 text2" />
          )} */}
        </div>
      {/* </div> */}

      {/* Item 2 */}
      {/* <div className={`${chevronB ? "h-[30vh]" : ""} rounded-xl`}> */}
        <div
          // onClick={() => setChevronB(!chevronB)}
          className={`flex items-start justify-between hover:bg-zinc-50 p-2`}
        >
          <div className="flex items-start gap-3">
            <IconBox>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
              </svg>
            </IconBox>

            <div className="flex flex-col leading-tight">
              <h1 className="text1 font1 tracking-tighter">
                Senior Secondary (Class XII)
              </h1>

              <h2 className="text1 font1 tracking-tighter">
                Ambuja Vidya Peeth, Rawan
              </h2>

              <span className="text2 font2 tracking-tighter text-sm mt-1">
                03.2020 - 05.2022
              </span>
            </div>
          </div>

          <h4 className="text2 font1 text-sm hover:!text-black transition ease-in-out hover:underline">90%</h4>
          {/* {chevronB ? (
            <ChevronsDownUp className="size-4 text2" />
          ) : (
            <ChevronsUpDown className="size-4 text2" />
          )} */}
        </div>
      </div>
    // </div>
  );
}
