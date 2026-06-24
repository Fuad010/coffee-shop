import Button from "@/components/ui/Button"
import TextInput from "@/components/ui/TextInput"

type Props = {
  className?: string
}

export default function ApplyMail({ className = "" }: Props) {
  return (
    <div
      className={`lg:max-w-[344px] max-sm:flex flex-col items-center max-w-[292px] w-full ${className}`}
    >
      <h3 className="font-inter text-[20px] font-bold text-text">
        Join our news letter
      </h3>
      <TextInput placeholder="Email" className="mt-[24px] max-w-full" />
      <Button children="Subscribe" className="mt-[22px] max-w-full" />
    </div>
  )
}
