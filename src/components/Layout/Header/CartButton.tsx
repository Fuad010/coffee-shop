import CartIcon from "@/assets/icons/cart.svg"

type Props = {
  className?: string
  count?: number
}

export default function CartButton({ className = "", count = 0 }: Props) {
  return (
    <button
      data-count={count}
      className={`hover:opacity-80 h-[28px] sm:h-[20px] lg:h-[24px] relative after:content-[attr(data-count)] after:absolute after:text-[8px] after:top-[-6px] after:right-[-6px] after:font-inter after:font-normal after:bg-[#16A34A] after:rounded-full after:w-[12px] after:h-[12px] after:flex after:items-center after:justify-center after:text-white ${className}`}
    >
      <img src={CartIcon} alt="basket" className="w-full h-full" />
    </button>
  )
}
