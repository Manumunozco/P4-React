import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Menu } from "../pages/Menu"
import { About } from "../pages/About"
import { Booking } from "../pages/Booking"

export const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />

        <Route path="*" element={<h1>Error 404 - Page not found </h1>}/>
    </Routes>
    
  )
}
