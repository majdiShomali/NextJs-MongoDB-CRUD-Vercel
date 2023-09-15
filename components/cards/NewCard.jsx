"use client"
import React from "react";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const NewCard = ({topics}) => {

  return (

        <>
    {topics.map((topic)=>{
        return(

            <div key={topic._id}
            
            className="relative w-32 h-52 lg:w-48 lg:h-64">
            <div className="bg-white w-32 h-52 lg:w-48 lg:h-64 shadow-lg absolute right-0 top-0 rotate-6"></div>

            <div className="bg-white w-32 h-52 lg:w-48 lg:h-64 shadow-lg absolute right-0 top-0 p-5">
              <div className="group h-full w-full ">
                <img
                  src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"
                  alt="next"
                  className="w-full h-full object-cover "
                />
                
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
           <Link href={`/topics/${topic._id}`}>

           <Button
              variant="gradient"
              size="sm"
              className="hidden text-black text-md group-hover:block translate-y-4 duration-300 ease-in-out"
              color="white"
            >
                
              <span>View</span>
            </Button>
      
              </Link>

          
                </div>
              </div>
            </div>
          </div>

        )
    })}
       
 
        </>
      
 
  );
};

export default NewCard;