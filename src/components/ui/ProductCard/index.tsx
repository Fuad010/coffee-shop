import Button from "../Button"
import FeedbackStar from "../FeedbackStar"
import FavoriteIcon from "@/assets/icons/favorite.svg?react"
import { useFavoriteStore } from "@/store/favoriteStore"
import type { Product } from "@/data/mockProductData"

export default function ProductCard(props: Product) {
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite)
  const isFavorite = useFavoriteStore((state) => state.isFavorite(props.id))

  return (
    <div className="hover:border-text/45 transition-all duration-450 ease-in-out cursor-pointer hover:scale-102 rounded-[12px] border border-[#E0DFDE] max-w-[267px] overflow-hidden drop-shadow-[0px_0px_20px_#0000001F] bg-[#FAF5FF] relative">
      <img
        src={props.image}
        alt={props.title}
        className="h-[240px] w-[267px] object-cover bg-bg"
      />
      <button
        type="button"
        onClick={() => toggleFavorite(props.id)}
        className="group absolute right-5 top-5 transition-all duration-300 hover:scale-110"
      >
        <FavoriteIcon
          className={`h-6 w-6 transition-all duration-300 ${
            isFavorite ? "text-[#723E29]" : "text-transparent"
          }`}
        />
      </button>
      <div className="px-[16px] pt-[20px] pb-[26px]">
        <div className="font-jakarta text-small-text font-bold flex justify-between items-center">
          <span className="text-[18px]">{props.title}</span>
          <span className="text-[16px]">${props.price}</span>
        </div>
        <div className="mt-[22px] flex justify-between items-center">
          <Button variant="primarySmall" className="max-w-max">
            Add to cart
          </Button>
          <FeedbackStar rating={props.rating} />
        </div>
      </div>
    </div>
  )
}
