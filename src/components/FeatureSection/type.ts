import CoffeeIcon from "@/assets/icons/features-icons/coffee.svg"
import CoffeeMachineIcon from "@/assets/icons/features-icons/coffee-machine.svg"
import DoneMarkIcon from "@/assets/icons/features-icons/done-mark.svg"

type Feature = {
  icon: string
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: CoffeeIcon,
    title: "Premium Coffee Beans",
    description:
      "Freshly roasted, ethically sourced, and packed with rich flavors—our coffee beans are perfect for every coffee lover.",
  },
  {
    icon: DoneMarkIcon,
    title: "Quality coffee kits",
    description:
      "Need a stunning coffee-themed website? Our Coffee UI Kits help you launch an elegant, high-converting online store effortlessly.",
  },
  {
    icon: CoffeeMachineIcon,
    title: "Expert Craftsmanship",
    description:
      "From bean to brew, our experts craft premium coffee beans and kits, ensuring every sip delivers unparalleled quality.",
  },
]
