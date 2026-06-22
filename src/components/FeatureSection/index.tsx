import { features } from "./type"

export default function FeatureSection() {
  return (
    <section>
      <div className="px-[16px]">
        <ul className="max-w-[1139px] mx-auto text-white text-center lg:mt-[130px] sm:mt-[75px] mt-[78px] sm:bg-[#5E3528] lg:rounded-[20px] sm:rounded-[12px] sm:py-[42px] lg:px-[12px] sm:px-[22px] flex justify-between items-center max-sm:flex-col max-sm:gap-[24px]">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="lg:px-[18px] px-[12px] max-sm:py-[24px] lg:max-w-[356px] sm:max-w-[216px] max-w-full w-full flex flex-col items-center max-sm:bg-[#5E3528] rounded-[8px]"
            >
              <img
                src={feature.icon}
                alt="feature icon"
                className="lg:h-[49px] sm:h-[30px] h-[49px]"
              />

              <h2 className="font-jakarta font-semibold lg:text-[24px] sm:text-[16px] text-[20px] lg:mt-[32px] sm:mt-[16px] mt-[32px]">
                {feature.title}
              </h2>

              <p className="font-inter lg:mt-[12px] sm:mt-[6px] mt-[12px] lg:text-[16px] sm:text-[14px] text-[16px] lg:leading-[30px] sm:leading-[26px] leading-[30px] font-normal">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
