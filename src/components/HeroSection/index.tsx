import HeroBgImg from "@/assets/images/slider-images/hero-bg.png"
import Button from "../ui/Button"
import CoffeeBgImg from "@/assets/images/slider-images/coffee-bg.png"

export default function HeroSection() {
  return (
    <section>
      <div
        className="w-full bg-no-repeat bg-center bg-cover max-lg:bg-none! lg:pb-[40px]"
        style={{ backgroundImage: `url(${HeroBgImg})` }}
      >
        <div className="max-w-[1186px] w-full h-full mx-auto flex max-sm:flex-col items-center justify-between">
          <div className="flex flex-col h-full pt-[56px] sm:pt-[45px] lg:pt-[48px] max-w-[592px] w-full sm:px-[24px] px-[16px] max-sm:items-center max-sm:text-center">
            <h2 className="lg:tracking-[-2%] tracnking-0 lg:leading-[72px] sm:leading-[40px] leading-[36px] lg:font-bold lg:text-[60px] sm:text-[28px] text-[24px] font-jakarta text-text font-semibold">
              Brew Perfection at Home with Our Coffee beans & Kits
            </h2>
            <p className="lg:mt-[40px] mt-[18px] font-inter font-normal text-[16px] leading-[30px] lg:text-[18px] text-text lg:[-webkit-text-stroke:1px_black] max-w-[427px] w-full">
              Welcome to our world of premium coffee. Explore our handpicked
              beans and expertly crafted coffee kits for the perfect brew at
              home
            </p>
            <Button
              children="Shop Now"
              className="lg:mt-[40px] mt-[32px] max-w-[143px]"
            />
          </div>
          <img
            src={CoffeeBgImg}
            alt="coffe bg icon"
            className="lg:h-[513px] h-[307px] max-sm:mt-[56px]"
          />
        </div>
      </div>
    </section>
  )
}
