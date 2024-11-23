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
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex"></div>

    </div>
  )

}

export default Navbar