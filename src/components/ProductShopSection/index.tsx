import Button from "../ui/Button"
import StarIcon from "@/assets/icons/Star.svg"
import UnStarIcon from "@/assets/icons/UnStar.svg"
import Product1 from "@/assets/images/products/product1.jpg"

export default function ProductShopSection() {
  return (
    <section>
      <div className="lg:mt-[110px] sm:mt-[70px] mt-[50px] max-w-[1140px] mx-auto w-full">
        <div className="text-center lg:max-w-[829px] max-w-[586px] w-full mx-auto">
          <h2 className="font-jakarta font-semibold lg:text-[24px] sm:text-[16px] text-[20px] lg:mt-[32px] sm:mt-[16px] mt-[32px]">
            Our Special Coffee Beans Coffee kits
          </h2>
          <p className="font-inter max-w-[714px] w-full lg:mt-[28px] mt-[16px] lg:text-[16px] sm:text-[14px] text-[16px] lg:leading-[30px] sm:leading-[26px] leading-[30px] font-normal">
            "Discover our special coffee beans and expertly crafted coffee kits.
            Perfect for brewing café-quality coffee at home. Elevate your
            mornings with premium flavors and artisanal blends. Shop now and
            savor the difference!"
          </p>
        </div>
        <div className="lg:mt-[80px] sm:mt-[50px] mt-[50px] flex lg:gap-[24px] sm:gap-[32px] gap-[24px] flex-wrap justify-center">
          <div className="rounded-[12px] border border-[#E0DFDE] max-w-[267px] overflow-hidden drop-shadow-[0px_0px_20px_#0000001F] bg-[#FAF5FF]">
            <img
              src={Product1}
              alt="product img"
              className="h-[240px] w-full object-cover"
            />
            <div className="px-[16px] pt-[20px] pb-[26px]">
              <div className="font-jakarta text-small-text font-bold flex justify-between items-center">
                <span className="text-[18px]">Paper pouch</span>
                <span className="text-[16px]">$450</span>
              </div>
              <div className="mt-[22px] flex justify-between items-center">
                <Button
                  variant="primarySmall"
                  children="Add to cart"
                  className="max-w-max"
                />
                <div className="flex gap-[4px]">
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={UnStarIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          children="View All Product"
          className="lg:mt-[64px] sm:mt-[50px] mt-[42px] max-w-max mx-auto"
        />
      </div>
    </section>
  )
}
