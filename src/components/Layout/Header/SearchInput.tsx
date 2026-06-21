import SearchIcon from "@/assets/icons/search.svg"

export default function SearchInput() {
  return (
    <div className="border-text border-1 rounded-[50px] lg:w-[212px] lg:px-[16px] px-[14px] w-[167px] lg:h-[38px] h-[28px] sm:flex items-center justify-between hidden">
      <input
        className="border border-text placeholder:text-[12px] placeholder:text-[#979C9D] flex items-center placeholder:font-normal font-normal w-full h-full border-none text-12px font-inter placeholder:font-inter"
        placeholder="Search coffee....."
      />
      <div className="h-[18px]">
        <img src={SearchIcon} alt="search icon" className="" />
      </div>
    </div>
  )
}
