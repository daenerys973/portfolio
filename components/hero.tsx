import React from "react";
import GradientWrapper from "./GradientWrapper";
import Link from "next/link";
const Hero = () => {
  return (
    <main>
      <div className=" flex flex-col pb-12 relative">
        <GradientWrapper />

        <div className="items-center self-center flex w-[1260px] max-w-full flex-col -mt-1.5 pt-12 px-16 max-md:px-5">
          <div className="flex w-[822px] max-w-full flex-col mt-1.5">
            <div className="animate-slidein300  opacity-0 justify-center items-stretch border backdrop-blur-[6px] bg-white bg-opacity-10 self-center flex gap-1 px-2.5 rounded-3xl border-solid border-white border-opacity-10">
              <div className="text-stone-50 text-sm font-medium leading-7 grow whitespace-nowrap">
                Githud / decodehud
              </div>
            </div>
            <h1 className="animate-slidein500  opacity-0 text-white text-center text-7xl font-medium leading-[80px] self-stretch mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Explore my portfolio to
              <br />
              see how I bring your Ideas to life.
            </h1>
            <p className=" animate-slidein700 opacity-0 text-slate-300 text-center md:text-2xl leading-7 max-w-[612px] self-center mt-7 max-md:max-w-full">
              Meet the new standard for modern software development.
              <br />
              Streamline issues, sprints, and product roadmaps.
            </p>
            <div className="animate-slidein700 opacity-0 justify-center items-stretch bg-indigo-500 self-center flex gap-0.5 mt-12 pl-5 pr-3 py-2 rounded-xl max-md:mt-10">
              <div className="text-white text-base font-medium leading-8 grow whitespace-nowrap">
                <Link href="https://decodehud.com">Get started</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
