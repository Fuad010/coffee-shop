import { AnimatePresence, motion } from "framer-motion"
import { useMobileMenuStore } from "@/store/mobileMenuStore"
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll"
import BurgerButton from "./BurgerButton"
import MobileNavbar from "./Navbar/MobileNavbar"

export default function MobileMenu() {
  const isOpen = useMobileMenuStore((state) => state.isOpen)
  useLockBodyScroll(isOpen)

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <motion.div
            className="absolute inset-0 bg-bg"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="h-[65px] w-full flex justify-end items-center px-[16px]">
              <BurgerButton />
            </div>
            <MobileNavbar />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
