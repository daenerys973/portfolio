import Image from "next/image";
import Link from "next/link";
import React from "react";
import GradientWrapper from "./GradientWrapper";

const Card = () => {
  const data = [
    {
      title: "Findev Search username github",
      description:
        "Find and explore GitHub user profiles efficiently. Discover projects, statistics, contributions and more. Optimize your GitHub experience with our profile search tool",
      image:
        "https://res.cloudinary.com/dolzrq2x7/image/upload/v1686257669/decodehud/React_p4afos.svg",
      github: "/",
      start: "Start",
      link: "https://findev.decodehud.com/",
    },
    {
      title: "React reactive form validation",
      description: "Reactive form validation with react js",
      image:
        "https://res.cloudinary.com/dolzrq2x7/image/upload/v1686257669/decodehud/VisualCode_kn8p3h.svg",
      github: "/",
      start: "Start",
      link: "https://validate-form-reactjs.vercel.app/",
    },
    {
      title: "Portfolio",
      description: "Portfolio personal builded on reactjs, nextjs",
      image:
        "https://res.cloudinary.com/dolzrq2x7/image/upload/v1686257668/decodehud/Next.js_cwfcjc.svg",
      github: "/",
      start: "Start",
      link: "https://portfolio.decodehud.com/",
    },
    {
      title: "Blog",
      description: "Blog personal builded on next 14",
      image:
        "https://res.cloudinary.com/dolzrq2x7/image/upload/v1686257670/decodehud/TailwindCSS_w6xnlj.svg",
      github: "/",
      start: "Start",
      link: "https://decodehud.com/",
    },
  ];
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-20 pt-12 opacity-0 animate-slidein700">
      {data?.map((post, i) => (
        <div key={i} className="bg-[#14171F] px-2 rounded-2xl relative">
          <GradientWrapper/>
          <div className="py-2">
            <Link href={post.github} className="text-lg text-gray-700">
              {/* <BsGithub aria-label="github" /> */}
            </Link>
            <div className="flex justify-center items-center text-center">
              <Image
                src={post.image}
                alt={post.title}
                className="img"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className="py-2">
            <h1 className="py-2 text-md text-gray-500">{post.title}</h1>
            <p className="py-2 text-sm text-gray-600 truncate">
              {post.description}
            </p>
          </div>

          <div className="py-2">
            <div className="py-2 bg-[#282e3a] text-center text-white rounded-xl ">
              <Link href={post.link} target="_blank">
                Read more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
