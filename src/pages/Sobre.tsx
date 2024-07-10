
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import minhaFoto from "/minhaFoto2.png"
import HomeIcon from '@mui/icons-material/Home';


export default function Sobre() {

  
  return (
      <section className="bg-background  lg:py-10 h-screen sm">
        <Wrapper width="lg:w-[60%] w-[90%] mx-auto">
          <div className="flex flex-col w-[100%] bg-[#121316] rounded-sm">
          <div className="relative left-[4%] top-2 text-paraghaph flex items-center w-[10%]"><Link to={"/"}><HomeIcon/></Link> </div>
            <div className="text-heading flex flex-col  gap-2 text-left  w-[90%] sm:w-[80%] relative z-10 mt-5 ml-[5%]">
              <h2 className="lg:text-3xl text-2xl bg-gradient-to-r from-[#449064] to-[#655048] text-transparent bg-clip-text">Muito prazer, sou <span className="text-nowrap">Matheus Santos Martins</span></h2>
              <div className="h-px w-[80%] sm:w-3/5 md:w-2/4 bg-[#655048] lg:my-2"></div>
              <p className="leading-6 lg:mb-4 text-paraghaph text-sm sm:w-[70%] ">Sou um desenvolvedor front end, formado em Análise e Desenvolvimento de Sistemas, em busca da minha primeira oportunidade na área. Além de minhas habilidades em programação, sou entusiasta da área de marketing, o que me proporciona uma visão abrangente e criativa para desenvolver interfaces de usuário atrativas e funcionais. Estou motivado a aplicar meus conhecimentos e aprender continuamente, contribuindo de forma significativa para projetos inovadores.</p>
          
            </div>

            <figure className="self-end flex items-end justify-between w-[100%]  sm:h-52 lg:h-36">
              <div className=" flex flex-col md:flex-row md:items-center md:h-[100%] gap-6 text-sm sm:text-base mb-2 lg:mb-4 ml-[5%] w-[100%]">
                <Button style="bg-[#655048] text-heading w-[80%] md:h-[20%] lg:h-[28%] md:w-[40%] lg:w-32 p-2 rounded-lg"> <Link to={"/tecnologias"}>Tecnologias</Link> </Button>
                <Button style="bg-[#655048] text-heading w-[80%] md:h-[20%] md:w-[40%] lg:h-[28%] lg:w-32 p-2 rounded-lg"> <Link to={"/projetos"}> Projetos </Link>  </Button>
              </div>
              <img className=" max-w-80 w-[50%] float-end" src={minhaFoto} alt="" />
            </figure>
          </div>
        </Wrapper>
      </section>

  );
}
