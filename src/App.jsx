import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { MainRouter } from './router/MainRouter'

function App() {


  return (
    <>
      <NavBar />
      <Footer />
      <Home />
      <MainRouter/>
    </>
  )
}

export default App
