import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import CoffeeSliderImg from "@/assets/images/slider-images/coffee-slider.png"
import SaveMartImg from "@/assets/images/save-mark.png"
import { slides } from "./type"
import "./styles.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function ClientSliderSection() {
  return (
    <section>
      <div
        className="bg-no-repeat bg-cover bg-center lg:mt-[110px] sm:mt-[70px] mt-[50px]"
        style={{
          backgroundImage: `linear-gradient(#311103B8, #311103B8), url(${CoffeeSliderImg})`,
        }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          className="client-swiper"
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
          }}
          loop
        >
          {slides.map((slide, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="max-w-[1140px] w-full mx-auto lg:px-[150px] sm:px-[21px] px-[24px] lg:pb-[187px] sm:pb-[146px] pb-[126px] lg:pt-[107px] sm:pt-[73px] pt-[56px]">
                <h2 className="font-jakarta lg:text-[48px] text-[24px] lg:font-bold font-semibold text-center text-white">
                  What clients say about us
                </h2>

                <div className="lg:mt-[80px] sm:mt-[32px] mt-[44px] flex gap-[24px] justify-center">
                  {slide.map((client, clientIndex) => (
                    <div
                      key={clientIndex}
                      className="flex flex-col justify-center items-center"
                    >
                      <img
                        src={SaveMartImg}
                        alt="save mark"
                        className="lg:h-[43px] h-[20px]"
                      />

                      <p className="mt-[20px] font-jost font-normal lg:text-[20px] text-[16px] leading-[28px] text-white max-w-[510px] text-center">
                        {client.text}
                      </p>

                      <div className="mt-[28px] flex flex-col items-center justify-center">
                        <img
                          src={client.avatar}
                          alt="example avatar"
                          className="h-[60px] rounded-[50%]"
                        />

                        <h3 className="mt-[28px] text-[20px] font-jakarta text-white font-medium">
                          {client.name}
                        </h3>

                        <span className="mt-[8px] text-[16px] font-jakarta text-white font-medium">
                          {client.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
