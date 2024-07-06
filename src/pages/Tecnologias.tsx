import CardTecnologia from "../components/CardTecnologia";
import Wrapper from "../components/Wrapper";
import  tecnologias  from "../components/techs.json";

export default function Tecnologias(){
    return(
        <Wrapper width="md:w-[80%] w-[90%] mx-auto">
            <section className="md:py-20 py-10  text-center font-poppins leading-5">
                <h1 className="md:text-4xl text-2xl text-primary">Minhas habilidades</h1>
                <p className="text-paraghaph mt-2">Tecnologias que tenho trabalhado recentemente.</p>

                <div className="flex flex-wrap gap-4 justify-between  flex-1  mx-auto py-10 w-[90%]">
                    {tecnologias.map((element) => <CardTecnologia imgTech={element.imagem} nomeTech={element.nome} key={element.id}/>)}
                </div>
            </section>
        </Wrapper>
    )
}