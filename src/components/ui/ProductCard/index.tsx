import Button from "../Button"
import FeedbackStar from "../FeedbackStar"

type Props = {
  title: string
  price: number
  image: string
  rating: number
}

export default function ProductCard({ title, price, image, rating }: Props) {
  return (
    <div className="rounded-[12px] border border-[#E0DFDE] max-w-[267px] overflow-hidden drop-shadow-[0px_0px_20px_#0000001F] bg-[#FAF5FF]">
      <img
        src={image}
        alt={title}
        className="h-[240px] w-[267px] object-cover"
      />
      <div className="px-[16px] pt-[20px] pb-[26px]">
        <div className="font-jakarta text-small-text font-bold flex justify-between items-center">
          <span className="text-[18px]">{title}</span>
          <span className="text-[16px]">${price}</span>
        </div>
        <div className="mt-[22px] flex justify-between items-center">
          <Button variant="primarySmall" className="max-w-max">
            Add to cart
          </Button>
          <FeedbackStar rating={rating} />
        </div>
      </div>
    </div>
  )
}
