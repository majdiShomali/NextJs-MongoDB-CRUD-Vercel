"use client";
import React from "react";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

const NewCard = ({ topics }) => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <>
      {topics.map((topic) => {
        return (
          <div key={topic._id} className="relative w-32 h-52 lg:w-44 lg:h-64 mb-10">
            <div className="bg-white w-32 h-52 lg:w-44 lg:h-64 shadow-lg absolute right-0 top-0 rotate-6"></div>

            <div className="bg-white w-32 h-52 lg:w-44 lg:h-64 shadow-lg absolute right-0 top-0 p-5">
              <div className="group h-full w-full relative ">
                <Image
                  loader={imageLoader}
                  src="https://miro.medium.com/max/1176/1*LvA59wJi3O9jTMQQsw_cRA.png"
                  alt={`Picture of the author ${topic._id}`}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                  // width={500}
                  // height={800}
                  fill
                />
                   
           
              </div>
              <div className="flex flex-col justify-around items-center group h-full w-full absolute right-0 top-0">
                  <div className="w-full bg-[#ffffffab] overflow-hidden trans text-center py-2 hidden group-hover:block translate-y-4 duration-300 ease-in-out fade-in-button">
                    <div className="flex items-center  justify-between w-full px-5">
                      <p className=" w-full  text-sm font-bold text-black dark:text-white">
                        {topic.description}
                      </p>
                    </div>
                    <h3 className=" text-2xl  font-extrabold  ">
                      {topic.title}
                    </h3>
                  </div>
                  <Link passHref aria-label={`/topics/${topic.title}`} href={`/topics/${topic._id}`}>
                    <Button
                      variant="gradient"
                      size="sm"
                      className="hidden text-black text-md group-hover:block translate-y-4 duration-300 ease-in-out fade-in-button"
                      color="white"
                    >
                      <span>View</span>
                    </Button>
                  </Link>
                </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewCard;
