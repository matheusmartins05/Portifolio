import NavLink from "./NavLink";
import Wrapper from "./Wrapper";
import logoMenu from "/logoMenu.webp"
import github from "/github.svg"
import linkedin from "/linkedin.svg"

export default function Menu(){
    return(
        <Wrapper>
        <header className="flex justify-around items-center bg-[#646e78a9] h-16">

                <img className="w-10" src={logoMenu} alt="" />
                <ul className="flex gap-2 text-[#E5ECF4] text-sm">
                <NavLink>Inicio</NavLink>
                <NavLink>Habilidades</NavLink>
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