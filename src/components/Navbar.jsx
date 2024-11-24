import { useState } from "react";


const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full h-16 md:h-20 flex items-center
    justify-between">
      {/* Logo */}
      <div className="flex items-center gap-4 
      text-2xl font-bold">
        <img src="/public/logo.png" className="w-8 h-8" alt=""
         />
         <span>LamaLogo</span>
      </div>
      {/* Menu mobile */}
      <div className="md:hidden">
        <div className="cursor-pointer text-4xl"
        onClick={( ) => setOpen((prev) => !prev)}
        >
          {open ? "x" : "=" }
        </div>
        {/* Mobile List */}
        <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-[#a6a6ff]
        transition-all ease-in-out
          ${ open ? "-right-0" : "-right-[100%]"}
          `}>
           <a href="#" className="">Home</a>
        <a href="#" className="">Trending</a>
        <a href="#" className="">Most Popular</a>
        <a href="#" className="">About</a>
        <a href="#" className="">
          <button className="py-2 px-4 rounded-3xl bg-blue-700 text-white">Login 👋 </button>
        </a>

        </div>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex items-center xl:gap-12 md:gap-12 font-medium ">
        <a href="#" className="">Home</a>
        <a href="#" className="">Trending</a>
        <a href="#" className="">Most Popular</a>
        <a href="#" className="">About</a>
        <a href="#" className="">
          <button className="py-2 px-4 rounded-3xl bg-blue-700 text-white">Login 👋 </button>
        </a>


      </div>

    </div>
  )

}

export default Navbar