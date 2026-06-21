import { Outlet } from "react-router-dom"
import Header from "./Header"
import MobileMenu from "./Header/MobileMenu"

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <Header />
      <MobileMenu />

      <main className="flex-1">
        <Outlet />
      </main>

      <footer>footer</footer>
    </div>
  )
}
