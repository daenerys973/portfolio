import React from "react";
import GradientWrapper from "./GradientWrapper";
import Link from "next/link";
import Pattern from "./patthern";
const Hero = () => {
  return (
    <main>
      <div className=" relative flex flex-col pb-12">
        <div className="-mt-1.5 flex w-[1260px] max-w-full flex-col items-center self-center px-16 pt-12 max-md:px-5">
          <div className="mt-1.5 flex w-[822px] max-w-full flex-col">
            <div className="animate-slidein300  flex items-stretch justify-center gap-1 self-center rounded-3xl border border-solid border-white border-opacity-10 bg-white bg-opacity-10 px-2.5 opacity-0 backdrop-blur-[6px]">
              <div className="grow whitespace-nowrap text-sm font-medium leading-7 text-stone-50">
                Githud / decodehud
              </div>
            </div>
            <GradientWrapper />
            <div className="font-heading animate-slidein300 bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text pt-6 text-3xl text-transparent text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Explore my portfolio to see how I bring your ideas to life.
            </div>
            <p className="animate-slidein300 text-muted-foreground max-w-[42rem] pt-6 text-center leading-normal text-white sm:text-xl sm:leading-8">
              MERN Full Stack Developer dedicated to crafting efficient web
              applications. Committed to technical excellence, I seamlessly
              integrate technologies for exceptional user experiences.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
