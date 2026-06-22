import { products } from "@/data/mockProductData"
import Button from "../ui/Button"
import ProductCard from "../ui/ProductCard"

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
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>
        <Button
          children="View All Product"
          className="lg:mt-[64px] sm:mt-[50px] mt-[42px] max-w-max mx-auto"
        />
      </div>
    </section>
  )
}
