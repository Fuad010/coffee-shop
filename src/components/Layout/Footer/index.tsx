import Logo from "@/components/ui/Logo"
import { contactData, quickLinkData, socialData } from "./type"
import ApplyMail from "./ApplyMail"
import CopyrightIcon from "@/assets/icons/copyright.svg"

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-[1108px]">
        <div className="lg:flex lg:flex-row sm:grid flex grid-cols-2 gap-[50px] flex-col max-sm:items-center justify-between lg:mt-[160px] sm:mt-[120px] mt-[86px] px-[16px]">
          <div className="max-sm:flex flex-col items-center">
            <Logo />
            <ul className="flex flex-col mt-[32px] gap-[20px] font-inter text-[16px] font-normal">
              {contactData.map((item) => (
                <li key={item.text} className="flex items-center gap-[12px]">
                  <img src={item.icon} alt="contact icon" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <ApplyMail className="lg:hidden block" />
          <ul className="flex max-sm:items-center flex-col gap-[20px] font-inter text-[16px] font-normal text-text">
            <li className="mt-[5px] font-jakarta text-[20px] font-bold">
              {quickLinkData.title}
            </li>
            {quickLinkData.items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-[12px] font-inter text-[16px] font-normal"
                >
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex max-sm:items-center flex-col gap-[20px] font-inter text-[16px] font-normal text-text">
            <li className="mt-[5px] font-jakarta text-[20px] font-bold">
              {socialData.title}
            </li>
            {socialData.items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-[12px] font-inter text-[16px] font-normal"
                >
                  <img src={item.icon} alt={`${item.name} icon`} />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <ApplyMail className="lg:block! hidden!" />
        </div>
        <hr className="lg:mt-54px sm:mt-[42px] mt-[32px]" />
        <span className="flex items-center justify-center gap-[4px] h-[70px] sm:h-[80px] lg:h-[95px] text-[14px]">
          <img src={CopyrightIcon} alt="copyright icon" /> Copyright all right
          reserved 2024
        </span>
      </div>
    </footer>
  )
}
