import CardTecnologia from "../components/CardTecnologia";
import Wrapper from "../components/Wrapper";
import  tecnologias  from "../components/techs.json";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";



export default function Tecnologias(){
    return(
        <Wrapper width="md:w-[80%] w-[90%] mx-auto">
            <section className="md:py-12 py-10  text-center font-poppins leading-5">
          <div className="relative left-[4%] md:left-[5%] top-7 md:top-8 text-paraghaph flex items-center w-[10%]"><Link to={"/"}><HomeIcon/></Link> </div>

                <h1 className="md:text-4xl text-2xl bg-gradient-to-r from-[#449064] to-[#655048] text-transparent bg-clip-text">Minhas habilidades</h1>
                <p className="text-paraghaph mt-2">Tecnologias que tenho trabalhado recentemente.</p>

                <div className="flex flex-wrap gap-8 justify-between  flex-1  mx-auto py-10 w-[90%]">
                    {tecnologias.map((element) => <CardTecnologia imgTech={element.imagem} nomeTech={element.nome} key={element.id}/>)}
                </div>
            </section>
        </Wrapper>
    )
}