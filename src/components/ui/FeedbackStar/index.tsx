import StarIcon from "@/assets/icons/Star.svg"
import UnStarIcon from "@/assets/icons/UnStar.svg"

type Props = {
  rating: number
}

export default function FeedbackStar({ rating }: Props) {
  return (
    <div className="flex gap-[4px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={index < rating ? StarIcon : UnStarIcon}
          alt="star"
        />
      ))}
    </div>
  )
}
