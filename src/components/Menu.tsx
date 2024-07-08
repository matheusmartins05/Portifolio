import NavLink from "./NavLink";
import Wrapper from "./Wrapper";
import logoMenu from "/logoMenu.svg";
import github from "/github.svg";
import linkedin from "/linkedin.svg";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header className="bg-background">
      <Wrapper width="w-[80%]">
        <div className="flex justify-between items-center bg-background py-4">
            <img className="w-10" src={logoMenu} alt="" />
            <ul className="md:flex gap-2 text-paraghaph text-sm md:text-lg md:gap-10 hidden">
              <NavLink>
                <Link to={"/"}>Inicio</Link>
              </NavLink>
              <NavLink>
                <Link to={"/sobremim"}>Sobre</Link>
              </NavLink>
              <NavLink><Link to={"/tecnologias"}> Tecnologias </Link></NavLink>
              <NavLink> <Link to={"/projetos"}> Projetos </Link></NavLink>
            </ul>
            <div className="flex gap-2">
              <img className="w-6" src={github} alt="" />
              <img className="w-6" src={linkedin} alt="" />
            </div>
        </div>
      </Wrapper>
    </header>
  );
}
