import FacebookIcon from "@/assets/icons/socials/facebook.svg"
import InstagramIcon from "@/assets/icons/socials/instagram.svg"
import PinterestIcon from "@/assets/icons/socials/pinterest.svg"
import TwitterIcon from "@/assets/icons/socials/twitter.svg"
import YoutubeIcon from "@/assets/icons/socials/youtube.svg"

import LocationIcon from "@/assets/icons/contact/location.svg"
import MailIcon from "@/assets/icons/contact/mail.svg"
import PhoneIcon from "@/assets/icons/contact/phone.svg"

type ContactItem = {
  icon: string
  text: string
}

type LinkItem = {
  icon?: string
  name: string
  href: string
}

type LinkData = {
  title: string
  items: LinkItem[]
}

export const contactData: ContactItem[] = [
  {
    icon: LocationIcon,
    text: "123, Pall Mall, USA california",
  },
  {
    icon: MailIcon,
    text: "Email: hello@coffee.com",
  },
  {
    icon: PhoneIcon,
    text: "Phone: 012 34 78940",
  },
]

export const socialData: LinkData = {
  title: "Follow Us",
  items: [
    {
      icon: FacebookIcon,
      name: "Facebook",
      href: "https://www.facebook.com",
    },
    {
      icon: TwitterIcon,
      name: "Twitter",
      href: "https://twitter.com",
    },
    {
      icon: InstagramIcon,
      name: "Instagram",
      href: "https://instagram.com",
    },
    {
      icon: YoutubeIcon,
      name: "Youtube",
      href: "https://youtube.com",
    },
    {
      icon: PinterestIcon,
      name: "Pinterest",
      href: "https://pinterest.com",
    },
  ],
}

export const quickLinkData: LinkData = {
  title: "Quick Link",
  items: [
    {
      name: "Privacy Policy",
      href: "#",
    },
    {
      name: "Disclaimer",
      href: "#",
    },
    {
      name: "Food Menu",
      href: "#",
    },
    {
      name: "Gallery",
      href: "#",
    },
    {
      name: "About Us",
      href: "",
    },
  ],
}
