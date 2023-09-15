"use client"
const Section = () => {
  return (

        <div
         
         className="px-6  text-center md:px-12 lg:text-left bg-gray-100 py-10 ">
        <div className=" mx-auto sm:max-w-1xl md:max-w-3xl lg:max-w-3xl xl:max-w-5xl xl:px-10"
        data-aos="zoom-in" >
          <div
        //   onClick={()=>handleShowProduct()}
          className="grid items-center lg:grid-cols-2  cursor-pointer"  
          >
            <div
            
            className="mb-12 md:mt-12 lg:mt-0 lg:mb-0 lg:mr-2">
              <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-2 py-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20  lg:-mr-16 backdrop-blur-[30px]">
                <h1 className="mt-2 mb-5 text-2xl font-bold tracking-tight md:text-3xl xl:text-4xl">
                  Next <br />
                  <span className="text-primary">Top cards</span>
                </h1>
              </div>
            </div>
            <div className="hidden lg:inline-block">
              <img
               src="https://th.bing.com/th/id/OIP.rcKVwmwg1wZlroN8v1nBeAAAAA?pid=ImgDet&rs=1"     
                 className="w-80 h-96  rounded-lg shadow-lg dark:shadow-black/20"
                alt="next2"
              />
           
            </div>
          </div>
        </div>
      </div>
      


  )
}

export default Section