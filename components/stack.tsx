import React from "react";
import {
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiMongodb,
  SiAngular,
} from "react-icons/si";

const Stack = () => {
  return (
    <section className="relative py-16 ">
      <div>
        <div className="animate-slidein300 opacity-0 text-center text-4xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-gray-400 to-gray-800">
          STACK MERN MEAN
        </div>
        <div className="animate-slidein500 opacity-0 py-8 grid grid-cols-2 md:grid-cols-5 gap-y-4 text-gray-500">
          <div className="flex items-center justify-center gap-4">
            <SiMongodb className="text-4xl md:text-6xl lg:text-6xl" />
            <p className="text-sm">MongoDB</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <SiExpress className="text-4xl md:text-6xl lg:text-6xl" />
            <p className="text-sm">Expressjs</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <SiReact className="text-4xl md:text-6xl lg:text-6xl" />
            <p className="text-sm"> Reactjs</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <SiAngular className="text-4xl md:text-6xl lg:text-6xl" />
            <p className="text-sm">Angular</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <SiNodedotjs className="text-4xl md:text-6xl lg:text-6xl" />
            <p className="text-sm">Nodejs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
