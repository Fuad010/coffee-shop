type Props = {
  placeholder?: string
  className?: string
}

export default function TextInput({ placeholder = "", className = "" }: Props) {
  return (
    <input
      placeholder={placeholder}
      className={`border-[1px] flex items-center px-[16px] rounded-[8px] border-divider h-[50px] placeholder:text-[#525252] placeholder:font-inter placeholder:text-[16px] placeholder:font-normal w-full ${className}`}
    />
  )
}
