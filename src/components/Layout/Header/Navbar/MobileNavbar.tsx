import { useMobileMenuStore } from "@/store/mobileMenuStore"
import { navbarData } from "./types"
import { Link, useLocation } from "react-router-dom"

export default function MobileNavbar() {
  const location = useLocation()
  const close = useMobileMenuStore((state) => state.close)

  return (
    <nav className="p-[12px] w-full flex flex-col items-center justify-center gap-[12px] font-jakarta font-medium text-[16px]">
      {navbarData.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          onClick={close}
          className={`w-full flex items-center justify-center transition-all duration-150 ease-in-out ${location.pathname === item.href ? "bg-text h-[42px] text-white pointer-events-none" : "font-inter font-normal h-[30px]"}`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
