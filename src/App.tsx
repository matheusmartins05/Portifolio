import { Route, Routes } from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Projetos from "./pages/Projetos"
import Tecnologias from "./pages/Tecnologias"


function App() {

  return (
    <>
     <Menu/>
     <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobremim" element={<Sobre/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
          <Route path="/tecnologias" element={<Tecnologias/>}/>
     </Routes>
    </>
  )
}

export default App
