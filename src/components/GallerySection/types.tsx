import GalleryImg1 from "@/assets/images/coffee-gallery/gallery1.png"
import GalleryImg2 from "@/assets/images/coffee-gallery/gallery2.png"
import GalleryImg3 from "@/assets/images/coffee-gallery/gallery3.png"
import GalleryImg4 from "@/assets/images/coffee-gallery/gallery4.png"
import GalleryImg5 from "@/assets/images/coffee-gallery/gallery5.png"
import GalleryImg6 from "@/assets/images/coffee-gallery/gallery6.png"
import GalleryImg7 from "@/assets/images/coffee-gallery/gallery7.png"
import GalleryImg8 from "@/assets/images/coffee-gallery/gallery8.png"
import GalleryImg9 from "@/assets/images/coffee-gallery/gallery9.png"
import GalleryImg10 from "@/assets/images/coffee-gallery/gallery10.png"
import GalleryImg11 from "@/assets/images/coffee-gallery/gallery11.png"
import GalleryImg12 from "@/assets/images/coffee-gallery/gallery12.png"

type GalleryItem = {
  image: string
  top?: number
}

export const items: GalleryItem[] = [
  { image: GalleryImg1, top: 40 },
  { image: GalleryImg4 },
  { image: GalleryImg7, top: 40 },
  { image: GalleryImg10, top: 80 },
  { image: GalleryImg2, top: 40 },
  { image: GalleryImg5 },
  { image: GalleryImg8, top: 40 },
  { image: GalleryImg11, top: 80 },
  { image: GalleryImg3, top: 40 },
  { image: GalleryImg6 },
  { image: GalleryImg9, top: 40 },
  { image: GalleryImg12, top: 80 },
]
