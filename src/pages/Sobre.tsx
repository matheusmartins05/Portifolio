
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import minhaFoto from "/minhaFoto2.png"

export default function Sobre() {
  return (
      <section className="bg-background py-20 sm:py-10 h-screen">
        <Wrapper width="sm:w-[60%] w-[90%] mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center text-center w-[100%] bg-[#121316] rounded-sm">

            <div className="text-heading flex flex-col  gap-2 sm:text-left text-center sm:w-96 w-[90%] relative z-10 mt-10 sm:ml-10 ">
              <h2 className="sm:text-3xl text-2xl bg-gradient-to-r from-[#449064] to-[#655048] text-transparent bg-clip-text">Muito prazer, sou <span className="text">Matheus Santos Martins</span></h2>
              <div className="h-px sm:w-[80%] bg-[#655048]"></div>
              <p className="leading-6 sm:mb-4 text-paraghaph text-sm">Sou um desenvolvedor front end, formado em Análise e Desenvolvimento de Sistemas, em busca da minha primeira oportunidade na área. Além de minhas habilidades em programação, sou entusiasta da área de marketing, o que me proporciona uma visão abrangente e criativa para desenvolver interfaces de usuário atrativas e funcionais. Estou motivado a aplicar meus conhecimentos e aprender continuamente, contribuindo de forma significativa para projetos inovadores.</p>
          
              <div className="hidden sm:flex justify-center md:justify-start gap-4 text-sm mb-2 ">
                <Button style="bg-[#655048] text-heading w-32 p-2 rounded-lg"> <Link to={"/tecnologias"}>Tecnologias</Link> </Button>
                <Button style="bg-[#655048] text-heading w-32 p-2 rounded-lg"> <Link to={"/projetos"}> Projetos </Link>  </Button>
              </div>
            </div>

            <figure className="self-end flex items-end justify-between w-[100%]">
              <div className=" flex flex-col gap-6 text-xs mb-2 ml-6 sm:hidden w-[35%]">
                <Button style="bg-[#655048] text-heading w-[100%] sm:w-32 p-2 rounded-lg"> <Link to={"/tecnologias"}>Tecnologias</Link> </Button>
                <Button style="bg-[#655048] text-heading w-[100%] sm:w-32 p-2 rounded-lg"> <Link to={"/projetos"}> Projetos </Link>  </Button>
              </div>
              <img className="sm:w-[100%] max-w-80 w-[50%] float-end" src={minhaFoto} alt="" />
            </figure>
          </div>
        </Wrapper>
      </section>

  );
}
