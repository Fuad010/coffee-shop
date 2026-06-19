import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <header>header</header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  )
}
