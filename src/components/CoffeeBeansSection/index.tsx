import CoffeeBeansImg from "@/assets/images/slider-images/coffee-beans.png"
import Button from "../ui/Button"

export default function CoffeeBeansSection() {
  return (
    <section>
      <div className="max-lg:px-[16px]">
        <div
          className="w-full lg:h-[600px] lg:px-[16px] h-max lg:mt-[110px] mt-[60px] flex max-sm:flex-col justify-center items-center bg-no-repeat max-sm:bg-position-[center_bottom] bg-position-[right_top] bg-[length:clamp(100px,100%,700px)] sm:bg-[length:clamp(300px,35%,700px)]"
          style={{ backgroundImage: `url(${CoffeeBeansImg})` }}
        >
          <div className="max-w-[1140px] w-full">
            <div className="lg:max-w-[520px] sm:max-w-[50%] w-full max-sm:flex flex-col items-center max-sm:text-center">
              <h2 className="lg:tracking-[-2%] tracnking-0 lg:leading-[60px] sm:leading-[32px] leading-[36px] lg:font-bold lg:text-[60px] sm:text-[24px] text-[20px] font-jakarta text-text font-semibold">
                Check out our best coffee beans
              </h2>
              <p className="sm:mt-[20px] mt-[8px] font-inter font-normal text-[16px] leading-[30px] lg:text-[18px] text-text max-w-[427px] w-full">
                Coffee beans begin as cherries, which ripen over several months.
                Harvesting these cherries can be done either by hand or machine.
                Hand-picking is labor-intensive but allows for the selection of
                only the ripest cherries, ensuring higher quality.
              </p>
              <Button
                children="Explore our product"
                className="lg:mt-[42px] sm:mt-[28px] mt-[36px] max-w-max"
              />
            </div>
          </div>
          <div className="max-sm:max-h-[450px] max-sm:h-[90vw]"></div>
        </div>
      </div>
    </section>
  )
}
