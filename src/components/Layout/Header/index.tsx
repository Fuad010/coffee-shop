import Logo from "@/components/ui/Logo"
import Navbar from "./Navbar"
import BurgerButton from "./BurgerButton"
import CartButton from "./CartButton"
import SearchInput from "./SearchInput"
import { useHasScroll } from "@/hooks/useHasScroll"

export default function Header() {
  const hasScroll = useHasScroll()
  return (
    <header>
      <div className="lg:h-[100px] sm:h-[80px] h-[70px] w-full">
        <div
          className={`fixed transition-all duration-50 ${hasScroll ? "drop-shadow-[0_1px_1px_#0000000F]" : "drop-shadow-[0_0px_0px_#0000000F]"} border-[#0000000F] w-full lg:h-[100px] sm:h-[80px] flex items-center justify-center h-[70px] bg-bg`}
        >
          <div className="lg:mx-[16px] lg:px-[0px] sm:px-[23px] px-[16px] max-w-[1140px] w-full mx-auto flex items-center justify-between">
            <Logo />
            <Navbar />
            <div className="flex gap-[13px] sm:gap-[8px] lg:gap-[18px]">
              <SearchInput />
              <CartButton />
              <BurgerButton className="sm:hidden flex" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
