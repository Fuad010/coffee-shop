import { navbarData } from "./types"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="sm:flex hidden font-inter text-text font-normal sm:gap-[14px] gap-[32px] sm:text-[14px] lg:text-[16px]">
      {navbarData.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={`relative after:transition-all after:duration-150 after:ease-in-out after:content-[''] hover:after:w-[calc(100%+2px)] after:absolute flex items-center flex-col after:bottom-0 after:h-[1.5px] after:bg-text ${location.pathname === item.href ? "after:w-[calc(100%+2px)]" : "after:w-[0px]"}`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
