import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      link: "https://decodehud.com",
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
    <div className=" animate-slidein700 grid grid-cols-1 gap-4 pt-12 opacity-0 sm:grid-cols-2 md:grid-cols-3 md:px-20 lg:grid-cols-4">
      {data?.map((post, i) => (
        <div key={i} className="relative rounded-2xl bg-[#14171F] px-2">
          {/* <GradientWrapper/> */}
          <div className="py-2">
            <Link href={post.github} className="text-lg text-gray-700">
              {/* <BsGithub aria-label="github" /> */}
            </Link>
            <div className="flex items-center justify-center text-center">
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
            <h1 className="text-md py-2 text-gray-500">{post.title}</h1>
            <p className="truncate py-2 text-sm text-gray-600">
              {post.description}
            </p>
          </div>

          <div className="py-2">
            <div className="rounded-xl bg-[#282e3a] py-2 text-center text-white ">
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
