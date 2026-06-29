import Product1 from "@/assets/images/products/product1.png"
import Product2 from "@/assets/images/products/product2.png"
import Product3 from "@/assets/images/products/product3.png"
import Product4 from "@/assets/images/products/product4.png"
import Product5 from "@/assets/images/products/product5.png"
import Product6 from "@/assets/images/products/product6.png"
import Product7 from "@/assets/images/products/product7.png"
import Product8 from "@/assets/images/products/product8.png"

export type Product = {
  id: string
  title: string
  price: number
  image: string
  rating: number
}

export const products: Product[] = [
  {
    id: "1",
    title: "Paper pouch",
    price: 450,
    image: Product1,
    rating: 4,
  },
  {
    id: "2",
    title: "Barista",
    price: 200,
    image: Product2,
    rating: 4,
  },
  {
    id: "3",
    title: "Bean Bliss",
    price: 44,
    image: Product3,
    rating: 4,
  },
  {
    id: "4",
    title: "Paper pouch",
    price: 100,
    image: Product4,
    rating: 4,
  },
  {
    id: "5",
    title: "Paper pouch",
    price: 150,
    image: Product8,
    rating: 4,
  },
  {
    id: "6",
    title: "Drip Coffee Maker",
    price: 44,
    image: Product7,
    rating: 4,
  },
  {
    id: "7",
    title: "Drip Kettle",
    price: 44,
    image: Product6,
    rating: 4,
  },
  {
    id: "8",
    title: "Coffee Machine",
    price: 44,
    image: Product5,
    rating: 4,
  },
]
