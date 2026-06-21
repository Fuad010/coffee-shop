import LogoIcon from "@/assets/icons/logo.svg"
import { logoData } from "./types"
import { Link } from "react-router-dom"

export default function Logo() {
  const { name, highlight, href } = logoData

  const base = highlight ? name.replace(highlight, "") : name

  return (
    <Link
      to={href}
      className="font-jakarta flex items-center gap-[4px] lg:text-[36px] sm:text-[29px] text-[26px] tracking-[-0.02em] font-bold text-primary"
    >
      <img className="h-[30px] sm:h-[33px] lg:h-[41px]" src={LogoIcon} />

      <div>
        {base}
        {highlight && <span className="text-[#311103]">{highlight}</span>}
      </div>
    </Link>
  )
}
