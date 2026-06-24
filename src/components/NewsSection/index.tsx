import HeroImg from "@/assets/images/slider-images/hero-bg.png"
import CoffeeBgImg from "@/assets/images/slider-images/coffee-bg1.png"
import { news } from "./type"

export default function NewsSection() {
  const backgroundImage = window.innerWidth >= 1024 ? `url(${HeroImg})` : ""

  return (
    <section>
      <div
        className="lg:mt-[33] sm:mt-[60px] mt-[56px] relative bg-center bg-cover lg:pb-[40px] max-sm:bg-none!"
        style={{
          backgroundImage,
        }}
      >
        <img
          src={CoffeeBgImg}
          alt="coffee img"
          className="absolute left-50% top-[139px] max-lg:hidden"
        />
        <h2 className=" text-center font-jakarta text-text lg:text-[48px] lg:tracking-[-2%] sm:text-[24px] text-[20px] font-bold">
          Latest news & blog
        </h2>
        <p className="font-inter lg:text-[20px] sm:text-[16px] text-[14px] font-normal text-text lg:mt-[28px] sm:mt-[8px] mt-[6px] text-center">
          GET EVERY SINGLE UPDATE
        </p>
        <div className="max-w-[1140px] sm:px-[24px] px-[28.5px] mx-auto flex lg:gap-[24px] sm:gap-[15px] gap-[28px] lg:mt-[64px] sm:mt-[36px] mt-[32px] relative lg:top-[40px] max-sm:flex-col sm:items-start items-center">
          {news.map(({ image, title, date, comments }, index) => (
            <div
              key={index}
              className="rounded-[16px] overflow-hidden lg:max-w-[364px] sm:max-w-full max-w-[318px] w-full drop-shadow-[0_3px_30px_#00000024]"
            >
              <img
                src={image}
                alt="news image"
                className="object-cover lg:h-[240px] sm:h-[151px] h-[274px] w-full"
              />
              <div className="lg:p-[24px] p-[24px] max-lg:px-[12px] max-sm:px-[18px] bg-white flex flex-col gap-[16px]">
                <h3 className="font-jakarta font-semibold lg:leading-[28px] leading-[20px] lg:text-[18px] text-[14px] sm:line-clamp-2">
                  {title}
                </h3>
                <div className="flex justify-between items-center font-inter lg:text-[14px] text-[12px] text-[#1E0A02]">
                  <span>{date}</span>
                  <span>Comment {comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
