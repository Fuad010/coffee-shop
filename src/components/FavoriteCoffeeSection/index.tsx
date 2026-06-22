import Button from "../ui/Button"
import FavoriteCoffeeBg from "@/assets/images/slider-images/favorite-coffee-bg.png"
import CoffeeMachineImg from "@/assets/images/slider-images/coffee-machine.png"

export default function FavoriteCoffeeSection() {
  const backgroundImage =
    window.innerWidth >= 1024
      ? `linear-gradient(#723E2973, #723E2973), url(${FavoriteCoffeeBg})`
      : window.innerWidth >= 640
        ? `linear-gradient(#31110333, #31110333), url(${FavoriteCoffeeBg})`
        : `linear-gradient(#3111034D, #3111034D), url(${FavoriteCoffeeBg})`

  return (
    <section>
      <div
        className="w-full bg-no-repeat sm:bg-center bg-cover relative flex items-center justify-center lg:py-[68px] sm:py-[34px] py-[41px] px-[24px] sm:px-[18px] lg:mt-[110px] sm:mt-[60px] mt-[56px]"
        style={{
          backgroundImage,
        }}
      >
        <div className="max-w-[1186px] w-full h-full mx-auto flex max-sm:flex-col-reverse items-center justify-between">
          <img
            src={CoffeeMachineImg}
            alt="coffe bg icon"
            className="lg:h-[513px] lg:max-h-[470px] max-h-[282px] h-full max-sm:mt-[56px]"
          />
          <div className="flex flex-col h-full pt-[56px] sm:pt-[45px] lg:pt-[48px] max-w-[583px] w-full sm:px-[24px] px-[16px] max-sm:items-center max-sm:text-center">
            <h2 className="lg:tracking-[-2%] tracnking-0 lg:leading-[60px] sm:leading-[32px] leading-[36px] lg:font-bold lg:text-[60px] sm:text-[24px] text-[20px] font-jakarta text-white font-semibold">
              Order your favorite coffee Machine
            </h2>
            <p className="lg:mt-[24px] mt-[18px] font-inter font-normal text-[16px] leading-[30px] lg:text-[18px] text-white max-w-[427px] w-full">
              Welcome to our cozy coffee shop, where the aroma of freshly brewed
              coffee fills the air. Take a seat and relax as you browse our menu
              of delicious drinks and pastries. Our baristas are ready to craft
              your perfect cup of coffee, whether you prefer a classic latte or
              a specialty espresso drink
            </p>
            <Button
              children="Order Now"
              variant="secondary"
              className="lg:mt-[40px] sm:mt-[28px] mt-[32px] max-w-[143px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
