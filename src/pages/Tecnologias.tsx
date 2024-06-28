import CardTecnologia from "../components/CardTecnologia";
import Wrapper from "../components/Wrapper";
import  tecnologias  from "../components/techs.json";

export default function Tecnologias(){
    return(
        <Wrapper width="w-[80%]">
            <section className="py-20  text-center font-poppins leading-10">
                <h1 className="text-4xl text-primary">Minhas habilidades</h1>
                <p className="text-paraghaph">Tecnologias que tenho trabalhado recentemente.</p>

                <div className="flex flex-wrap gap-4 justify-between  flex-1  mx-auto py-10 w-[80%]">
                    {tecnologias.map((element) => <CardTecnologia imgTech={element.imagem} nomeTech={element.nome} key={element.id}/>)}
                </div>
            </section>
        </Wrapper>
    )
}