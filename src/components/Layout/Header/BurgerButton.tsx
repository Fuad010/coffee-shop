import { useState } from "react"

type Props = {
  className?: string
}

export default function BurgerButton({ className = "" }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
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
