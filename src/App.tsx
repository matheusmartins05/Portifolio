import { Route, Routes } from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"


function App() {

  return (
    <>
     <Menu/>
     <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobremim" element={<Sobre/>}/>
     </Routes>
    </>
  )
}

export default App
