import clsx from "clsx"
import Button from "../ui/Button"
import { items } from "./types"

export default function GallerySection() {
  return (
    <section>
      <div className="lg:mt-[110px] sm:mt-[60px] mt-[78px] w-full mx-auto">
        <h2 className="font-jakarta text-text lg:text-[48px] text-[24px] tracking-[-2%] font-bold text-center">
          Explore our coffee Gallery
        </h2>
        <p className="font-inter text-text lg:max-w-[614px] max-w-[562px] lg:mt-[28px] sm:mt-[18px] mt-[12px] font-normal leading-[30px] text-center mx-auto px-[16px]">
          From bean to brew, discover the story behind our premium coffee.
          Browse our gallery and see how we bring the world’s best flavors to
          your cup
        </p>
        <div className="lg:mt-[70px] sm:mt-[50px] mt-[40px] grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-[32px] gap-[16px] max-lg:px-[24px] max-sm:px-[29px]">
          {items.map(({ image, top }, index) => (
            <img
              key={index}
              src={image}
              alt="gallery"
              className={clsx(
                "rounded-[12px] aspect-square object-cover w-full h-full relative drop-shadow-[0px_0px_10px_#00000014] hover:scale-105 transition-all duration-450 ease-in-out",
                {
                  "lg:top-[40px]": top === 40,
                  "lg:top-[80px]": top === 80,
                },
              )}
            />
          ))}
        </div>
        <Button
          children="Explore Products"
          className="mx-auto max-w-max lg:mt-[140px] sm:mt-[60px] mt-[42px]"
        />
      </div>
    </section>
  )
}
