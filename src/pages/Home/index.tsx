import ClientSliderSection from "@/components/ClientSliderSection"
import CoffeeBeansSection from "@/components/CoffeeBeansSection"
import FavoriteCoffeeSection from "@/components/FavoriteCoffeeSection"
import FeatureSection from "@/components/FeatureSection"
import HeroSection from "@/components/HeroSection"
import ProductShopSection from "@/components/ProductShopSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CoffeeBeansSection />
      <FavoriteCoffeeSection />
      <ProductShopSection />
      <ClientSliderSection />
    </>
  )
}
