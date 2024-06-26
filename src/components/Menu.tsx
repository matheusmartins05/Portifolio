import NavLink from "./NavLink";
import Wrapper from "./Wrapper";
import logoMenu from "/logoMenu.webp"
import github from "/github.svg"
import linkedin from "/linkedin.svg"
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <Wrapper>
        <header className="flex justify-around items-center bg-background py-4">

                <img className="w-10" src={logoMenu} alt="" />
                <ul className="flex gap-2 text-paraghaph text-sm">
                <NavLink><Link to={"/"}>Inicio</Link></NavLink>
                <NavLink><Link to={"/sobremim"}>Sobre</Link></NavLink>
                <NavLink>Projetos</NavLink>
                <NavLink>Contato</NavLink>
                </ul>  
                
                <div className="flex gap-2">
                    <img className="w-6" src={github} alt="" />
                    <img className="w-6" src={linkedin} alt="" />
                </div>
        </header>
        </Wrapper>        
    )
}