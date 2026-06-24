import NewsImg1 from "@/assets/images/news-examples/news1.png"
import NewsImg2 from "@/assets/images/news-examples/news2.png"
import NewsImg3 from "@/assets/images/news-examples/news3.png"

type NewsItem = {
  image: string
  title: string
  date: string
  comments: number
}

export const news: NewsItem[] = [
  {
    image: NewsImg1,
    title: "How to make American coffee at home that you feel on shop",
    date: "10/May/2025",
    comments: 9,
  },

  {
    image: NewsImg2,
    title: "Perfect Drinks for Relaxing Evenings",
    date: "10/May/2025",
    comments: 9,
  },

  {
    image: NewsImg3,
    title: "The best instant coffee you can have right now on a budget",
    date: "10/May/2025",
    comments: 9,
  },
]
