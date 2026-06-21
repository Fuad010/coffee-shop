import { useEffect, useState } from "react"

export function useHasScroll() {
  const [hasScroll, setHasScroll] = useState(false)

  useEffect(() => {
    const onScroll = () => setHasScroll(window.scrollY > 0)

    onScroll()
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return hasScroll
}
