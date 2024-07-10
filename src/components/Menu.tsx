import Wrapper from "./Wrapper";
import logoMenu from "/logoMenu.svg";
import github from "/github.svg";
import linkedin from "/linkedin.svg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState("");
  const [ul, setUl] = useState("hidden");

  const openMenu = () => {
    if (menu === "") {
      setMenu("h-[100vh] w-[100vw] absolute z-20");
      setUl(
        "flex gap-6 text-center h-96 w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      );
    } else {
      setMenu("");
      setUl("hidden");
    }
  };

  const closeMenu = () => {
    setMenu('')
    setUl("hidden");
  }

  return (
    <header className={`bg-background ${menu}`}>
      <Wrapper width="w-[80%]">
        <div className="flex justify-between items-center bg-background py-4">
          <div className="text-heading md:hidden" onClick={openMenu}>
            <MenuIcon />
          </div>
          <img className="w-10 hidden md:block" src={logoMenu} alt="" />
          <ul
            className={`${ul} md:flex md:flex-row flex-col gap-5 text-paraghaph text-sm md:text-lg md:gap-10`}
          >
            <li onClick={closeMenu} className="h-[100%] flex items-center justify-center">
              <Link to={"/"}>Inicio</Link>
            </li>
            <li onClick={closeMenu} className="h-[100%] flex items-center justify-center">
              <Link to={"/sobremim"}>Sobre</Link>
            </li>
            <li onClick={closeMenu} className="h-[100%] flex items-center justify-center">
              <Link to={"/tecnologias"}> Tecnologias </Link>
            </li>
            <li onClick={closeMenu} className="h-[100%] flex items-center justify-center">
              {" "}
              <Link to={"/projetos"}> Projetos </Link>
            </li>
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
