import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function ClientSliderSection() {
  return (
    <section className="max-w-[1140px] mx-auto py-[80px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="bg-[#FAF5FF] rounded-[20px] p-[40px] text-center">
            <h2 className="text-[32px] font-bold">Page 1</h2>
            <p className="mt-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              rem.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#FAF5FF] rounded-[20px] p-[40px] text-center">
            <h2 className="text-[32px] font-bold">Page 2</h2>
            <p className="mt-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              exercitationem.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#FAF5FF] rounded-[20px] p-[40px] text-center">
            <h2 className="text-[32px] font-bold">Page 3</h2>
            <p className="mt-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              consequatur.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
