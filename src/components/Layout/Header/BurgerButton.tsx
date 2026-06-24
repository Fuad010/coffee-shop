import { useMobileMenuStore } from "@/store/mobileMenuStore"

type Props = {
  className?: string
}

export default function BurgerButton({ className = "" }: Props) {
  const isOpen = useMobileMenuStore((state) => state.isOpen)
  const toggle = useMobileMenuStore((state) => state.toggle)

  return (
    <button
      onClick={toggle}
      className={`relative flex h-[22px] w-[22px] items-center justify-center ${className}`}
    >
      <span
        className={`absolute h-[1.5px] w-full rounded-full bg-black transition-all duration-300 ${
          isOpen ? "rotate-45" : "-translate-y-[6px]"
        }`}
      />

      <span
        className={`absolute h-[1.5px] w-full rounded-full bg-black transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />

      <span
        className={`absolute h-[1.5px] w-full rounded-full bg-black transition-all duration-300 ${
          isOpen ? "-rotate-45" : "translate-y-[6px]"
        }`}
      />
    </button>
  )
}
