import type { ReactNode } from "react"

type ButtonVariant = "primary" | "primarySmall" | "secondary"

type Props = {
  children: ReactNode
  variant?: ButtonVariant
  onClick?: () => void
  className?: string
}

const variants: Record<ButtonVariant, string> = {
  primary: `
    h-[52px]
    px-[24px]
    bg-text
    text-white
    text-[16px]
    font-semibold
  `,

  primarySmall: `
    h-[36px]
    px-[10px]
    bg-text
    text-white
    text-[14px]
    font-medium
  `,

  secondary: `
    h-[52px]
    px-[24px]
    bg-bg
    text-text
    text-[16px]
    font-semibold
  `,
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full max-w-max rounded-[8px] font-inter flex items-center justify-center ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
